import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormSelectActivityPage } from './form-select-activity.page';

const routes: Routes = [
  {
    path: '',
    component: FormSelectActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormSelectActivityPageRoutingModule {}
