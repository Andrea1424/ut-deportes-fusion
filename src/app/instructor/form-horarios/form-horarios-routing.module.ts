import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormHorariosPage } from './form-horarios.page';

const routes: Routes = [
  {
    path: '',
    component: FormHorariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormHorariosPageRoutingModule {}
