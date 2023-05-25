import { Component } from '@angular/core';
import { MisatgeService } from '../services/misatge.service';

@Component({
  selector: 'app-misatges',
  templateUrl: './misatges.component.html',
  styleUrls: ['./misatges.component.css']
})
export class MisatgesComponent {

  constructor(public misatgeService: MisatgeService) {}

}
