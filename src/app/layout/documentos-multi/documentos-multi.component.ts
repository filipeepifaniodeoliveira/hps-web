import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentDynamicMultiDocService } from './service/document-dinamic.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
    selector: 'app-document-multi',
    templateUrl: './documentos-multi.component.html',
    styleUrls: ['./documentos-multi.component.scss'],
    animations: [routerTransition()]
})
export class DocumentMultiComponent implements OnInit {
    title: any = '';
    desc: any = '';
    dt_atualizacao: any = '';
    param: any = '';
    content: any = {};
    showData: any = false;
    url = 'http://hospitalpalmirasales.com/' ;

    arrayAnos = [];
    arrayItens = [];

 
    constructor(
        private documentDynamicService: DocumentDynamicMultiDocService,
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

    factoryAnos(anos) {
      anos.forEach(element => {
        this.arrayAnos.push({ id: element.ano, ano: element.ano})
      });
      console.log(this.arrayAnos);
    }

    factoryItens(itens) {
      itens.forEach(element => {
        this.arrayItens.push({ id: element.ano, ano: element.ano, itens: element.itens, show: true})
      });
      console.log(this.arrayItens);
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
              this.factoryItens(this.content);
              this.factoryAnos(this.content);
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

    selectFilter(data) {
      this.arrayItens.forEach(element => {
        if (data === element.ano) {
          element.show = !element.show;
        } 
      });
    }
    


}
