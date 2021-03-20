import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentosMesAnoService } from './service/documentos-mes-ano.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
    selector: 'app-document-multi',
    templateUrl: './documentos-mes-ano.component.html',
    styleUrls: ['./documentos-mes-ano.component.scss'],
    animations: [routerTransition()]
})
export class DocumentosMesAnoComponent implements OnInit {
    title: any = '';
    desc: any = '';
    dt_atualizacao: any = '';
    param: any = '';
    content: any = {};
    showData: any = false;
    url = 'http://hospitalpalmirasales.com/' ;

    arrayAnos = [];
    arrayItens = [];

    mockArrayAnos = [
      
    ]

    constructor(
        private documentosMesAnoService: DocumentosMesAnoService,
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
    }

    factoryItens(itens) {
      itens.forEach(element => {
        this.arrayItens.push({ id: element.ano, ano: element.ano, meses: this.factorySwitchMeses(element.meses), show: true})
      });

      console.log(this.arrayItens);
    }

    factorySwitchMeses(array) {
      let arrayNovo = [];
      array.forEach(element => {
        arrayNovo.push({ files: element.files, mes: this.returnString(element.mes) });
      });
      return arrayNovo;
    }

    returnString(number) {
      let mes = '';
      switch (number) {
        case '1':
          mes = 'Janeiro';
          break;
        case '2':
          mes = 'Fevereiro';
          break;
        case '3':
          mes = 'Março';
          break;
        case '4':
          mes = 'Abril';
          break;
        case '5':
          mes = 'Maio';
          break;
        case '6':
          mes = 'Junho';
          break;
        case '7':
          mes = 'Julho';
          break;
        case '8':
          mes = 'Agosto';
          break;
        case '9':
          mes = 'Setembro';
          break;
        case '10':
          mes = 'Outubro';
          break;
        case '11':
          mes = 'Novembro';
          break;
        case '12':
          mes = 'Dezembro';
          break;
        default:
          break;
      }
      return mes;
    }


    public getInstitucional() {
       if (this.param) {
        this.documentosMesAnoService.getDocumentDynamic(this.param).subscribe(
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
