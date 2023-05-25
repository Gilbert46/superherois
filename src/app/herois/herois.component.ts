import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
//import { HEROIS } from '../interfaces/regHerois';
import { HeroService } from '../services/hero.service';
import { MisatgeService } from '../services/misatge.service';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css']
})
export class HeroisComponent implements OnInit{

  constructor(private heroService: HeroService, private misatgeService: MisatgeService) {}
  //herois = HEROIS
  herois: Hero[] = [];
  selectedHero? : Hero;

  ngOnInit(): void {
    this.getHerois();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.misatgeService.add('El Super Heroi seleccionat té el identificador '+hero.id);
  }

  getHerois(): void {
    this.heroService.getHerois(10, 1).subscribe(herois => this.herois = herois);
    this.heroService.getHerois(this.herois.length, 0).subscribe(herois => this.herois = herois);
  }

}
