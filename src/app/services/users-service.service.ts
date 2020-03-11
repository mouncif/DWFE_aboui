import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Utilisateurs} from '../models/utilisateurs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject, Observable} from 'rxjs';
import {Profiles} from '../models/profiles';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  private Users = 'http://localhost:3000/users';
  private profiles = 'http://localhost:3000/profiles';

  constructor(private http: HttpClient ) {}

  formUtilisateur: FormGroup = new FormGroup({
    id: new FormControl(null),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    profile: new FormControl('', Validators.required),
    datecreation: new FormControl('', ),
    datefin: new FormControl('', ),
    email: new FormControl('', Validators.email),
    photoPath: new FormControl(''),
  });

  formProfile: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    proteger: new FormControl(false),
  });


  initializeFormUtilisateur() {
    this.formUtilisateur.setValue({
      id: null,
      username: '',
      password: '',
      profile: '',
      datecreation: Date.now(),
      datefin: '',
      email: '',
      photoPath: '',
    });
  }
  initializeFormProfile() {
    this.formUtilisateur.setValue({
      id: null,
      name: '',
      proteger: false,
    });
  }

  // utilisateurs
  addUser(user) {
    return this.http.post<Utilisateurs>(this.Users, user);
  }
  updateUser(user) {
    return this.http.put(`${this.Users}/${user.id}`, user);
  }
  remove(id) {
    return this.http.delete( `${this.Users}/${id}`);
  }
  selectUtilisateurs() {
    return this.http.get(this.Users);
  }
  populateFormUtilisateur(row) {
    this.formUtilisateur.setValue(row);
    console.log(row);
  }

  // profiles
  addProfile(profile) {
    return this.http.post<Profiles>(this.profiles, profile);
  }
  selectProfiles() {
    return this.http.get(this.profiles);
  }
  removeProfile(id) {
    return this.http.delete( `${this.profiles}/${id}`);
  }
  updateProfile(user) {
    return this.http.put(`${this.profiles}/${user.id}`, user);
  }
  populateFormProfile(row) {
    this.formProfile.setValue(row);
    console.log(row);
  }

  selectLoginUtilisateur(username, password) {
    return this.http.get(`${this.Users}?username=${username}&password=${password}`);
  }
}
