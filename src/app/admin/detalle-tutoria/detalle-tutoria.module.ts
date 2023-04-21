import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleTutoriaPageRoutingModule } from './detalle-tutoria-routing.module';

import { DetalleTutoriaPage } from './detalle-tutoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleTutoriaPageRoutingModule
  ],
  declarations: [DetalleTutoriaPage]
})
export class DetalleTutoriaPageModule {}
