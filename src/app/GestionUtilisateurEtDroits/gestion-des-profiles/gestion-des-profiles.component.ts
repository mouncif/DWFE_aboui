import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersServiceService} from '../../services/users-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Profiles} from '../../models/profiles';
import {Utilisateurs} from '../../models/utilisateurs';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-gestion-des-profiles',
  templateUrl: './gestion-des-profiles.component.html',
  styleUrls: ['./gestion-des-profiles.component.css']
})
export class GestionDesProfilesComponent implements OnInit {
  loading = false;
  submitted = false;
  profiles: Profiles[] = [];

  private profile: Profiles = {
    id: null,
    name: '',
    proteger: false,
  };
  constructor( private service: AuthService , private UserService: UsersServiceService, private router: Router) {
    if (!this.service.currentUserValue) {
      this.router.navigate(['/']);
    }
  }



  ngOnInit() {
    this.UserService.selectProfiles();
  }

  onSubmit() {
    if (this.UserService.formProfile.valid) {
      this.profile = this.UserService.formProfile.value;
      if (this.UserService.formProfile.value.id == null) {
        console.log(this.profile);
        this.loading = true;
        this.UserService.addProfile(this.profile).subscribe((user) => this.profiles = [user, ...this.profiles]);
        this.loading = false;
        this.UserService.formProfile.reset();
        this.UserService.initializeFormProfile();
        this.router.navigate(['/profiles']);

        alert('Profile ajouter !');

      } else {
        console.log(this.profile);
        this.UserService.updateProfile(this.UserService.formProfile.value).subscribe(() => {
          this.router.navigate(['/profile']);
        });
        alert('Profile updated !');

      }
    }

  }
}
