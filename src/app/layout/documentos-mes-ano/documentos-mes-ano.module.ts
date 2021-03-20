import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { DocumentosMesAnoRoutingModule } from './documentos-mes-ano-routing.module';

import { DocumentosMesAnoComponent } from './documentos-mes-ano.component';

import { DocumentosMesAnoService } from './service/documentos-mes-ano.service';

@NgModule({
    imports: [CommonModule, DocumentosMesAnoRoutingModule , NgxSpinnerModule],
    declarations: [DocumentosMesAnoComponent],
    providers: [
        DocumentosMesAnoService,
    ],
})
export class DocumentosMesAnoModule {}
