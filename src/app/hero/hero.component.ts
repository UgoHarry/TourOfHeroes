import { Component, OnInit } from '@angular/core';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';
import {Hero} from '../hero';
import {HEROLIST} from '../heroList';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {
  // Create 'heroes' variable which is an array of superheroes importd from HEROLIST
  heroes = HEROLIST;

  // Declare a variable with a class of Hero
  selectedHero : Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect (hero) {
    this.selectedHero = hero;
    console.log(this.selectedHero.name);
  }
}
