import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentUniComponent } from './documento-uni.component';

const routes: Routes = [
    {
        path: '',
        component: DocumentUniComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DocumentUniRoutingModule {}
