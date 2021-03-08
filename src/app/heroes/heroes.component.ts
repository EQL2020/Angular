import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Hero[] = HEROES;
  selectedHero? : Hero;

  constructor() { }

  selectHero(hero : Hero) : void {

    console.log(hero);

    if (this.selectedHero == hero){
      this.selectedHero = null;
    }
    else{
      this.selectedHero = hero;
    }
  }

  ngOnInit(): void {
  }

}
