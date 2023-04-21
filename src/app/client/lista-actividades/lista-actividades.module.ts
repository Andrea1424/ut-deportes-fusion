import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaActividadesPageRoutingModule } from './lista-actividades-routing.module';

import { ListaActividadesPage } from './lista-actividades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaActividadesPageRoutingModule
  ],
  declarations: [ListaActividadesPage]
})
export class ListaActividadesPageModule {}
