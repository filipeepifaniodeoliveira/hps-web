import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SicComponent } from './sic.component';

const routes: Routes = [
    {
        path: '',
        component: SicComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SicRoutingModule {}
