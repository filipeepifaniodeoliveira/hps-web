import { Component, OnInit } from '@angular/core';
import { MenusService } from 'src/app/services/menu.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-fake',
  templateUrl: './navbar-fake.component.html',
  styleUrls: ['./navbar-fake.component.css']
})
export class NavbarFakeComponent implements OnInit {

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

  
  setTransparencia() {
    this.router.navigate(['transparencia/']);
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


  setRouter(rout) {
    this.router.navigate([rout]);
  }

  setRouterDinamic(rout) {
    this.router.navigate(['host/' + rout]);
    this.spinner.show();
  }

}
