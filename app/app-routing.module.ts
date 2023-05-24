import { Component, NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroisComponent } from './herois/herois.component';
import { TaulerComponent } from './tauler/tauler.component';
import { DetallComponent } from './detall/detall.component';

const routes: Routes = [
  { path: '', redirectTo: '/tauler', pathMatch: 'full'},
  { path: 'tauler', component: TaulerComponent },
  { path: 'detall/:id', component: DetallComponent },
  { path: 'herois', component: HeroisComponent }
];

@NgModule({
  /*declarations: [],
  imports: [
    CommonModule
  ]*/
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
