import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HeroService } from '../services/hero.service';
import { MisatgeService } from '../services/misatge.service';

@Component({
  selector: 'app-tauler',
  templateUrl: './tauler.component.html',
  styleUrls: ['./tauler.component.css']
})
export class TaulerComponent implements OnInit{
  constructor(private heroService: HeroService, private misatgeService: MisatgeService) {}
  herois: Hero[] = [];
  selectedHero? : Hero;

  ngOnInit(): void {
    this.getHerois(4);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.misatgeService.add('El Super Heroi seleccionat té el identificador '+hero.id);
  }

  getHerois(n: number): void {
    this.heroService.getHerois(4, 1).subscribe(herois => this.herois = herois);
    do {
      n = Math.random() * 10;
      n = Math.ceil(n) - 1;
    } while (n > this.herois.length - 4)
    this.heroService.getHerois(4, 0).subscribe(herois => this.herois = herois.slice(n, n + 4));
  }

}
