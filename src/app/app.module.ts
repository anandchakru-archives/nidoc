import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FirebaseinitComponent } from './components/firebaseinit/firebaseinit.component';
import { NiviteinitComponent } from './components/niviteinit/niviteinit.component';
import { CodeComponent } from './components/code/code.component';
import { FirebasehostComponent } from './components/firebasehost/firebasehost.component';
import { TestinviteComponent } from './components/testinvite/testinvite.component';
import { EmailguestsComponent } from './components/emailguests/emailguests.component';
import { SharephotosComponent } from './components/sharephotos/sharephotos.component';
import { TrackrsvpComponent } from './components/trackrsvp/trackrsvp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirebaseinitComponent,
    NiviteinitComponent,
    CodeComponent,
    FirebasehostComponent,
    TestinviteComponent,
    EmailguestsComponent,
    TrackrsvpComponent,
    SharephotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
