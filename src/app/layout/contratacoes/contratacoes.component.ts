import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { ContratacoesService } from './service/contratacoes.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
    selector: 'app-contratacao',
    templateUrl: './contratacoes.component.html',
    styleUrls: ['./contratacoes.component.scss'],
    animations: [routerTransition()]
})
export class ContratacoesComponent implements OnInit {
    title: any = '';
    desc: any = '';
    dt_atualizacao: any = '';
    param: any = '';
    content: any = {};
    showData: any = false;
    url = 'http://hospitalpalmirasales.com/' ;

    arrayAnos = [];
    arrayItens = [];

    docsComptratos = [];

    constructor(
        private contratacoesService: ContratacoesService,
        private spinner: NgxSpinnerService,
        private route: ActivatedRoute,
    ) {
      this.route.params.subscribe(params => this.param = params['parametro']);
      this.param = this.param;
    }

    ngOnInit() {
        this.spinner.show();
        this.getContratacoes();
    }

    organizeDocs(docs) {
      docs.forEach(element => {
        if (this.param === element.tipo) {
          this.docsComptratos =  element.items;
        }
      });

      this.factoryAnos(this.docsComptratos);
      this.factoryItens(this.docsComptratos);
    }

    factoryAnos(anos) {
      anos.forEach(element => {
        this.arrayAnos.push({ id: element.ano, ano: element.ano})
      });
      console.log(this.arrayAnos);
    }

    factoryItens(itens) {
      itens.forEach(element => {
        this.arrayItens.push({ id: element.ano, ano: element.ano, itens: element.files, show: true});
      });
      console.log(this.arrayItens);
    }

    public getContratacoes() {
       if (this.param) {
        this.contratacoesService.getDocContratacoes().subscribe(
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

    selectFilter(data) {
      this.arrayItens.forEach(element => {
        if (data === element.ano) {
          element.show = !element.show;
        } 
      });
    }
    


}
