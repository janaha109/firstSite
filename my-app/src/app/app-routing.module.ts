import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "**",
    component: HomepageComponent
  }
  // {
  //   path: '',
  //   component: MYComponent,
  //   loadChildren: './path/the.module#TheModule'
  // }
  // so you just restarted the server, now it will relook at the files and find out there actually aren't any errors
  //  see, successful, magically
  // i thought it wouldve deleted it all
  // nope, it basically just turns off your ability to see things and back on
  //okay
  // oh, there is one more error
  // go to app.module.ts
  //  now its working
  //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
