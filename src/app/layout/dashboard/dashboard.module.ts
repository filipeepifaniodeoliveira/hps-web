import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InstitucionalService } from './service/institucional.service';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
    imports: [CommonModule, DashboardRoutingModule , NgxSpinnerModule],
    declarations: [DashboardComponent],
    providers: [
        InstitucionalService,
    ],
})
export class DashboardModule {}
