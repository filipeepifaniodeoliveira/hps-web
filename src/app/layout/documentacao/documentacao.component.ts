import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentosService } from './service/documentos.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
    selector: 'app-documentacao',
    templateUrl: './documentacao.component.html',
    styleUrls: ['./documentacao.component.scss'],
    animations: [routerTransition()]
})
export class DocumentacaoComponent implements OnInit {
    title: any = '';
    desc: any = '';
    dt_atualizacao: any = '';
    param: any = '';
    content: any = {};
    showData: any = false;
    url = 'http://hospitalpalmirasales.com/';

    documento = {};

    constructor(
        private documentosService: DocumentosService,
        private spinner: NgxSpinnerService,
        private route: ActivatedRoute,
    ) {
      this.route.params.subscribe(params => this.param = params['parametro']);
      this.param = this.param;
    }

    ngOnInit() {
      this.spinner.show();
      this.getDocs();
    }

    organizeDocs(docs) {
      docs.forEach(element => {
        if (this.param === element.tipo) {
          this.documento =  element;
        }
      });
    }

    public getDocs() {
      if (this.param) {
        this.documentosService.getDocumento().subscribe(
          (res: any) => {
            if(res) {
              this.title = res.titulo;
              this.desc = res.desc;
              this.dt_atualizacao = res.dt_atualizacao;
              this.content = res.content;
              this.organizeDocs(this.content);
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
