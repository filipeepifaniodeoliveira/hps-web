import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/conhecimentos.service';
import { NgxSpinnerService } from "ngx-spinner";
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css'],
})
export class SlidesComponent implements OnInit {

  showData = false;
  showSlides = false;
  sessoes: any = {};
  slides = [];
  slideActive = '';
  current = 0;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  
  setRouter(rout) {
    this.router.navigate([rout]);
  }

}
