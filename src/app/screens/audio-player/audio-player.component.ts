import { Component, inject } from '@angular/core';
import { AudioPlayerService } from '@scr/audio-player/audio-player.service';

@Component({
  selector: 'audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
  providers: [AudioPlayerService],
})
export class AudioPlayerComponent {
  service = inject(AudioPlayerService);
}
