import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaTutoriasPage } from './lista-tutorias.page';

const routes: Routes = [
  {
    path: '',
    component: ListaTutoriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaTutoriasPageRoutingModule {}
