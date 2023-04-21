import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormSelectActivityPageRoutingModule } from './form-select-activity-routing.module';

import { FormSelectActivityPage } from './form-select-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormSelectActivityPageRoutingModule
  ],
  declarations: [FormSelectActivityPage]
})
export class FormSelectActivityPageModule {}
