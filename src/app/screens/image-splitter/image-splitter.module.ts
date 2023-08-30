import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSplitterComponent } from './image-splitter.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ImageSplitterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ImageSplitterComponent,
      },
    ]),
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
  ],
})
export class ImageSplitterModule {}
