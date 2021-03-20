import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratacoesComponent } from './contratacoes.component';

const routes: Routes = [
    {
        path: '',
        component: ContratacoesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContratacoesRoutingModule {}
