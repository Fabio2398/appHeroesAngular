import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //selectedHero : Hero  = { id : 1, name : 'Batman' };  //elemento hero di tipo della classse Hero
  heroes : Hero[];
  //selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {

    this.getHeroes();

  }

  
  /*onSelect(hero: Hero): void {
      this.selectedHero = hero;
  }*/

  


  //QUESTA VERSIONE INVECE PUO' ESSERE UTILIZZATA CON DATI DERIVANTI DA UN SERVER, 
  //CON UN TEMPO QUINDI DI ATTESA PER LA RISPOSTA DAL SERVER
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }


  /* QUESTA VERSIONE UTILIZZA DATI FAKE, CIOE' REPERIBILI IN MODO IMMEDIATO, 
  E CHE DAREBBE ERRORE 'FREEZ DELLA UI' PERCHE' IN ATTESA DEI DATI, 
  TEMPO DI ATTESA CHE NON SAREBBE GESTITO

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }*/

}
