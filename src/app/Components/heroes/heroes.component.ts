import{Component, OnInit, Input} from '@angular/core';
import { HeroesService, Heroe } from 'src/app/Services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector:'app-Heroes',
  templateUrl:'heroes.component.html',
  styleUrls: ['heroes.component.css']
})

export class HeroesComponent implements OnInit{

  heroes:Heroe[]=[];
  //Lo siguiente solo funciona cuando lo envio desde la aplicacion de una clase dentro de otra clase
  //@Input() index:number | undefined;

  constructor(private _heroesServices: HeroesService,
              private route:Router
            ){

  }

  ngOnInit() {
    // De esta manera, puedo utilizar la funcion heroes del servicio que es privada
  this.heroes = this._heroesServices.getHeroes();

  // console.log(this.heroes);
  }

  verHeroe (idx:number){
    this.route.navigate(['/heroe',idx]);
  }

}
