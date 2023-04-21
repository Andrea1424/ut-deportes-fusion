import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListDocumentosPage } from './list-documentos.page';

const routes: Routes = [
  {
    path: '',
    component: ListDocumentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListDocumentosPageRoutingModule {}
