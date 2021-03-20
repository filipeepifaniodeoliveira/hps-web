import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { ContratacoesRoutingModule } from './contratacoes-routing.module';

import { ContratacoesComponent } from './contratacoes.component';

import { ContratacoesService } from './service/contratacoes.service';

@NgModule({
    imports: [CommonModule, ContratacoesRoutingModule , NgxSpinnerModule],
    declarations: [ContratacoesComponent],
    providers: [
        ContratacoesService,
    ],
})
export class ContratacoesModule {}
