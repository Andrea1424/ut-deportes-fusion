import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudTutoriaPageRoutingModule } from './crud-tutoria-routing.module';

import { CrudTutoriaPage } from './crud-tutoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudTutoriaPageRoutingModule
  ],
  declarations: [CrudTutoriaPage]
})
export class CrudTutoriaPageModule {}
