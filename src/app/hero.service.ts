import { Injectable } from '@angular/core';
import { Hero } from './interfaces/hero';
import { HEROIS } from './interfaces/regHerois';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MisatgeService } from './misatge.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient, private misatgeService: MisatgeService) { }

  getHerois(n: number, oper:number): Observable<Hero[]> {
    const herois = of (HEROIS);
    if (oper == 0) this.misatgeService.add('Els '+n+' Superherois, han sigut trobats...');
    return herois;
  }

  getHero(id: number, oper: number): Observable<Hero[]> {
    const herois = of (HEROIS);
    if (oper == 0) this.misatgeService.add('Seleccionat el Superheroi amb identificador número, '+id);
    else if (oper == 1) this.misatgeService.add('Superheroi modificat correctament amb identificador número, '+id);
    else if (oper == 2) this.misatgeService.add('Afegit un nou Superheroi correctament amb identificador número, '+id);
    else if (oper == 3) this.misatgeService.add('Eliminat el Superheroi correctament amb identificador número, '+id);
    else if (oper == 4) this.misatgeService.add('Superheroi trobat correctament');
    else if (oper == 5) this.misatgeService.add('No pots fer operacions amb ell, dades erroneas o camps buïts.');
    else if (oper == 6) this.misatgeService.add('No està en la llista, prova amb un altre Superheroi.');
    else if (oper == 7) this.misatgeService.add('El Superheroi amb id: '+id+', no exiteix i no pots modificar ni eliminar.');
    else if (oper == 8) this.misatgeService.add('El identificador: '+id+' ja existeix en un altre Superheroi, tria un altre.');
    return herois;
  }

  private log(message: string) {
    this.misatgeService.add("el missatge és: " + message);
  }
  /*
  private handleError<T>(operataion = 'operation', result?: T) { return (error: any): Observable<T> =>{console.log(error); this.log(operation+' error '+error.message);}
  return of(result as T);}; */
  private heroisUrl = 'api/herois';
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroisUrl)/*.pipe(catchError(this.handleError<Hero[]>('getHeroes',[])))*/;
  }

  updateHero(hero:Hero): void {
    //return this.http.put(this.heroisUrl, hero, this.httpOptions).pipe(tap(_ => this.log('guardar heroi id:' +  hero.id))),;
  }

}

