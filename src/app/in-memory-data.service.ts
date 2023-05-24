import { Injectable } from '@angular/core';
//import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './interfaces/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const HEROIS: Hero[] = [
      {id: 11, name: ' MazingerZ'},
      {id: 13, name: ' Tarzan'},
      {id: 17, name: ' Bad Man'},
      {id: 19, name: ' Robbyn'},
      {id: 21, name: ' Superman'},
      {id: 23, name: ' Supergirld'},
      {id: 25, name: ' Spyder-man'},
      {id: 27, name: ' The Mase'},
      {id: 29, name: ' Capit America'}
    ];
    return {HEROIS};
  }

  genId(herois: Hero[]): number {
    return herois.length > 0 ? Math.max(...herois.map(hero => hero.id)) +1 : 11;
  }

}
