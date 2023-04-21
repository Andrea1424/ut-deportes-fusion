import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaTutoriasPageRoutingModule } from './lista-tutorias-routing.module';

import { ListaTutoriasPage } from './lista-tutorias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaTutoriasPageRoutingModule
  ],
  declarations: [ListaTutoriasPage]
})
export class ListaTutoriasPageModule {}
