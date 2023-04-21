import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecoverPPassPageRoutingModule } from './recover-ppass-routing.module';

import { RecoverPPassPage } from './recover-ppass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecoverPPassPageRoutingModule
  ],
  declarations: [RecoverPPassPage]
})
export class RecoverPPassPageModule {}
