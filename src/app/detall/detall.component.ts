import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROIS } from '../interfaces/regHerois';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../services/hero.service';

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
      if (oper == 1) {
        if (this.hero.id != id) {
          for (let i=0; i<this.herois.length; i++) {
            if (this.herois[i].id == this.hero.id) {
              this.heroService.getHero(this.hero.id, 8).subscribe(herois => this.herois = herois);
              oper = 10;
              break;
            }
          }
        }
      }
      if (oper == 1) {
        for (let j=0; j<this.herois.length; j++) {
          if (this.herois[j].id == id) {
            this.herois[j].name = this.hero.name;
            this.herois[j].id = this.hero.id;
            this.heroService.getHero(this.hero.id, oper).subscribe(herois => this.herois = herois);
            this.heroService.updateHero(this.hero);
            this.location.back();
            break;
          }
          if (j == this.herois.length - 1) {
            this.heroService.getHero(this.hero.id, 7).subscribe(herois => this.herois = herois);
          }
        }
      }
      else if (oper == 2) {
        for (let i=0; i<this.herois.length;i++) {
          if (this.herois[i].id == this.hero.id) {
            this.heroService.getHero(this.hero.id, 8).subscribe(herois => this.herois = herois);
            break;
          }
          if (i == this.herois.length - 1) {
            this.herois.push(this.hero);
            this.heroService.getHero(this.hero.id, oper).subscribe(herois => this.herois = herois);
            this.heroService.addHero(this.hero);
            this.location.back();
          }
        }
      }
      else if (oper == 3) {
        if (this.herois.length > 4) {
          for (let i=0; i<this.herois.length; i++) {
            if (this.herois[i].id == this.hero.id) {
              this.herois.splice(i, 1);
              this.heroService.getHero(this.hero.id, oper).subscribe(herois => this.herois = herois);
              this.heroService.deleteHero(this.hero.id);
              this.location.back();
              break;
            }
            if (i == this.herois.length - 1) {
              this.heroService.getHero(this.hero.id, 7).subscribe(herois => this.herois = herois);
            }
          }
        }
        else {
          this.heroService.getHero(this.hero.id, 9).subscribe(herois => this.herois = herois);
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
    }
    else this.heroService.getHero(id, 5).subscribe(herois => this.herois = herois);
  }

}
