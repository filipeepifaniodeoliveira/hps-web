import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { RodapeService } from 'src/app/services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  rodape: any = {};
  showData: any = false;
  text_html: any = '';
  logo: any = '';

  linkFacebook: any = '';
  linkIntagram: any = '';
  endereco: any = {};


  i = 0;
  tempo = 50;
  tamanho = 826;

  constructor(
    private router: Router,
    private rodapeService: RodapeService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.getRodape();
  }

  getRodape() {
    this.rodapeService.getRodape().subscribe(
      (res: any) => {
        if(res) {
          this.rodape = res;
          this.spinner.hide();
          this.showData = true;
          this.text_html = res?.texto?.rodape;
          this.logo = 'http://hospitalpalmirasales.com' + res?.logo;
          this.linkFacebook = res?.texto?.facebook;
          this.linkIntagram = res?.texto?.instagram;
          this.endereco = res?.endereco;
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

  
  setRouter(rout) {
    console.log(rout);
    this.router.navigate([rout]);
  }

}
