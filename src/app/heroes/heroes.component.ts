// Tässä komponentissa määritellään komponentin toiminallisuus, muuttujat jne.
// esim. esitellään luokka HeroesComponent jossa määritellään jokainen sankari olio

import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes = HEROES;
  // Add the following onSelect() method
  // which assigns the clicked hero from the template to the component's selectedHero.
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
