import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaDocInstrucPageRoutingModule } from './lista-doc-instruc-routing.module';

import { ListaDocInstrucPage } from './lista-doc-instruc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaDocInstrucPageRoutingModule
  ],
  declarations: [ListaDocInstrucPage]
})
export class ListaDocInstrucPageModule {}
