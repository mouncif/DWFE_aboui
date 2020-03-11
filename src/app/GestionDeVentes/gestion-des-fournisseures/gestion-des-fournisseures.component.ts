import { Component, OnInit } from '@angular/core';
import {Clients} from '../../models/clients';
import {GVentesService} from '../../services/g-ventes.service';
import {Router} from '@angular/router';
import {Fournisseurs} from '../../models/fournisseurs';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-gestion-des-fournisseures',
  templateUrl: './gestion-des-fournisseures.component.html',
  styleUrls: ['./gestion-des-fournisseures.component.css']
})
export class GestionDesFournisseuresComponent implements OnInit {
  loading = false;
  fournisseurs: Fournisseurs[] = [];

  private fournisseur: Fournisseurs = {
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
  };
  constructor(private controle: AuthService, private vService: GVentesService, private router: Router) {
    if (!this.controle.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.vService.selectFournisseurs();
  }

  onClear() {
    this.vService.initializeFormFournisseurs();
    this.vService.formFournisseurs.reset();
  }

  onSubmit() {
    if (this.vService.formFournisseurs.valid) {
      this.fournisseur = this.vService.formFournisseurs.value;
      if (this.vService.formFournisseurs.value.id == null) {
        console.log(this.fournisseur);
        this.loading = true;
        this.vService.addFournisseur(this.fournisseur).subscribe((user) => this.fournisseurs = [this.fournisseur, ...this.fournisseurs]);
        this.loading = false;
        this.vService.formFournisseurs.reset();
        this.vService.initializeFormFournisseurs();
        this.router.navigate(['/fournisseurs']);

        alert('Fournisseur ajouter !');

      } else {
        console.log(this.fournisseur);
        this.vService.updateFournisseur(this.vService.formFournisseurs.value).subscribe(() => {
          this.router.navigate(['/addfournisseur']);
        });
        alert('Fournisseur updated !');

      }
    }

  }
}
