import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './component/welcome/welcome.component';
import {ErrorComponent} from './component/error/error.component';
import {LoginComponent} from './component/login/login.component';
import {LogoutComponent} from './component/logout/logout.component';
import {RouteGuardService} from './service/guard/route-guard.service';
import {PrivatePageComponent} from './component/private-page/private-page.component';
import {ServerDataComponent} from './component/server-data/server-data.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
  {path: 'private', component: PrivatePageComponent, canActivate: [RouteGuardService]},
  {path: 'data', component: ServerDataComponent, canActivate: [RouteGuardService]},

  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
