import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentDynamicService } from './service/document-dinamic.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
    selector: 'app-document',
    templateUrl: './documento-uni.component.html',
    styleUrls: ['./documento-uni.component.scss'],
    animations: [routerTransition()]
})
export class DocumentUniComponent implements OnInit {
    title: any = '';
    desc: any = '';
    dt_atualizacao: any = '';
    param: any = '';
    content: any = {};
    showData: any = false;
    url = 'http://hospitalpalmirasales.com/' ;

    constructor(
        private documentDynamicService: DocumentDynamicService,
        private spinner: NgxSpinnerService,
        private route: ActivatedRoute,
    ) {
      this.route.params.subscribe(params => this.param = params['parametro']);
      this.param = this.param;
    }

    ngOnInit() {
        this.spinner.show();
        this.getInstitucional();
    }

    public getInstitucional() {
       if (this.param) {
        this.documentDynamicService.getDocumentDynamic(this.param).subscribe(
          (res: any) => {
            if(res) {
              this.title = res.titulo;
              this.desc = res.desc;
              this.dt_atualizacao = res.dt_atualizacao;
              this.content = res.content;
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
}
