import { AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, signal, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, Validators } from '@angular/forms';
import { AudioPlayerService } from '@scr/audio-player/audio-player.service';
import { MatDialog } from '@angular/material/dialog';
import { minutesValidator } from '@validators/song.validator';
import { map, Observable, startWith } from 'rxjs';
import { DurationConverterPipe } from '@pipes/common.pipe';
import { Mode, SongProps } from '@app-types/common.types';
import { CommonService } from '@services/common.service';
import { getFromLocal } from '@shared/helper';

@Component({
  selector: 'media-controller',
  templateUrl: './media-controller.component.html',
  styleUrls: ['./media-controller.component.scss'],
  providers: [DurationConverterPipe],
})
export class MediaControllerComponent implements OnInit, OnDestroy {
  @ViewChild('alarmDialog') alarmDialog!: TemplateRef<unknown>;
  @ViewChild('formAlarmRef') formAlarmRef!: FormGroupDirective;
  @ViewChild('audioRef', { static: true }) audioRef!: ElementRef<HTMLAudioElement>;
  currentSongSelected?: SongProps | null;
  mediaService = inject(AudioPlayerService);
  cms = inject(CommonService);
  dialog = inject(MatDialog);
  fb = inject(FormBuilder);
  countdownInterval: any;
  countdownView = signal(0);
  autoPlay = new FormControl(this.mediaService.autoPlay() === 1 || true);

  alarmForm = this.fb.group({
    hourControl: this.fb.nonNullable.control('', [Validators.pattern(/^[0-9]*$/)]),
    minuteControl: this.fb.nonNullable.control('', [Validators.required, minutesValidator, Validators.pattern(/^[0-9]*$/)]),
  });
  mode: Mode = 'update';
  list: SongProps[] = [];
  minutes = Array.from({ length: 60 }, (_, i) => i + 1 + '');
  filteredOptions?: Observable<string[]>;

  ngOnInit(): void {
    this.filteredOptions = this.alarmForm.controls.minuteControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
    this.cms.justAdd$.subscribe(() => {
      this.getList();
    });
    window.addEventListener('keyup', (e) => {
      if (e.code === 'Space') {
        this.mediaService.playOrPause();
      }
      if (e.altKey && e.key === 'n') {
        this.mediaService.next();
      }
      if (e.altKey && e.key === 'b') {
        this.mediaService.previous();
      }
    });
  }

  getList() {
    this.list = getFromLocal('songList', '[]');
    this.currentSongSelected = this.list.find((r) => r.id === getFromLocal('id'));
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.minutes.filter((option) => option.toLowerCase().includes(filterValue));
  }

  countdown(current: number) {
    this.countdownInterval = setInterval(() => {
      const remain = (current -= 1000);
      if (remain < 0) {
        clearTimeout(this.countdownInterval!);
      } else {
        this.countdownView.set((current - 1000) / 1000);
      }
    }, 1000);
  }

  setStopAfter(formRef: FormGroupDirective) {
    if (this.alarmForm.valid) {
      this.dialog.closeAll();
      const { hourControl, minuteControl } = this.alarmForm.getRawValue();
      const h2m = hourControl.length > 0 ? +hourControl * 3_600_000 : 0;
      const m2m = +minuteControl * 60_000;
      this.countdown(h2m + m2m);
      this.mediaService.stopAfter(h2m + m2m);
      formRef.resetForm();
    }
  }

  showAlarm() {
    const alarm = this.dialog.open(this.alarmDialog, {});
    alarm.afterClosed().subscribe(() => {
      this.formAlarmRef?.resetForm();
    });
  }

  ngOnDestroy() {}

  checkAlarm() {}

  clearTimer() {
    clearInterval(this.countdownInterval!);
    this.mediaService.clearAlarm();
  }
}
