import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {LogoutComponent} from './logout/logout.component';
import { from } from 'rxjs';
const routes: Routes = [
  {  path: '',
    component: LoginPageComponent
  },
  { path: 'home',
    component: HomeComponent,
  },
  { path: 'logout',
    component: LogoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
