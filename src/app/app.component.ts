import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { BUILDINFO } from 'src/environments/buildinfo';

@Component({
  selector: 'n3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  buildinfo = BUILDINFO;
  constructor(public app: AppService) { }
}
