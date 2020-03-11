import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Utilisateurs} from '../models/utilisateurs';
import {Clients} from '../models/clients';
import {HttpClient} from '@angular/common/http';
import {Produits} from '../models/produits';
import {Fournisseurs} from '../models/fournisseurs';

@Injectable({
  providedIn: 'root'
})
export class GVentesService {
  private clients = 'http://localhost:3000/clients';
  private fournisseurs = 'http://localhost:3000/fournisseurs';
  private produits = 'http://localhost:3000/produits';
  constructor(private http: HttpClient) { }


  formProduits: FormGroup = new FormGroup({
    id: new FormControl(null),
    nom: new FormControl('', Validators.required),
    nom_court: new FormControl('', Validators.required),
    prix_base: new FormControl('', Validators.required),
    prix_vente: new FormControl('', Validators.required),
    remise_max: new FormControl('', Validators.required),
    unites: new FormControl('', Validators.required),
    image: new FormControl(''),
    stock_init: new FormControl('', Validators.required),
    stock_actuel: new FormControl('', Validators.required),
    proteger: new FormControl(false),
  });

  formFournisseurs: FormGroup = new FormGroup({
    id: new FormControl(null),
    nom: new FormControl('', Validators.required),
    nom_court: new FormControl('', Validators.required),
    ville: new FormControl('', Validators.required),
    adresse: new FormControl('', Validators.required),
    tel: new FormControl('', Validators.required),
    fix: new FormControl('', ),
    fax: new FormControl(''),
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    proteger: new FormControl(false),
  });

  formClients: FormGroup = new FormGroup({
    id: new FormControl(null),
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    statut: new FormControl('', Validators.required),
    photo: new FormControl(''),
    tel: new FormControl('', Validators.required),
    email: new FormControl('', ),
    adresse: new FormControl(''),
    ville: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    proteger: new FormControl(false),
  });

  initializeFormClients() {
    this.formClients.setValue({
      id: null,
      nom: '',
      prenom: '',
      statut: '',
      photo: '',
      tel: '',
      email: '',
      adresse: '',
      ville: '',
      username: '',
      password: '',
      proteger: false,
    });
  }

  initializeFormFournisseurs() {
    this.formFournisseurs.setValue({
      id: null,
      nom: '',
      nom_court: '',
      ville: '',
      adresse: '',
      tel: '',
      fix: '',
      fax: '',
      email: '',
      username: '',
      password: '',
      proteger: false,
    });
  }

  initializeFormProduits() {
    this.formProduits.setValue({
      id: null,
      nom: '',
      nom_court: '',
      prix_base: 0,
      prix_vente: 0,
      remise_max: 0,
      unites: 0,
      image: '',
      stock_init: 0,
      stock_actuel: 0,
      proteger: false,
    });
  }


  // Clients
  addClient(user) {
    return this.http.post<Clients>(this.clients, user);
  }
  updateClient(user) {
    return this.http.put(`${this.clients}/${user.id}`, user);
  }
  removeClient(id) {
    return this.http.delete( `${this.clients}/${id}`);
  }
  selectClients() {
    return this.http.get(this.clients);
  }
  populateFormClient(row) {
    this.formClients.setValue(row);
    console.log(row);
  }

  // Fournisseurs
  addFournisseur(user) {
    return this.http.post<Fournisseurs>(this.fournisseurs, user);
  }
  updateFournisseur(user) {
    return this.http.put(`${this.fournisseurs}/${user.id}`, user);
  }
  removeFournisseur(id) {
    return this.http.delete( `${this.fournisseurs}/${id}`);
  }
  selectFournisseurs() {
    return this.http.get(this.fournisseurs);
  }
  populateFormFournisseur(row) {
    this.formFournisseurs.setValue(row);
    console.log(row);
  }

  // Produits
  addProduit(user) {
    return this.http.post<Produits>(this.produits, user);
  }
  updateProduit(user) {
    return this.http.put(`${this.produits}/${user.id}`, user);
  }
  removeProduit(id) {
    return this.http.delete( `${this.produits}/${id}`);
  }
  selectProduits() {
    return this.http.get(this.produits);
  }
  populateFormProduit(row) {
    this.formProduits.setValue(row);
    console.log(row);
  }
}
