import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { DocumentacaoRoutingModule } from './documentacao-routing.module';

import { DocumentacaoComponent } from './documentacao.component';

import { DocumentosService } from './service/documentos.service';

@NgModule({
    imports: [CommonModule, DocumentacaoRoutingModule , NgxSpinnerModule],
    declarations: [DocumentacaoComponent],
    providers: [
        DocumentosService,
    ],
})
export class DocumentacaoModule {}
