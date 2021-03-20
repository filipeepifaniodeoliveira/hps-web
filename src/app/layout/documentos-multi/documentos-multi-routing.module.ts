import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentMultiComponent } from './documentos-multi.component';

const routes: Routes = [
    {
        path: '',
        component: DocumentMultiComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DocumentMultiRoutingModule {}
