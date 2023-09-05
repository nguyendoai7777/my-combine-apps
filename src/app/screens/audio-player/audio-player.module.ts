import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AudioPlayerComponent } from './audio-player.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddSongComponent } from '@scr/audio-player/components/add-song/add-song.component';
import { SongListComponent } from '@scr/audio-player/components/song-list/song-list.component';
import { MainListComponent } from '@scr/audio-player/components/main-list/main-list.component';
import { MediaControllerComponent } from '@scr/audio-player/components/media-controller/media-controller.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DurationConverterPipe, LyricPipe } from '@pipes/common.pipe';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { RouterModule } from '@angular/router';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';

@NgModule({
  declarations: [AudioPlayerComponent, AddSongComponent, SongListComponent, MainListComponent, MediaControllerComponent, EditDialogComponent, LyricPipe],
  exports: [AddSongComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    DurationConverterPipe,
    MatSlideToggleModule,
    MatSliderModule,
    FormsModule,
    MatAutocompleteModule,
    RouterModule.forChild([
      {
        path: '',
        component: AudioPlayerComponent,
      },
    ]),
    NgOptimizedImage,
  ],
})
export class AudioPlayerModule {}
