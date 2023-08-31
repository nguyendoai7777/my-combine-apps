import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  justAdd = new BehaviorSubject(null);
  readonly justAdd$ = this.justAdd.asObservable();
  constructor() {}
  handleKeyBroadDown(drawer: MatDrawer) {
    /*window.addEventListener('keydown', (e: KeyboardEvent) => {
      console.log(e);
      if(e.code === 'ArrowLeft') {
        void drawer.close();
      }
      if(e.code === 'ArrowRight') {
        void drawer.open();
      }
    });*/
  }
}
