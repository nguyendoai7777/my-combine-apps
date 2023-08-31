import { Component, inject, OnInit } from '@angular/core';
import { SongProps } from '@app-types/common.types';
import { AudioPlayerService } from '@scr/audio-player/audio-player.service';
import { CommonService } from '@services/common.service';
import { getFromLocal } from '@shared/helper';

@Component({
  selector: 'main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss'],
  host: {
    class: `flex align-start`,
  },
})
export class MainListComponent implements OnInit {
  list: SongProps[] = [];
  // DI
  mediaService = inject(AudioPlayerService);
  cmS = inject(CommonService);

  ngOnInit(): void {
    this.cmS.justAdd$.subscribe(() => this.getList());
    this.getList();
  }

  getList() {
    this.list = getFromLocal('songList', '[]');
  }
}
