import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudTutoriaPage } from './crud-tutoria.page';

const routes: Routes = [
  {
    path: '',
    component: CrudTutoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudTutoriaPageRoutingModule {}
