import { TemplateBindingParseResult } from '@angular/compiler'
import {Component}from '@angular/core'
import { Router } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/Services/heroes.services';

@Component({
selector:'app-navbar',
templateUrl:'navbar.component.html'

})

export class NavbarComponent {

  constructor(
            private route:Router){

  }


  buscarHeroes(termino:string){
    this.route.navigate(['/buscar',termino]);
  }
}
