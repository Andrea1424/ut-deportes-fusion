import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginAdminTutorPage } from './login-admin-tutor.page';

const routes: Routes = [
  {
    path: '',
    component: LoginAdminTutorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginAdminTutorPageRoutingModule {}
