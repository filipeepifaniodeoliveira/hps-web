import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { MembrosService } from './service/membros.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
    selector: 'app-membros',
    templateUrl: './membros.component.html',
    styleUrls: ['./membros.component.scss'],
    animations: [routerTransition()]
})
export class MembrosComponent implements OnInit {
    membros: any = '';
    data: any = '';
    showData: boolean = false;

    constructor(
        private membrosService: MembrosService,
        private spinner: NgxSpinnerService,
    ) {
        
    }

    ngOnInit() {
        this.spinner.show();
        this.getMembros();
    }

    public getMembros() {
        this.membrosService.getMembros().subscribe(
            (res: any) => {
              if(res) {
                this.data = res.content[0];
                this.membros = this.data?.ds_membros;
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
