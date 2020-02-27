import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {UsersServiceService} from '../../services/users-service.service';
import {Utilisateurs} from '../../models/utilisateurs';

@Component({
  selector: 'app-ajouter-utilisateur',
  templateUrl: './ajouter-utilisateur.component.html',
  styleUrls: ['./ajouter-utilisateur.component.css']
})
export class AjouterUtilisateurComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  users: Utilisateurs[] = [];
  private user: Utilisateurs = {
    identifiant: null,
    username: null,
    password: null,
    profile: null,
    datecreation: null,
    datefin: null,
    email: null,
    photoPath: null,
  };
  constructor(private formBuilder: FormBuilder, private UserService: UsersServiceService, private route: ActivatedRoute,
  ) { }



  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      identifiant: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      profile: ['', Validators.required],
      datecreation: ['', Validators.required],
      datefin: ['', Validators.required],
      email: ['', Validators.required],
      photo: ['', Validators.required],

    });

    // get return url from route parameters or default to '/'
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }


  onSubmit() {
    this.user.identifiant = this.f.identifiant.value;
    this.user.datecreation = this.f.datecreation.value;
    this.user.datefin = this.f.datefin.value;
    this.user.email = this.f.email.value;
    this.user.username = this.f.username.value;
    this.user.password = this.f.password.value;
    this.user.photoPath = this.f.photo.value;
    this.user.profile = this.f.profile.value;
    this.submitted = true;
    console.log(this.user);
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      alert('form erreur validator !');
     // return;
    }


    this.loading = true;
    this.UserService.addUser(this.user).subscribe((user) => this.users = [user, ...this.users]);
    this.loading = false;
    alert('Utilisateur ajouter !');
  }
}
