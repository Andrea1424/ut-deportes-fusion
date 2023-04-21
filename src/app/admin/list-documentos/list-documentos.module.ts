import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListDocumentosPageRoutingModule } from './list-documentos-routing.module';

import { ListDocumentosPage } from './list-documentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListDocumentosPageRoutingModule
  ],
  declarations: [ListDocumentosPage]
})
export class ListDocumentosPageModule {}
