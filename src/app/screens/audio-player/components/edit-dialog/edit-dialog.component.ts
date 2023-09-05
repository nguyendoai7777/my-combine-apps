import { Component, inject, Input } from '@angular/core';
import { AudioPlayerService } from '@scr/audio-player/audio-player.service';
import { MatDialog } from '@angular/material/dialog';
import { FormGroupDirective } from '@angular/forms';
import { Mode, SongProps } from '@app-types/common.types';
import { getFromLocal } from '@shared/helper';

@Component({
  selector: 'edit-dialog',
  template: `
    <h1 mat-dialog-title>{{ mode === 'update' ? 'Update info' : 'Add new' }}</h1>
    <div mat-dialog-content>
      <add-song #instance [mode]="mode" [remote]="mode === 'new'" [currentEdit]="current ? current : currentSongPlaying" (formChange)="onFormChange($event)" />
    </div>
    <div mat-dialog-actions class="actions">
      <div class="px-2 ms-auto">
        <button class="mb-3" *ngIf="mode === 'new'; else update" mat-raised-button (click)="instance.addAnSubject(form)">add</button>
        <ng-template #update>
          <button mat-stroked-button [color]="form?.invalid ? 'warn' : 'primary'" [class.invalid-f]="form?.invalid" (click)="instance.addAnSubject(form)">
            <mat-icon class="reset-style-icon">done</mat-icon>
          </button>
        </ng-template>
      </div>
    </div>
  `,
  styles: [
    `
      .actions {
        padding: 12px 24px 24px 24px;
      }
    `,
  ],
})
export class EditDialogComponent {
  @Input() current?: SongProps | null;
  @Input() mode: Mode = 'update';
  dialog = inject(MatDialog);
  form: any;
  currentSongPlaying = getFromLocal<SongProps>('lastSongPlayed', 'null');

  onFormChange(formRef: FormGroupDirective) {
    this.form = formRef;
  }
}

/*[class.invalid-f]="form?.invalid"
          (click)="onSaveEdit(); instance.addAnSubject(form)"*/
