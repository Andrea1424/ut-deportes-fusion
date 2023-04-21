import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeInstructorPageRoutingModule } from './home-instructor-routing.module';

import { HomeInstructorPage } from './home-instructor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeInstructorPageRoutingModule
  ],
  declarations: [HomeInstructorPage]
})
export class HomeInstructorPageModule {}
