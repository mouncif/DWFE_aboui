import { Component, OnInit } from '@angular/core';
import {Fournisseurs} from '../../models/fournisseurs';
import {MatTableDataSource} from '@angular/material';
import {GVentesService} from '../../services/g-ventes.service';
import {Router} from '@angular/router';
import {Produits} from '../../models/produits';
import {Profiles} from '../../models/profiles';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits: Produits[] = [];
  dataSource = new MatTableDataSource<Produits>();
  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['id', 'nom', 'nom_court', 'prix_base', 'prix_vente', 'remise_max', 'unites', 'image', 'stock_init', 'stock_actuel', 'proteger' , 'actions'];

  constructor(private controle: AuthService , private service: GVentesService , private router: Router) {
    if (!this.controle.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.fetchElements();
  }

  fetchElements() {
    this.service.selectProduits().subscribe(
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
      this.service.removeProduit(id).subscribe(() => {
        // this.notification.open('Success Delete ...!');
        this.fetchElements();
      });
    }
  }

  onEdit(user) {
    this.router.navigate(['/addproduit']);
    this.service.populateFormProduit(user);
    this.service.updateProduit(user).subscribe(() => {
      this.fetchElements();
    });
  }
}
