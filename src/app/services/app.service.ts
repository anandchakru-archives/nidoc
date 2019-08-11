import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  collapsed = true;
  constructor() { }
  toggleNav() {
    this.collapsed = !this.collapsed;
  }
  hideNav() {
    this.collapsed = true;
  }
}
