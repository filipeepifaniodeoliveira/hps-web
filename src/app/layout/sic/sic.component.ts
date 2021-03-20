import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { SicService } from './service/sic.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
    selector: 'app-sic',
    templateUrl: './sic.component.html',
    styleUrls: ['./sic.component.scss'],
    animations: [routerTransition()]
})
export class SicComponent implements OnInit {
    sicPresencial: any = '';
    sicEletronico: any = '';
    sic: any = '';
    data: any = '';
    showData: boolean = false;

    constructor(
        private sicService: SicService,
        private spinner: NgxSpinnerService,
    ) {
        
    }

    ngOnInit() {
        this.spinner.show();
        this.getSic();
    }

    public getSic() {
        this.sicService.getSic().subscribe(
            (res: any) => {
              if(res) {
                this.data = res.content[0];
                this.sicPresencial = this.data?.atend_eletronico;
                this.sicEletronico = this.data?.atend_presencial;
                this.showData = true;
                this.spinner.hide();
              } else {
                this.showData = false;
                this.spinner.hide();
              }
            }
          ),(err) => {
            this.spinner.hide();
            console.log(err);
          }
    }
}
