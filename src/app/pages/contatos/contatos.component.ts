import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css'],
  providers: [ ]
})
export class ContatosComponent implements OnInit {
  
  idPage: any = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService,
   ) {
    this.route.params.subscribe(params => this.idPage = params['id']);
  }

  ngOnInit(): void {
    this.spinner.show();
    this.setRouterDinamic();
  }

  setRouterDinamic() {
    this.router.navigate(['page/' + this.idPage]);
  }
}


