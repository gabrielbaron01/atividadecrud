import { Routes } from '@angular/router';
import path from 'path';
import { FornecedorComponent } from './component/fornecedor/fornecedor.component';
import { HomeComponent } from './component/home/home.component';
import { FornecedorlistComponent } from './component/fornecedorlist/fornecedorlist.component';
import { FornecedoreditComponent } from './component/fornecedoredit/fornecedoredit.component';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'cadastrofornecedor', component:FornecedorComponent},
  {path: 'listafornecedor', component:FornecedorlistComponent},
  {path: 'editarfornecedor/:id', component:FornecedoreditComponent},
  { path: '**', component: HomeComponent },

];
