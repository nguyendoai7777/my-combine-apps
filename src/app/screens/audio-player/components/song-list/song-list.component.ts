import { Component, inject, OnDestroy, OnInit, signal, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SongProps } from '@app-types/common.types';
import { CommonService } from '@services/common.service';
import { AudioPlayerService } from '@scr/audio-player/audio-player.service';
import { getFromLocal, setToLocal } from '@shared/helper';

@Component({
  selector: 'song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss'],
  host: {
    class: 'current-list',
  },
})
export class SongListComponent implements OnInit, OnDestroy {
  @ViewChild('dialogRef') dialogRef!: TemplateRef<any>;
  @ViewChild('editDialogRef') editDialogRef!: TemplateRef<any>;
  @ViewChild('snackbarRef') snackbarRef!: TemplateRef<any>;
  list: SongProps[] = [];
  currentSongSelected?: SongProps | null;
  timeOut?: number;
  inEditMode = signal(false);
  // DI
  mediaService = inject(AudioPlayerService);
  cmS = inject(CommonService);
  dialog = inject(MatDialog);

  ngOnInit() {
    this.getList();
    this.cmS.justAdd$.subscribe(() => {
      this.getList();
    });
  }

  selected(song: SongProps) {
    this.currentSongSelected = song;
  }

  onEdit() {
    const editDialogRef = this.dialog.open(this.editDialogRef, {});
  }

  openDialog() {
    const dialogRef = this.dialog.open(this.dialogRef);
    dialogRef.afterClosed().subscribe(() => (this.currentSongSelected = null));
  }

  onDelete() {
    const currentList = getFromLocal<SongProps[]>('songList');
    const removedList = currentList.filter((e) => !(e.id === this.currentSongSelected?.id));
    setToLocal('songList', removedList);
    this.getList();
    this.cmS.justAdd.next(null);
  }

  getList() {
    this.list = getFromLocal<SongProps[]>('songList');
  }

  ngOnDestroy() {
    this.timeOut && clearTimeout(this.timeOut);
  }
}
