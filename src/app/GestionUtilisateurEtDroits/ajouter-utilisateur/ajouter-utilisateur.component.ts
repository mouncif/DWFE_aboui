import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersServiceService} from '../../services/users-service.service';
import {Utilisateurs} from '../../models/utilisateurs';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-ajouter-utilisateur',
  templateUrl: './ajouter-utilisateur.component.html',
  styleUrls: ['./ajouter-utilisateur.component.css']
})
export class AjouterUtilisateurComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  users: Utilisateurs[] = [];

  private user: Utilisateurs = {
    id: null,
    username: null,
    password: null,
    profile: null,
    datecreation: null,
    datefin: null,
    email: null,
    photoPath: null,
  };
  constructor(private service: AuthService,   private formBuilder: FormBuilder, private UserService: UsersServiceService, private router: Router) {
    if (!this.service.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  onClear() {
    this.UserService.initializeFormUtilisateur();
    this.UserService.formUtilisateur.reset();
  }

  ngOnInit() {
    this.UserService.selectUtilisateurs();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }



  onSubmit() {
    if (this.UserService.formUtilisateur.valid) {
      this.user = this.UserService.formUtilisateur.value;
      if (this.UserService.formUtilisateur.value.id == null) {
        console.log(this.user);
        this.loading = true;
        this.UserService.addUser(this.user).subscribe((user) => this.users = [user, ...this.users]);
        this.loading = false;
        this.UserService.formUtilisateur.reset();
        this.UserService.initializeFormUtilisateur();
        this.router.navigate(['/listeuser']);

        alert('Utilisateur ajouter !');

      } else {
        console.log(this.user);
        this.UserService.updateUser(this.UserService.formUtilisateur.value).subscribe(() => {
          this.router.navigate(['/listeuser']);
        });
        alert('Utilisateur updated !');

      }
    }

  }
}
