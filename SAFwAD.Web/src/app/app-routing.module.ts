import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MsalGuard } from '@azure/msal-angular';

import { ApiComponent } from './components/api/api.component';
import { HomeComponent } from './components/home/home.component';
import { SimpleComponent } from './components/simple/simple.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'simple',
    component: SimpleComponent
  },
  {
    path: 'fetch',
    component: ApiComponent,
    canActivate: [MsalGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
