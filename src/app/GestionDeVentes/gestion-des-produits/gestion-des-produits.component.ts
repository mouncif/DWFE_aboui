import { Component, OnInit } from '@angular/core';
import {Fournisseurs} from '../../models/fournisseurs';
import {GVentesService} from '../../services/g-ventes.service';
import {Router} from '@angular/router';
import {Produits} from '../../models/produits';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-gestion-des-produits',
  templateUrl: './gestion-des-produits.component.html',
  styleUrls: ['./gestion-des-produits.component.css']
})
export class GestionDesProduitsComponent implements OnInit {
  loading = false;
  produits: Produits[] = [];

  private produit: Produits = {
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
  };
  constructor( private controle: AuthService, private vService: GVentesService, private router: Router) {
    if (!this.controle.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.vService.selectProduits();
  }

  onClear() {
    this.vService.initializeFormProduits();
    this.vService.formProduits.reset();
  }

  onSubmit() {
    if (this.vService.formProduits.valid) {
      this.produit = this.vService.formProduits.value;
      if (this.vService.formProduits.value.id == null) {
        console.log(this.produit);
        this.loading = true;
        this.vService.addProduit(this.produit).subscribe((user) => this.produits = [this.produit, ...this.produits]);
        this.loading = false;
        this.vService.formProduits.reset();
        this.vService.initializeFormProduits();
        this.router.navigate(['/produits']);

        alert('Produit ajouter !');

      } else {
        console.log(this.produit);
        this.vService.updateProduit(this.vService.formProduits.value).subscribe(() => {
          this.router.navigate(['/addproduit']);
        });
        alert('Produit updated !');

      }
    }

  }
}
