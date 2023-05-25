import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import {APP_ROUTING} from './app.routes';

//Servicios
import { HeroesService } from './Services/heroes.services';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/home/shared/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/About/about.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { HeroeComponent } from './Components/heroe/heroe.component';
import { BuscadorComponent } from './Components/Buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
