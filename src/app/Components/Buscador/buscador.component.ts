import { Component,OnInit } from "@angular/core";
// Importo el service y el heroe para msotrarlo a medida que los busco
import { HeroesService, Heroe } from 'src/app/Services/heroes.services';
//Para poder ir al heroe luego
import { Router } from '@angular/router';
// Obtener parametro que viene por url
import { ActivatedRoute } from "@angular/router";

@Component({
  selector:'app-buscador',
  templateUrl:'buscador.component.html'
})

export class BuscadorComponent implements OnInit{
  // Aca es el esquelo vacio para devolver
  heroes: any[]=[];
  //la barra es por que si no sale error
  termino:string | undefined;

  // Inicializo un servicio y las rutas
  constructor( private activatedRoute:ActivatedRoute,
              private _heroesServices:HeroesService,
              private route:Router
              ){
     };


  ngOnInit(){
    // Utilizo un observable con un subscribe "Queda pendiente.." ala espera de cazar en la url
    this.activatedRoute.params.subscribe (params =>{
      //la siguiente line a es para poner entre llaves y poner que es lo que se esta buscando.
      this.termino = params['termino'];
      //musetra lo que envia, utilizo "termino" ya que es el que esta escrito asi en la ruta
      this.heroes = this._heroesServices.buscarHeroes(params['termino']);
    })

    }

  verHeroe (idx:number){
    this.route.navigate(['/heroe',idx]);
  }

}

