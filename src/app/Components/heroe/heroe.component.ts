import { Component } from "@angular/core";
// Obtener parametro que viene por url
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "src/app/Services/heroes.services";

@Component ({
  selector:'app-heroe',
  templateUrl:'heroe.component.html',
  styleUrls: ['heroe.component.css']
})

export class HeroeComponent {

  heroe:any={};

  // Para usar el activate router, debo generarlo en el cosntructor
  constructor( private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService

    ){

    // Utilizo un observable con un subscribe "Queda pendiente.."
    this.activatedRoute.params.subscribe ( params =>{

      //Uso el getHeroe para obtener la info de un solo heroe
      this.heroe = this._heroesService.getHeroe( params['id'] );


    });

  }
}
