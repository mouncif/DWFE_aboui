import { Component, OnInit } from '@angular/core';
import {Clients} from '../../models/clients';
import {MatTableDataSource} from '@angular/material';
import {Utilisateurs} from '../../models/utilisateurs';
import {GVentesService} from '../../services/g-ventes.service';
import {Router} from '@angular/router';
import {Fournisseurs} from '../../models/fournisseurs';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {
  fournisseurs: Fournisseurs[] = [];
  fournisseur: Fournisseurs;
  dataSource = new MatTableDataSource<Fournisseurs>();
  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['id', 'nom', 'nom_court', 'ville', 'adresse', 'tel', 'fix', 'fax', 'email', 'username', 'password', 'proteger' , 'actions'];

  constructor(private controle: AuthService , private service: GVentesService , private router: Router) {
    if (!this.controle.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.fetchElements();
  }

  fetchElements() {
    this.service.selectFournisseurs().subscribe(
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
      this.service.removeFournisseur(id).subscribe(() => {
        // this.notification.open('Success Delete ...!');
        this.fetchElements();
      });
    }
  }

  onEdit(user) {
    this.router.navigate(['/addfournisseur']);
    this.service.populateFormFournisseur(user);
    this.service.updateFournisseur(user).subscribe(() => {
      this.fetchElements();
    });
  }
}
