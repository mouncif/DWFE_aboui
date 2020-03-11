import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, observable} from 'rxjs';
import {Utilisateurs} from '../models/utilisateurs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Utilisateurs Vars
  private currentUserSubject: BehaviorSubject<Utilisateurs>;
  public currentUser: Observable<Utilisateurs>;

  private gventesSubject: BehaviorSubject<any>;
  public gventes: Observable<any>;
  private gusersSubject: BehaviorSubject<any>;
  public gusers: Observable<any>;

  private user: Utilisateurs = null;
  private isusers: BehaviorSubject<boolean>;
  public isuser: boolean;

  private iseditors: BehaviorSubject<boolean>;
  public iseditor: boolean;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Utilisateurs>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

    // tslint:disable-next-line:max-line-length
    this.gventesSubject = new BehaviorSubject<any>( [{id : 1, name : 'Liste clients', link : '/clients'}, {id : 3, name : 'Liste Fournisseurs', link : '/fournisseurs'}, {id : 4, name : 'Liste Produits', link : '/produits'}, {id : 6, name : 'Crée nouveau Client', link : '/addclient'} , {id : 7, name : 'Crée nouveau Fournisseur', link : '/addfournisseur'} , {id : 8, name : 'Crée nouveau Produit', link : '/addproduit'}]);
    this.gventes = this.gventesSubject.asObservable();
    // tslint:disable-next-line:max-line-length
    this.gusersSubject = new BehaviorSubject<any>( [{id : 1, name : 'Utilisateurs', link : '/listeuser'}, {id : 3, name : 'Profiles', link : '/profiles'}, {id : 4, name : 'Crée nouveau Utilisateur', link : '/add'}, {id : 6, name : 'Crée nouveau profile', link : '/profile'}]);
    this.gusers = this.gusersSubject.asObservable();

    this.currentUser.subscribe(x => {
       // if (x != null ) {
      this.user = x[0];
      // @ts-ignore
      // tslint:disable-next-line:triple-equals
      if (this.user.profile == 'Admin') {
        // tslint:disable-next-line:max-line-length
        this.gventesSubject = new BehaviorSubject<any>( [{id : 1, name : 'Liste clients', link : '/clients'}, {id : 3, name : 'Liste Fournisseurs', link : '/fournisseurs'}, {id : 4, name : 'Liste Produits', link : '/produits'}, {id : 6, name : 'Crée nouveau Client', link : '/addclient'} , {id : 7, name : 'Crée nouveau Fournisseur', link : '/addfournisseur'} , {id : 8, name : 'Crée nouveau Produit', link : '/addproduit'}]);
        this.gventes = this.gventesSubject.asObservable();
        // tslint:disable-next-line:max-line-length
        this.gusersSubject = new BehaviorSubject<any>( [{id : 1, name : 'Utilisateurs', link : '/listeuser'}, {id : 3, name : 'Profiles', link : '/profiles'}, {id : 4, name : 'Crée nouveau Utilisateur', link : '/add'}, {id : 6, name : 'Crée nouveau profile', link : '/profile'}]);
        this.gusers = this.gusersSubject.asObservable();
          } else {
        // @ts-ignore
        // tslint:disable-next-line:triple-equals
        if (this.user.profile == 'Editor') {
                // tslint:disable-next-line:max-line-length
                this.gventesSubject = new BehaviorSubject<any>( [{id : 1, name : 'Liste clients', link : '/clients'}, {id : 3, name : 'Liste Fournisseurs', link : '/fournisseurs'}, {id : 4, name : 'Liste Produits', link : '/produits'}, {id : 6, name : 'Crée nouveau Client', link : '/addclient'} , {id : 7, name : 'Crée nouveau Fournisseur', link : '/addfournisseur'} , {id : 8, name : 'Crée nouveau Produit', link : '/addproduit'}]);
                this.gventes = this.gventesSubject.asObservable();
                // tslint:disable-next-line:max-line-length
                this.gusersSubject = new BehaviorSubject<any>( [{id : 1, name : 'Utilisateurs', link : '/listeuser'}, {id : 3, name : 'Profiles', link : '/profiles'}, {id : 4, name : 'Crée nouveau Utilisateur', link : '/add'}, {id : 6, name : 'Crée nouveau profile', link : '/profile'}]);
                this.gusers = this.gusersSubject.asObservable();
                this.iseditors = new BehaviorSubject<boolean> (true);
                this.iseditor = this.iseditors.value;
              } else {
                // tslint:disable-next-line:max-line-length
                this.gventesSubject = new BehaviorSubject<any>( [{id : 1, name : 'Liste clients', link : '/clients'}, {id : 3, name : 'Liste Fournisseurs', link : '/fournisseurs'}, {id : 4, name : 'Liste Produits', link : '/produits'} ]);
                this.gventes = this.gventesSubject.asObservable();
                // tslint:disable-next-line:max-line-length
                this.gusersSubject = new BehaviorSubject<any>( [{id : 1, name : 'Utilisateurs', link : '/listeuser'}, {id : 3, name : 'Profiles', link : '/profiles'}]);
                this.gusers = this.gusersSubject.asObservable();
                this.isusers = new BehaviorSubject<boolean> (true);
                this.isuser = this.isusers.value;
              }
      }
      }
    );
  }

  public get getgventes(): any {
    return this.gventesSubject.value;
  }
  public get getgusers(): any {
    return this.gusersSubject.value;
  }

  public get currentUserValue(): Utilisateurs {
    return this.currentUserSubject.value;
  }

  loginUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

}
