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
    if (oper == 0) this.misatgeService.add('Els '+n+' Super Herois, han sigut trobats...');
    return herois;
  }

  getHero(id: number, oper: number): Observable<Hero[]> {
    const herois = of (HEROIS);
    if (oper == 0) this.misatgeService.add('Seleccionat el Super Heroi amb identificador número, '+id);
    else if (oper == 1) this.misatgeService.add('Super Heroi modificat correctament amb identificador número, '+id);
    else if (oper == 2) this.misatgeService.add('Afegit un nou Super Heroi correctament amb identificador número, '+id);
    else if (oper == 3) this.misatgeService.add('Eliminat el Super Heroi correctament amb identificador número, '+id);
    else if (oper == 4) this.misatgeService.add('Super Heroi trobat correctament');
    else if (oper == 5) this.misatgeService.add('No pots fer operacions amb ell, dades erroneas o camps buïts.');
    else if (oper == 6) this.misatgeService.add('No està en la llista, prova amb un altre heroi.');
    else if (oper == 7) this.misatgeService.add('El Super Heroi amb id: '+id+', no pots realitzar CRUD sobre ell.');
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

