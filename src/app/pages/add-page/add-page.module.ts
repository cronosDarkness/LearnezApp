import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPagePageRoutingModule } from './add-page-routing.module';

import { AddPagePage } from './add-page.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPagePageRoutingModule,
    SharedModule,
  ],
  declarations: [AddPagePage]
})
export class AddPagePageModule {}
