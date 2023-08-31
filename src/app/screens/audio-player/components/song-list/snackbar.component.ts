import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'v-snackbar',
  template: `
    <div class="flex">
      <span matSnackBarLabel>Cannot be left blank</span>
      <span matSnackBarActions>
        <button mat-icon-button matSnackBarAction (click)="snackBarPortalRef.dismissWithAction()">
          <mat-icon style="color: #fff">close</mat-icon>
        </button>
      </span>
    </div>
  `,
  styles: [``],
})
export class VSnackbar {
  snackBarPortalRef = inject(MatSnackBarRef);
}
