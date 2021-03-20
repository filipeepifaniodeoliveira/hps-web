import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembrosComponent } from './membros.component';

const routes: Routes = [
    {
        path: '',
        component: MembrosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MembrosRoutingModule {}
