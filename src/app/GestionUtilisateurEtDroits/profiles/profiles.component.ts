import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Utilisateurs} from '../../models/utilisateurs';
import {UsersServiceService} from '../../services/users-service.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  dataSource = new MatTableDataSource<Utilisateurs>();
  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['id', 'name' , 'proteger' , 'actions'];

  constructor(private controle: AuthService , private service: UsersServiceService , private router: Router) {
    if (!this.controle.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.fetchElements();
  }


  fetchElements() {
    this.service.selectProfiles().subscribe(
      res => {
        if (!res) {return; }
        this.dataSource = new MatTableDataSource(res as any);
      }
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  onDelete(id) {
    if (confirm('Are you sur to delete this record ?')) {
      this.service.removeProfile(id).subscribe(() => {
        // this.notification.open('Success Delete ...!');
        this.fetchElements();
      });
    }
  }

  onEdit(user) {
    this.router.navigate(['/profile']);
    this.service.populateFormProfile(user);
    this.service.updateProfile(user).subscribe(() => {
      this.fetchElements();
    });
  }

}
