import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  showData = false;
  noticias: any = [];
  htmlNoticias: any = '';

  public sliders: Array<any> = [];


  constructor(
    private router: Router,
    private noticiasService: NoticiasService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getNoticias();
  }


  getNoticias() {
    this.noticiasService.getnoticias().subscribe(
      (res: any) => {
        if(res) {
          this.noticias = res;
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
