import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'n3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public app: AppService) { }
}
