import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioPlayerComponent } from '@scr/audio-player/audio-player.component';
import { ImageSplitterComponent } from '@scr/image-splitter/image-splitter.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'img-splitter',
  },
  {
    path: 'img-splitter',
    // component: ImageSplitterComponent,
    loadChildren: () => import('./screens/image-splitter/image-splitter.module').then((m) => m.ImageSplitterModule),
  },
  {
    path: 'music-player',
    // component: AudioPlayerComponent,
    loadChildren: () => import('./screens/audio-player/audio-player.module').then((m) => m.AudioPlayerModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
