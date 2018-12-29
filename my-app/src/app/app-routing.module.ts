import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    path: "**",
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
