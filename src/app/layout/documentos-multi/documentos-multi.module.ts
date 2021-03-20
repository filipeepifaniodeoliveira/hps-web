import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { DocumentMultiRoutingModule } from './documentos-multi-routing.module';

import { DocumentMultiComponent } from './documentos-multi.component';

import { DocumentDynamicMultiDocService } from './service/document-dinamic.service';

@NgModule({
    imports: [CommonModule, DocumentMultiRoutingModule , NgxSpinnerModule],
    declarations: [DocumentMultiComponent],
    providers: [
        DocumentDynamicMultiDocService,
    ],
})
export class DocumentMultiModule {}
