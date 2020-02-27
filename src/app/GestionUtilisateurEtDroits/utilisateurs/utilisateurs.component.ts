import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Utilisateurs} from '../../models/utilisateurs';
import {UsersServiceService} from '../../services/users-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {
  users: Utilisateurs[] = [];
  user: Utilisateurs;
  dataSource = new MatTableDataSource<Utilisateurs>();
  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['identifiant', 'datecreation', 'datefin', 'email', 'username', 'password', 'photoPath', 'profile' , 'actions'];

  constructor(private service: UsersServiceService , private router: Router) { }

  ngOnInit() {
    this.fetchElements();
  }

  fetchElements() {
    this.service.selectUtilisateurs().subscribe(
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
      this.service.remove(id).subscribe(() => {
        // this.notification.open('Success Delete ...!');
        this.fetchElements();
      });
    }
  }

  onEdit(user) {
    this.router.navigate(['/add']);
    this.service.populateForm(user);
    // this.service.updateUser(user).subscribe(() => {
      // this.fetchElements();
    // });
  }
}
