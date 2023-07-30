import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserScreenComponent } from './components/user-screen/user-screen.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { AuthGuard } from './Auth/auth.guard';

const routes: Routes = [

  { path: 'userScreen', component: UserScreenComponent ,canActivate: [AuthGuard]},
  { path: 'login', component: LoginScreenComponent },
  { path: '', component: LoginScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
