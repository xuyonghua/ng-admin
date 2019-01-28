import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  // passport
  {path: 'login', component: LoginComponent},
  {path: 'main', redirectTo: '/main', pathMatch: 'full'},
  {path: 'summary', redirectTo: '/summary', pathMatch: 'full'},
  {path: 'setting', redirectTo: '/setting', pathMatch: 'full'},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
