import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenusService } from 'src/app/services/menu.service';
import { NgxSpinnerService } from "ngx-spinner";
declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menus: any = [];
  showData: any = false;

  i = 0;
  tempo = 50;
  tamanho = 826;
  logo = 'http://hospitalpalmirasales.com/upload/logo/7825afa3eba54c230b8a34cc240b5692.png';

  constructor(
    private router: Router,
    private menusService: MenusService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getMenus();
  }

  getMenus() {
    this.menusService.getMenus().subscribe(
      (res: any) => {
        if(res) {
          this.menus = res;
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

  formaterMenus(menus) {
    console.log(menus)
  }
  
  setRouter(rout) {
    this.router.navigate([rout]);
  }

  setSession (nav) {
    $("body").scrollTop(0);
    $("html, body").animate({ scrollTop: $(nav).offset().top }, "slow");
  }

  setRouterDinamic (rout) {
    this.router.navigate(['page/' + rout]);
  }

  setTransparencia() {
    this.router.navigate(['transparencia/']);
  }

}
