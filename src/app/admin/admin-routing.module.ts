import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ProductoComponent } from './components/producto/producto.component';
import { Sidebar2Component } from '../material/components/sidebar2/sidebar2.component';

const routes: Routes = [
  {
    path: '',
    component: Sidebar2Component,
    children: [
      {path: 'perfil', component: PerfilComponent},
      {path: 'categoria', component: CategoriaComponent},
      {path: 'producto', component: ProductoComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
