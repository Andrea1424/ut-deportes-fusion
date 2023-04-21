import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeInstructorPage } from './home-instructor.page';

const routes: Routes = [
  {
    path: '',
    component: HomeInstructorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeInstructorPageRoutingModule {}
