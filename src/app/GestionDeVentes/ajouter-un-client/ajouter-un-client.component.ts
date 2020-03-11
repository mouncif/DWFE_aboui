import { Component, OnInit } from '@angular/core';
import {GVentesService} from '../../services/g-ventes.service';
import {FormGroup} from '@angular/forms';
import {Utilisateurs} from '../../models/utilisateurs';
import {Clients} from '../../models/clients';
import {UsersServiceService} from '../../services/users-service.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-ajouter-un-client',
  templateUrl: './ajouter-un-client.component.html',
  styleUrls: ['./ajouter-un-client.component.css']
})
export class AjouterUnClientComponent implements OnInit {
  loading = false;
  clients: Clients[] = [];

  private client: Clients = {
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
  };
  constructor(private service: AuthService , private vService: GVentesService, private router: Router) {
    if (!this.service.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.vService.selectClients();
  }

  onClear() {
    this.vService.initializeFormClients();
    this.vService.formClients.reset();
  }

  onSubmit() {
    if (this.vService.formClients.valid) {
      this.client = this.vService.formClients.value;
      if (this.vService.formClients.value.id == null) {
        console.log(this.client);
        this.loading = true;
        this.vService.addClient(this.client).subscribe((user) => this.clients = [user, ...this.clients]);
        this.loading = false;
        this.vService.formClients.reset();
        this.vService.initializeFormClients();
        this.router.navigate(['/clients']);

        alert('Client ajouter !');

      } else {
        console.log(this.client);
        this.vService.updateClient(this.vService.formClients.value).subscribe(() => {
          this.router.navigate(['/addclient']);
        });
        alert('Client updated !');

      }
    }

  }
}
