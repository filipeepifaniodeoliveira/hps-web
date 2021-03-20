import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentosMesAnoComponent } from './documentos-mes-ano.component';

const routes: Routes = [
    {
        path: '',
        component: DocumentosMesAnoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DocumentosMesAnoRoutingModule {}
