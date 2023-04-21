import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormschoolDataPage } from './formschool-data.page';

const routes: Routes = [
  {
    path: '',
    component: FormschoolDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormschoolDataPageRoutingModule {}
