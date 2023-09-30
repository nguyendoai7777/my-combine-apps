import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSplitterComponent } from './image-splitter.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DropFileDirective } from '../../common/directives/dropfile.directive';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  declarations: [ImageSplitterComponent, DropFileDirective],
  imports: [
    CommonModule,

    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    MatMenuModule,
    A11yModule,
    RouterModule.forChild([
      {
        path: '',
        component: ImageSplitterComponent,
      },
    ]),
  ],
})
export class ImageSplitterModule {}
