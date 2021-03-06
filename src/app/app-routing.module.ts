import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'libros/:grado-id',
    loadChildren: () => import('./pages/libros/libros.module').then( m => m.LibrosPageModule)
  },
  {
    path: 'bloques/:libro-id/:grado-id',
    loadChildren: () => import('./pages/bloques/bloques.module').then( m => m.BloquesPageModule)
  },
  {
    path: 'bloque/:bloque-id/pagina/:num-pag',
    loadChildren: () => import('./pages/paginas/paginas.module').then( m => m.PaginasPageModule)
  },
  {
    path: 'add-page',
    loadChildren: () => import('./pages/add-page/add-page.module').then( m => m.AddPagePageModule)
  },
  {
    path: 'image-modal',
    loadChildren: () => import('./pages/image-modal/image-modal.module').then( m => m.ImageModalPageModule)
  },
  {
    path: 'examen/:bloque-id',
    loadChildren: () => import('./pages/examen/examen.module').then( m => m.ExamenPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
