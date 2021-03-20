import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/conhecimentos.service';
import { NgxSpinnerService } from "ngx-spinner";
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showData = false;
  showSlides = false;
  sessoes: any = {};
  slides = [];
  slideActive = '';
  servicos = [];
  destaques = [];

  inicio: any = {
    titulo: '',
    imagem: '',
    html: ''
  }

  descritivoInicio: any = '';

  depo01Title = '';
  depo02Title = '';
  depo03Title = '';

  depo01Texto = '';
  depo02Texto = '';
  depo03Texto = '';

  htmlDestaques = ``;
  htmlTime = ``;
  htmlComents = ``;

  time: any = [];
  id: any = '';

  public sliders: Array<any> = [];

  carrosel: any = 1;

  constructor(
    private router: Router,
    private homeService: HomeService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getSessionsHome();
    this.setCarroussel();
    this.id = setInterval(() => {
      this.setCarroussel(); 
    }, 6000);
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

  setCarroussel() {
    this.carrosel = this.carrosel + 1;
    if(this.carrosel === 4) {
      this.carrosel = 1;
    }
  }
  
  setRouter(rout) {
    console.log(rout);
    this.router.navigate([rout]);
  }

  

  getSessionsHome() {
    this.homeService.getHome().subscribe(
      (res: any) => {
        if(res) {
          this.sessoes = res;
          this.formaterSlides(this.sessoes?.Slider);
          this.formaterInicio(this.sessoes?.Inicio);
          this.formaterDestaques(this.sessoes?.Destaques);
          this.formateEquipes(this.sessoes?.Time);
          this.formaterDepoimentos(this.sessoes?.Depoimentos)
          this.servicos = this.sessoes?.Servicos;
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

  formaterSlides(data) {
    data.forEach(element => {
      this.sliders.push(
        {
            imagePath: 'http://hospitalpalmirasales.com' + element,
            label: 'Hospital Infantil Palmira Sales',
            text: 'A serviço da vida e da saúde.'
        },
      );
    });
  }

  formaterInicio(data) {
    this.inicio.titulo = data.titulo;
    this.inicio.imagem = this.formatLink(data.imagem);
    this.inicio.html = data.texto;  
    this.descritivoInicio = data.texto; 
  }

  formaterDestaques(data) {
    this.formatStringHTMLDynamic(data);
    this.showSlides = true;
  }

  formateEquipes(data) {
    this.formatStringHtmlDynamicTime(data);
  }

  parseHtmlToString(html) {
    return html.replace(/.*>(.*)<.*/, '$1');
  }

  formaterDepoimentos(depo) {
    this.depo01Title = depo[0].nome;
    this.depo02Title = depo[1].nome;
    this.depo03Title = depo[2].nome;
    this.depo01Texto = depo[0].texto;
    this.depo02Texto = depo[1].texto;
    this.depo03Texto = depo[2].texto;
  }

  formatLink(link) {
    return 'http://hospitalpalmirasales.com' + link;
  }

  formatStringHtmlDynamicTime(data) {
    let capim = ``;
    this.htmlTime = ``;
    data.forEach(element => {
      capim = `
        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="single-team-member">
            <div class="team-img">
              <a href="#" class="bambu">
                <img class="imgTime bambu" src="${this.formatLink(element.foto)}" alt="${element.id}o" style="height: 340px; width: min-content;">
              </a>
            </div>
            <div class="team-content text-center">
              ${element.nome}
              ${element.cargo}
            </div>
          </div>
        </div>
      `;
      this.htmlTime = this.htmlTime + capim;
    });
  }

  formatStringHTMLDynamic(data) {
    let capim = ``;
    this.htmlDestaques = ``;
    data.forEach(element => {
      capim = `
        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="single-blog">
            <div class="single-blog-img">
              <a href="/#/noticias">
                <img src="${this.formatLink(element.imagem_original)}" alt="">
              </a>
            </div>
            <div class="blog-meta">
              <span class="date-type">
                <i class="fa fa-calendar"></i>${element.data}
              </span>
            </div>
            <div class="blog-text">
              ${element.titulo}
              ${element.texto}
            </div>
            <span>
              <a href="/#/page/${element.link}" class="ready-btn">Leia mais</a>
            </span>
          </div>
        </div>
      `  
      this.htmlDestaques = this.htmlDestaques + capim;
    });
  }
}



    