import { Component, OnInit } from '@angular/core';
import {Utilisateurs} from '../../models/utilisateurs';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  currentUser: Utilisateurs;
  constructor(private router: Router, private service: AuthService) {
    this.service.currentUser.subscribe(x => this.currentUser = x[0]);

  }

  ngOnInit() {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.service.currentUserValue;
    if (currentUser) {
      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate([''], { queryParams: { returnUrl: state.url }});
    return false;
  }
  onLogout() {
    this.service.logout();
    window.location.replace('/');
  }

}
