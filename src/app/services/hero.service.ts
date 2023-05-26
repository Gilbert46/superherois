import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROIS } from '../interfaces/regHerois';
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
    if (oper == 0) this.misatgeService.add('Seleccionat el Superheroi amb id: '+id);
    else if (oper == 1) this.misatgeService.add('Superheroi modificat correctament amb id: '+id);
    else if (oper == 2) this.misatgeService.add('Afegit un nou Superheroi correctament amb id: '+id);
    else if (oper == 3) this.misatgeService.add('Eliminat el Superheroi correctament amb id: '+id);
    else if (oper == 4) this.misatgeService.add('Superheroi trobat correctament.');
    else if (oper == 5) this.misatgeService.add('No pots fer operacions amb ell, dades erroneas o camps buïts.');
    else if (oper == 6) this.misatgeService.add('No està en la llista, prova amb un altre Superheroi.');
    else if (oper == 7) this.misatgeService.add('El Superheroi amb id: '+id+', no exiteix i no pots modificar ni eliminar.');
    else if (oper == 8) this.misatgeService.add('El id '+id+' ja existeix en un altre Superheroi, tria un altre.');
    else if (oper == 9) this.misatgeService.add('No hi han prous Superherois per eliminar un més.')
    return herois;
  }
  /** la segona estructura de dades de in-memory-data */
  private log(message: string) {
    this.misatgeService.add("el missatge és: " + message);
  }

  private handleError<T>(operation = 'operation', result?: T) { return (error: any): Observable<T> =>{console.log(error); this.log(operation+' error '+error.message);
  return of(result as T)};
  }
  private heroisUrl = 'api/herois';

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroisUrl).pipe(catchError(this.handleError<Hero[]>('getHeroes',[])));
  }

  getHeroe(id: number): Observable<Hero> {
    const url = ''+this.heroisUrl+'/'+id;
    return this.http.get<Hero>(url).pipe(tap(_ => this.log('Trobat heroi amb id: ' + id)), catchError(this.handleError<Hero>('getHero' + id )));
  }

  updateHero(hero:Hero): Observable<any> {
    return this.http.put(this.heroisUrl, hero, this.httpOptions)/*.pipe(tap(_ => this.log('guardar heroi id:' +  hero.id)))*/;
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
  };

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroisUrl, hero, this.httpOptions)/*.pipe(tap((newHero: Hero) => this.log("Afegir heroi amb id: " + newHero.id)), catchError(this.handleError<Hero>('addHero')))*/;
  }

  deleteHero(id: number): Observable<Hero> {
    const url = ""+this.heroisUrl+"/"+id;
    return this.http.delete<Hero>(url, this.httpOptions)/*.pipe(tap(_ => this.log('Elimninat heroi amb id: ' + id)), catchError(this.handleError<Hero>('deleteHero')))*/;
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) return of([]);
    return this.http.get<Hero[]>(''+this.heroisUrl+'/name: '+term)/*.pipe( tap (x => x.length ?
      this.log('Trobat el superheroi amb el nom: '+term):
      this.log('no hi ha cap superheroi')), catchError(this.handleError<Hero[]>('searchHeroes', [])))*/;
  }
}

