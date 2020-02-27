import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Utilisateurs} from '../models/utilisateurs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  private Users = 'http://localhost:3000/users';
  private profiles = 'http://localhost:3000/profiles';

  constructor(private http: HttpClient ) { }



  addUser(user) {
    return this.http.post<Utilisateurs>(this.Users, user);
  }
  // tslint:disable-next-line:variable-name
  addProfile(Profiles) {
    return this.http.post<string>(this.profiles, Profiles);
  }
  remove(id) {
    return this.http.delete( `${this.Users}/${id}`);
  }
  selectUtilisateurs() {
    return this.http.get(this.Users);
  }
  populateForm(row) {
    // this.form.setValue(row);
    console.log(row);
  }
}
