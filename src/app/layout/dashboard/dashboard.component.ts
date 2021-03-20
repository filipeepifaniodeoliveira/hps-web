import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { InstitucionalService } from './service/institucional.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    title: any = '';
    desc: any = '';
    dt_atualizacao: any = '';
    content: any = {};
    showData: any = false;

    constructor(
        private institucionalService: InstitucionalService,
        private spinner: NgxSpinnerService,
    ) {
        
    }

    ngOnInit() {
        this.spinner.show();
        this.getInstitucional();
    }

    public getInstitucional() {
        this.institucionalService.getInstitucional().subscribe(
            (res: any) => {
              if(res) {
                this.title = res.titulo;
                this.desc = res.desc;
                this.dt_atualizacao = res.dt_atualizacao;
                this.content = res.content[0];
                console.log(res);
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
