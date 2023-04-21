import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaDocInstrucPage } from './lista-doc-instruc.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDocInstrucPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDocInstrucPageRoutingModule {}
