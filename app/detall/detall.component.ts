import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROIS } from '../interfaces/regHerois';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-detall',
  templateUrl: './detall.component.html',
  styleUrls: ['./detall.component.css']
})
export class DetallComponent implements OnInit {
  herois = HEROIS;
  hero: Hero = {
    id : 0,
    name : "anonim"
  };

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id, 0).subscribe(herois => this.herois = herois);
    for (let i=0; i<this.herois.length; i++) {
      if (this.herois[i].id == id) {
        this.hero.id = id;
        this.hero.name = this.herois[i].name;
        break;
      }
    }
  }

  goBack(): void {
    this.location.back();
  }

  operaCRUD(oper :number): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if ((this.hero.name != "" || oper == 4) && (this.hero.id != 0 || oper == 9)) {
      this.heroService.getHero(id, 9).subscribe(herois => this.herois = herois);
      if (oper == 1) {
        for (let i=0; i<this.herois.length; i++) {
          if (this.herois[i].id == id) {
            this.herois[i].id = this.hero.id;
            this.herois[i].name = this.hero.name;
            this.heroService.getHero(this.hero.id, oper).subscribe(herois => this.herois = herois);
            break;
          }
          if (i == this.herois.length - 1) {
            this.heroService.getHero(this.hero.id, 7).subscribe(herois => this.herois = herois);
          }
        }
      }
      else if (oper == 2) {
        this.herois.push(this.hero);
        this.heroService.getHero(this.hero.id, oper).subscribe(herois => this.herois = herois);
      }
      else if (oper == 3) {
        for (let i=0; i<this.herois.length; i++) {
          if (this.herois[i].id == this.hero.id) {
            this.herois.splice(i, 1);
            this.heroService.getHero(this.hero.id, oper).subscribe(herois => this.herois = herois);
            break;
          }
          if (i == this.herois.length - 1) {
            this.heroService.getHero(this.hero.id, 7).subscribe(herois => this.herois = herois);
          }
        }
      }
      else if (oper == 4) {
        for (let i=0; i<this.herois.length; i++) {
          if (this.herois[i].id == this.hero.id) {
            this.hero.name = this.herois[i].name;
            this.heroService.getHero(this.hero.id, oper).subscribe(herois => this.herois = herois);
            break;
          }
          if (i == this.herois.length - 1) {
            this.heroService.getHero(this.hero.id, 6).subscribe(herois => this.herois = herois);
          }
        }
      }
      else if (oper == 9) {
        for (let i=0; i<this.herois.length; i++) {
          if (this.herois[i].name == this.hero.name) {
            this.hero.id = this.herois[i].id;
            this.heroService.getHero(this.hero.id, 4).subscribe(herois => this.herois = herois);
            break;
          }
          if (i == this.herois.length - 1) {
            this.heroService.getHero(this.hero.id, 6).subscribe(herois => this.herois = herois);
          }
        }
      }
      if (oper != 4 && oper != 9) this.goBack();
    }
    else this.heroService.getHero(id, 5).subscribe(herois => this.herois = herois);
  }

}
