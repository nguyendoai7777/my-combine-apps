import { inject, Injectable, signal, TemplateRef } from '@angular/core';
import { getFromLocal, setToLocal } from '@shared/helper';
import { AutoPlay, LoopType, ShuffleType, SongProps } from '@app-types/common.types';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from '@services/common.service';

@Injectable({
  providedIn: 'root',
})
export class AudioPlayerService {
  volumeMax = 3;
  audio = new Audio();
  currentTime = 0;
  volume = +getFromLocal('volume', '1');
  position = 0;
  audioCtx = new AudioContext();
  duration = 0;
  track!: MediaElementAudioSourceNode;
  gainNode!: GainNode;
  panner!: StereoPannerNode;
  audioSourceNode!: AudioBufferSourceNode;
  currentSongPlaying?: SongProps = getFromLocal('lastSongPlayed', 'null');
  currentListPlaying?: SongProps[] = getFromLocal('currentListPlaying', 'null') || getFromLocal('songList');
  audioBuffer!: AudioBuffer;
  state = signal(false);
  isMute = signal(false);
  preVolume = signal(+getFromLocal('preVolume', '0'));
  loop = signal<LoopType>(getFromLocal('loop', 'null') || 0);
  shuffle = signal<ShuffleType>(getFromLocal('shuffle', 'null') || 0);
  autoPlay = signal<AutoPlay>(getFromLocal('autoPlay', 'null') || 1);
  remainingElements = (this.currentListPlaying || []).slice();
  alarm: number;
  onTimeout = signal(false);
  dialog = inject(MatDialog);
  cms = inject(CommonService);
  latestPlayedId = getFromLocal('id');
  constructor() {
    this.audio.crossOrigin = 'anonymous';
    this.setAudioLoop();
    this.track = this.audioCtx.createMediaElementSource(this.audio);
    if (this.currentSongPlaying) {
      this.audioEventHandleGroup();
      this.audio.onended = () => {
        if (this.autoPlay()) {
          this.next();
        }
        this.state.set(false);
        this.audio.currentTime = 0;
      };
      this.audio.onloadedmetadata = () => {
        this.duration = this.audio.duration;
      };
      this.audio.src = this.currentSongPlaying.url;
    }
    const pannerOptions: StereoPannerOptions = { pan: 0 };
    this.audioBuffer = this.audioCtx.createBuffer(2, this.audioCtx.sampleRate * 3, this.audioCtx.sampleRate);
    this.audioSourceNode = this.audioCtx.createBufferSource();
    this.panner = new StereoPannerNode(this.audioCtx, pannerOptions);
    this.gainNode = this.audioCtx.createGain();
    this.gainNode.gain.value = this.volume;
    this.track.connect(this.gainNode).connect(this.panner).connect(this.audioCtx.destination);
  }

  audioEventHandleGroup() {
    this.audio.ontimeupdate = () => {
      this.currentTime = this.audio.currentTime;
    };
    this.audio.onended = () => {
      this.state.set(false);
      this.audio.currentTime = 0;
      if (this.autoPlay()) {
        this.next();
      }
    };
    this.audio.onloadedmetadata = () => {
      this.duration = this.audio.duration;
    };
  }

  playByRemote(s: SongProps) {
    this.currentSongPlaying = s;
    setToLocal('id', s.id);
    setToLocal('lastSongPlayed', s);
    this.cms.justAdd.next(null);
    this.audio.src = s.url;
    this.audio.currentTime = 0;
    this.state.set(true);
    if (this.audioCtx.state === 'suspended') {
      void this.audioCtx.resume();
      this.audioEventHandleGroup();
    }
    void this.audio.play();
  }

  playOrPause(): void {
    this.state.update((pre) => !pre);
    if (this.audioCtx.state === 'suspended') {
      void this.audioCtx.resume();
    }
    if (this.state()) {
      this.play();
    } else {
      this.pause();
    }
  }

  resetPan() {
    this.position = 0;
    this.panner.pan.value = 0;
  }

  toggleVolume() {
    this.isMute.update((pre) => !pre);
    if (this.isMute()) {
      this.volume = 0;
      this.gainNode.gain.value = this.volume;
    } else {
      this.volume = +getFromLocal('preVolume', '0');
      this.gainNode.gain.value = this.volume;
    }
    setToLocal('volume', this.volume);
  }

  onTimeChange(e: any): void {
    this.currentTime = +e.target.value;
    this.audio.currentTime = +e.target.value;
  }

  onVolumeChange(e: any): void {
    this.volume = +e.target.value;
    this.gainNode.gain.value = this.volume;
    setToLocal('volume', this.volume);
    if (this.volume > 0) {
      setToLocal('preVolume', this.volume);
    }
  }

  onStereoChange(e: any): void {
    this.position = e.target.value;
    this.panner.pan.value = this.position;
  }

  play() {
    void this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  getShuffleSong() {
    return () => {
      if (this.remainingElements.length === 0) {
        this.remainingElements = (this.currentListPlaying || []).slice();
      }
      const randomIndex = Math.floor(Math.random() * this.remainingElements.length);
      const randomElement = this.remainingElements[randomIndex];
      this.remainingElements.splice(randomIndex, 1);
      return randomElement;
    };
  }

  next() {
    if (this.shuffle()) {
      const s = this.getShuffleSong()()!;
      this.playByRemote(s);
    } else {
      const index = this.currentListPlaying?.findIndex((e) => e.id === this.currentSongPlaying?.id)!;
      if (this.loop() === 2) {
        if (index === this.currentListPlaying!.length - 1) {
          this.playByRemote(this.currentListPlaying![0]);
        } else {
          if (index >= 0 || index < this.currentListPlaying!.length - 1) {
            this.playByRemote(this.currentListPlaying![index + 1]);
          }
          if (index === this.currentListPlaying!.length - 1) {
            this.playByRemote(this.currentListPlaying![index]);
          }
        }
      } else {
        if (index >= 0 && index < this.currentListPlaying!.length - 1) {
          this.playByRemote(this.currentListPlaying![index + 1]);
        }
        if (index === this.currentListPlaying!.length - 1) {
          this.playByRemote(this.currentListPlaying![index]);
        }
      }
    }
  }

  previous() {
    const index = this.currentListPlaying?.findIndex((e) => e.id === this.currentSongPlaying?.id)!;
    if (this.loop() === 2) {
      if (index === 0) {
        this.playByRemote(this.currentListPlaying!.at(-1)!);
      } else {
        this.playByRemote(this.currentListPlaying![index - 1]);
      }
    } else {
      if (index !== -1 && index > 0) {
        this.playByRemote(this.currentListPlaying![index - 1]);
      }
    }
  }

  toggleShuffle() {
    this.shuffle.update((p) => ((p + 1) % 2) as ShuffleType);
    setToLocal('shuffle', this.shuffle());
  }

  setAudioLoop() {
    this.audio.loop = this.loop() === 1;
  }

  setLoop() {
    this.loop.update((p) => ((p + 1) % 3) as LoopType);
    this.setAudioLoop();
    setToLocal('loop', this.loop());
  }

  setAutoPlay() {
    this.autoPlay.update((p) => ((p + 1) % 2) as AutoPlay);
    setToLocal('autoPlay', this.autoPlay());
    this.audio.addEventListener('ended', () => {
      if (this.autoPlay()) {
        this.next();
      }
    });
  }

  stopAfter(timeout: number) {
    this.onTimeout.set(true);
    this.alarm = setTimeout(() => {
      this.audio.pause();
      this.state.set(false);
      this.onTimeout.set(false);
    }, timeout) as unknown as number;
  }

  clearAlarm() {
    this.alarm && clearTimeout(this.alarm as number);
    this.onTimeout.set(false);
  }

  lastPlayedSong() {
    return getFromLocal<SongProps>('lastSongPlayed', 'null');
  }

  openDialogEdit(templateRef: TemplateRef<unknown>, callback?: () => void) {
    const dialogRef = this.dialog.open(templateRef);
    dialogRef.afterClosed().subscribe(() => callback && callback());
  }
}
