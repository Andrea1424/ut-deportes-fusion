import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPostsPage } from './form-posts.page';

const routes: Routes = [
  {
    path: '',
    component: FormPostsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPostsPageRoutingModule {}
