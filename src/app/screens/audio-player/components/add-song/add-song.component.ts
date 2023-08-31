import { Component, ElementRef, EventEmitter, inject, Input, OnChanges, Output, signal, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { Mode, SongProps } from '@app-types/common.types';
import { CommonService } from '@services/common.service';
import { getFromLocal, setToLocal } from '@shared/helper';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss'],
})
export class AddSongComponent implements OnChanges {
  @ViewChild('formCpn') formCpn!: ElementRef<HTMLInputElement>;
  @ViewChild('addForm') formRef!: FormGroupDirective;

  @Input() remote = false;
  @Input() mode: Mode = 'new';
  @Input() currentEdit?: SongProps | null;
  @Output() saveEdite = new EventEmitter<void>();
  @Output() formChange = new EventEmitter<FormGroupDirective>();
  currentSongOnEdit?: SongProps | null;
  // DI
  fb = inject(FormBuilder);
  cmS = inject(CommonService);
  dialog = inject(MatDialog);
  form = this.fb.group({
    name: this.fb.nonNullable.control('', [Validators.required]),
    url: this.fb.nonNullable.control('', [Validators.required]),
    avatar: this.fb.nonNullable.control(''),
    lyrics: this.fb.nonNullable.control(''),
  });

  submitted = signal(false);

  ngOnInit() {
    this.emitFormRef();
    this.form.valueChanges.subscribe(() => this.emitFormRef());
  }

  emitFormRef() {
    this.formChange.emit(this.formRef);
  }

  addAnSubject(formRef: FormGroupDirective) {
    this.submitted.set(true);
    if (this.form.valid) {
      const currentList = getFromLocal<SongProps[]>('songList');
      if (this.mode === 'new') {
        const addedList: SongProps[] = [
          ...currentList,
          {
            url: this.form.controls.url.value,
            name: this.form.controls.name.value,
            avatar: this.form.controls.avatar.value ?? '',
            lyrics: this.form.controls.lyrics.value?.replaceAll('\n', '<br>') ?? '',
            id: Date.now(),
          },
        ];

        if (!this.remote) {
          this.formCpn.nativeElement.focus();
        }
        setToLocal('songList', addedList);
        this.cmS.justAdd.next(null);
        formRef.resetForm();
        this.submitted.set(false);
        this.form.reset({
          url: '',
          name: '',
          avatar: '',
          lyrics: '',
        });
      } else {
        const findItem = currentList.find((s) => s.id === this.currentSongOnEdit?.id);
        if (findItem) {
          const { url, name, avatar, lyrics } = this.form.getRawValue();
          findItem.name = name;
          findItem.url = url;
          findItem.avatar = avatar;
          findItem.lyrics = lyrics;
        }
        setToLocal('songList', currentList);
        setToLocal('lastSongPlayed', findItem);
        this.cmS.justAdd.next(null);
      }

      this.dialog.closeAll();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.currentEdit) {
      this.currentSongOnEdit = this.currentEdit;
      const { url, name, avatar, lyrics } = this.currentEdit;
      if (this.mode === 'update') {
        this.form.patchValue({
          name,
          url,
          lyrics: lyrics.replaceAll('<br>', '\n'),
          avatar,
        });
      } else {
        this.form.patchValue({
          name: '',
          lyrics: '',
          avatar: '',
          url: '',
        });
      }
    }
  }
}
