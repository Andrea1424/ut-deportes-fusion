import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPostsPageRoutingModule } from './form-posts-routing.module';

import { FormPostsPage } from './form-posts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPostsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormPostsPage]
})
export class FormPostsPageModule {}
