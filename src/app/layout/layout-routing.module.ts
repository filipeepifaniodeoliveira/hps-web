import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'transparencia', pathMatch: 'prefix' },
            {
                path: 'transparencia',
                loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
            },
            {
                path: 'contratacoes/:parametro',
                loadChildren: () => import('./contratacoes/contratacoes.module').then((m) => m.ContratacoesModule)
            },
            {
                path: 'documentos/:parametro',
                loadChildren: () => import('./documentos-multi/documentos-multi.module').then((m) => m.DocumentMultiModule)
            },
            {
                path: 'document/:parametro',
                loadChildren: () => import('./documento-uni/documento-uni.module').then((m) => m.DocumentUniModule)
            },
            {
                path: 'documentacoes/:parametro',
                loadChildren: () => import('./documentacao/documentacao.module').then((m) => m.DocumentacaoModule)
            },
            {
                path: 'documentos-mes-ano/:parametro',
                loadChildren: () => import('./documentos-mes-ano/documentos-mes-ano.module').then((m) => m.DocumentosMesAnoModule)
            },
            {
                path: 'membros',
                loadChildren: () => import('./membros/membros.module').then((m) => m.MembrosModule)
            },
            {
                path: 'sic',
                loadChildren: () => import('./sic/sic.module').then((m) => m.SicModule)
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
