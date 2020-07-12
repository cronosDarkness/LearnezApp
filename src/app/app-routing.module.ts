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
    path: 'libros/:id',
    loadChildren: () => import('./pages/libros/libros.module').then( m => m.LibrosPageModule)
  },
  {
    path: 'bloques/:libro-id',
    loadChildren: () => import('./pages/bloques/bloques.module').then( m => m.BloquesPageModule)
  },
  {
    path: 'bloque/:bloque-id/pagina/:num-pag',
    loadChildren: () => import('./pages/paginas/paginas.module').then( m => m.PaginasPageModule)
  },  {
    path: 'add-page',
    loadChildren: () => import('./pages/add-page/add-page.module').then( m => m.AddPagePageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
