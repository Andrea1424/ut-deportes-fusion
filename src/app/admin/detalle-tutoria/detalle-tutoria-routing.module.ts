import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleTutoriaPage } from './detalle-tutoria.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleTutoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleTutoriaPageRoutingModule {}
