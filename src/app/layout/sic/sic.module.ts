import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SicRoutingModule } from './sic-routing.module';
import { SicComponent } from './sic.component';
import { SicService,} from './service/sic.service';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
    imports: [CommonModule, SicRoutingModule , NgxSpinnerModule],
    declarations: [SicComponent],
    providers: [
        SicService,
    ],
})
export class SicModule {}
