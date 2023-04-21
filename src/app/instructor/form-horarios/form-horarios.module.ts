import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormHorariosPageRoutingModule } from './form-horarios-routing.module';

import { FormHorariosPage } from './form-horarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormHorariosPageRoutingModule
  ],
  declarations: [FormHorariosPage]
})
export class FormHorariosPageModule {}
