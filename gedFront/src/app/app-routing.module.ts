import { AuthGuardService } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GedUserComponent } from './ged-users/ged-user/ged-user.component';
import { ProfileComponent } from './ged-users/profile/profile.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: GedUserComponent},
  { path: 'profile', component: ProfileComponent,canActivate: [AuthGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
