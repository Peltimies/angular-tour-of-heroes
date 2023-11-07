import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {
  // @Input() kertoo että hero tulee inputtina ulkopuolelta
  // äitikomponentilla. Hero on optionaalinen, voi myös olla undefined
  @Input() hero?: Hero;
}
