import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarPensamentoComponent} from './componentes/pensamentos/listar-pensamento/listar-pensamento.component'
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';

const routes: Routes = [
  {path:'', redirectTo: 'listarPensamento', pathMatch:'full'},
  {path:'listarPensamento', component: ListarPensamentoComponent},
  {path:'criarPensamento', component: CriarPensamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
