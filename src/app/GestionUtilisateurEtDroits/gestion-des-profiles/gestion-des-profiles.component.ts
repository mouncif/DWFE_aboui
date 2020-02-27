import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersServiceService} from '../../services/users-service.service';
import {ActivatedRoute} from '@angular/router';
import {Profiles} from '../../models/profiles';
import {Utilisateurs} from '../../models/utilisateurs';

@Component({
  selector: 'app-gestion-des-profiles',
  templateUrl: './gestion-des-profiles.component.html',
  styleUrls: ['./gestion-des-profiles.component.css']
})
export class GestionDesProfilesComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  private P: Profiles = {
    id: null,
    name: ''
  };
  constructor(private formBuilder: FormBuilder, private UserService: UsersServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      profile: ['', Validators.required],
    });

    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      alert('form erreur validator !');
      // return;
    }
    this.P.name = this.f.profile.value;


    this.loading = true;
    this.UserService.addProfile(this.P).subscribe(res => {
      alert('profile ajouter !');
    });
    this.loading = false;
  }
}
