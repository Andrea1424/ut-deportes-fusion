import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginAdminTutorPageRoutingModule } from './login-admin-tutor-routing.module';

import { LoginAdminTutorPage } from './login-admin-tutor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginAdminTutorPageRoutingModule
  ],
  declarations: [LoginAdminTutorPage]
})
export class LoginAdminTutorPageModule {}
