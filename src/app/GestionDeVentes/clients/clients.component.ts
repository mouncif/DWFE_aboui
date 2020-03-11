import { Component, OnInit } from '@angular/core';
import {Utilisateurs} from '../../models/utilisateurs';
import {MatTableDataSource} from '@angular/material';
import {UsersServiceService} from '../../services/users-service.service';
import {Router} from '@angular/router';
import {Clients} from '../../models/clients';
import {GVentesService} from '../../services/g-ventes.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Clients[] = [];
  client: Clients;
  dataSource = new MatTableDataSource<Clients>();
  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['id', 'nom', 'prenom', 'statut', 'photo', 'tel', 'email', 'adresse', 'ville', 'username', 'password', 'proteger' , 'actions'];

  constructor(private controle: AuthService, private service: GVentesService , private router: Router) {
    if (!this.controle.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.fetchElements();
  }

  fetchElements() {
    this.service.selectClients().subscribe(
      res => {
        if (!res) {return; }
        console.log(res);
        this.dataSource = new MatTableDataSource(res as any);
      }
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  onDelete(id) {
    if (confirm('Are you sur to delete this record ?')) {
      this.service.removeClient(id).subscribe(() => {
        // this.notification.open('Success Delete ...!');
        this.fetchElements();
      });
    }
  }

  onEdit(user) {
    this.router.navigate(['/addclient']);
    this.service.populateFormClient(user);
    this.service.updateClient(user).subscribe(() => {
      this.fetchElements();
    });
  }
}
