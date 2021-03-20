import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DocumentUniRoutingModule } from './documento-uni-routing.module';
import { DocumentUniComponent } from './documento-uni.component';
import { InstitucionalService } from './service/institucional.service';
import { NgxSpinnerModule } from "ngx-spinner";
import { DocumentDynamicService } from './service/document-dinamic.service';

@NgModule({
    imports: [CommonModule, DocumentUniRoutingModule , NgxSpinnerModule],
    declarations: [DocumentUniComponent],
    providers: [
        InstitucionalService,
        DocumentDynamicService,
    ],
})
export class DocumentUniModule {}
