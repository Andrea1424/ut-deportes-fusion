import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecoverPPassPage } from './recover-ppass.page';

const routes: Routes = [
  {
    path: '',
    component: RecoverPPassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecoverPPassPageRoutingModule {}
