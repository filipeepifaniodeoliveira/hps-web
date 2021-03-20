import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MembrosRoutingModule } from './membros-routing.module';
import { MembrosComponent } from './membros.component';
import { MembrosService,} from './service/membros.service';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
    imports: [CommonModule, MembrosRoutingModule , NgxSpinnerModule],
    declarations: [MembrosComponent],
    providers: [
        MembrosService,
    ],
})
export class MembrosModule {}
