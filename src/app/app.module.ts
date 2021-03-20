import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SlidesComponent } from './components/slides/slides.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { DinamicPageComponent } from './pages/dinamic-page/dinamic-page.component';
import { HomeService } from './services/conhecimentos.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import {SlideshowModule} from 'ng-simple-slideshow';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenusService } from './services/menu.service';
import { FooterComponent } from './components/footer/footer.component';
import { RodapeService } from './services/footer.service';
import { NavbarFakeComponent } from './components/navbar-fake/navbar-fake.component';
import { DynamicPageService } from './services/serviceDynamic.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    NoticiasComponent,
    ContatosComponent,
    NavbarComponent,
    SlidesComponent,
    ServicosComponent,
    DinamicPageComponent,
    FooterComponent,
    NavbarFakeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    SlideshowModule,
    NgbModule,
    LanguageTranslationModule,
    NgbCarouselModule,
  ],
  providers: [
    HomeService,
    MenusService,
    RodapeService,
    DynamicPageService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
