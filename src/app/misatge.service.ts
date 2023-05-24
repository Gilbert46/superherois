import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MisatgeService {
  misatges: string[] = [];

  add(misatge: string) {
    this.misatges.push(misatge);
  }

  clear() {
    this.misatges = [];
  }

}
