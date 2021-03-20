import { Component, OnInit, ViewEncapsulation, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";


import { Router, ActivatedRoute } from '@angular/router';
import { DynamicPageService } from 'src/app/services/serviceDynamic.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-dinamic-page',
  templateUrl: './dinamic-page.component.html',
  styleUrls: ['./dinamic-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DinamicPageComponent implements OnInit {

  idPage: any = '';
  HTML: any = '';
  carroussel: any = '';
  titulo: any =  '';
  data: any =  '';
  showData: any = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dynamicPageService: DynamicPageService,
    private spinner: NgxSpinnerService,
    private sanitizer: DomSanitizer, 
  ) {
    this.route.params.subscribe(params => this.idPage = params['id']);
    this.idPage = this.idPage.replace(/[:]+/g, '');
  }

  ngOnInit(): void {
    this.spinner.show();
    this.getDataPage();
  }

  transform(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  getDataPage() {
    this.dynamicPageService.getDynamicPage(this.idPage).subscribe(
      (res: any) => {
        if(res) {
          this.HTML = this.transform(res.texto);
          this.titulo = res.titulo;
          this.carroussel = res.carrossel;
          this.data = res.data;
          this.spinner.hide();
          this.showData = true;
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
