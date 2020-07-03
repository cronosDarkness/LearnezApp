import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginasPageRoutingModule } from './paginas-routing.module';

import { PaginasPage } from './paginas.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginasPageRoutingModule,
    SharedModule,
  ],
  declarations: [PaginasPage]
})
export class PaginasPageModule {}
