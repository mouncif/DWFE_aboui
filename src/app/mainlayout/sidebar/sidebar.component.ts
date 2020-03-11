import { Component, OnInit } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {UsersServiceService} from '../../services/users-service.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private listElement;
  private GestionVentes;
  private GestionUsers;
  gVentes: any;
  gUsers: any;
  constructor(private router: Router, private service: AuthService) {
    this.GestionVentes = this.service.gventes.subscribe(x => this.gVentes = x);
    this.GestionUsers = this.service.gusers.subscribe(x => this.gUsers = x);
  }

ngOnInit() {
    this.GestionVentes = this.gVentes;
    this.GestionUsers = this.gUsers;
  }


}
