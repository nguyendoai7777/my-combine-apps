import { Component } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss'],
  host: {
    style: `
      background-color: #3F51B5;
      box-shadow: 0 3px 5px -1px #0003, 0 6px 10px #00000024, 0 1px 18px #0000001f;
    `,
    class: `sticky-top`,
  },
})
export class AppBarComponent {}
