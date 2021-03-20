import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  constructor() { }

  ambulatorio = false;
  obstetrica = false;
  exames = false;
  
  ngOnInit(): void {
    this.ambulatorio = true; 
  }

  setComponent(key) {
    switch (key) {
      case 'ambulatorio':
        this.ambulatorio = true;
        this.obstetrica = false;
        this.exames = false;    
        break;
      case 'obstetrica':
        this.ambulatorio = false;
        this.obstetrica = true;
        this.exames = false; 
        break;
      case 'exames':
        this.ambulatorio = false;
        this.obstetrica = false;
        this.exames = true;    
        break;
      default:
        break;
    }
  }

}
