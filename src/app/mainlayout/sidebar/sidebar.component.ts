import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private listElement;
  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.listElement = [{id : 1, name : 'Accueil', link : '/accueil'}, {id : 3, name : 'Gestion de Ventes', link : '/prof/avis'}, {id : 4, name : 'Gestion des droits', link : '/prof/exam'}, {id : 6, name : 'Gestion des utilisateurs', link : '/aboutus'}];
  }

}
