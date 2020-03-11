import { Component, OnInit } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Utilisateurs} from '../../models/utilisateurs';

@Component({
  selector: 'app-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.css']
})
export class HeaderbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
