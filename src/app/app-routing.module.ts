import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'img-splitter',
    loadChildren: () => import('./screens/image-splitter/image-splitter.module').then((m) => m.ImageSplitterModule),
  },
  {
    path: 'music-player',
    loadChildren: () => import('./screens/audio-player/audio-player.module').then((m) => m.AudioPlayerModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
