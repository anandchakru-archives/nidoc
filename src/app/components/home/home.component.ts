import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'n3-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  steps = [
    {
      route: ['/', 'firebaseinit'],
      title: 'Create a firebase project',
      description: '',
      note: 'https://firebase.google.com'
    }, {
      route: ['/', 'niviteinit'],
      title: 'Create a nivite',
      description: '',
      note: 'https://nivite.jrvite.com'
    }, {
      route: ['/', 'code'],
      title: 'Get creative with designs',
      description: '',
      note: 'Use VS Code'
    }, {
      route: ['/', 'firebasehost'],
      title: 'Host on firebase',
      description: '',
      note: 'Use CLI'
    }, {
      //
      route: ['/', 'testinvite'],
      title: 'Test your invite',
      description: '',
      note: 'test automation coming soon'
    }, {
      route: ['/', 'emailguests'],
      title: 'Email guests',
      description: '',
      note: 'phone messages coming soon'
    }, {
      route: ['/', 'trackrsvp'],
      title: 'Track RSVP',
      description: '',
      note: 'https://nivite.jrvite.com'
    }, {
      route: ['/', 'sharephotos'],
      title: 'Share Photos',
      description: '',
      note: 'https://nivite.jrvite.com'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
