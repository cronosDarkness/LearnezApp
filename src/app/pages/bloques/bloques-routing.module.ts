import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloquesPage } from './bloques.page';

const routes: Routes = [
  {
    path: '',
    component: BloquesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloquesPageRoutingModule {}
