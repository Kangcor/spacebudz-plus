import { Component } from '@angular/core';
import { Spacebudz } from './spacebudz';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spacebudz-plus';
  budz = [];

  constructor() {
    this.budz = Spacebudz.budz;
  }
}
