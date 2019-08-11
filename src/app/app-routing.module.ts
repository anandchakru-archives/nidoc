import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FirebaseinitComponent } from './components/firebaseinit/firebaseinit.component';
import { NiviteinitComponent } from './components/niviteinit/niviteinit.component';
import { CodeComponent } from './components/code/code.component';
import { FirebasehostComponent } from './components/firebasehost/firebasehost.component';
import { TestinviteComponent } from './components/testinvite/testinvite.component';
import { EmailguestsComponent } from './components/emailguests/emailguests.component';
import { TrackrsvpComponent } from './components/trackrsvp/trackrsvp.component';
import { SharephotosComponent } from './components/sharephotos/sharephotos.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'firebaseinit', component: FirebaseinitComponent },
  { path: 'niviteinit', component: NiviteinitComponent },
  { path: 'code', component: CodeComponent },
  { path: 'firebasehost', component: FirebasehostComponent },
  { path: 'testinvite', component: TestinviteComponent },
  { path: 'emailguests', component: EmailguestsComponent },
  { path: 'trackrsvp', component: TrackrsvpComponent },
  { path: 'sharephotos', component: SharephotosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
