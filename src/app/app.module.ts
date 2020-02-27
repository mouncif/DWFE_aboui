import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from '../material/material.module';
import { SidebarComponent } from './mainlayout/sidebar/sidebar.component';
import { TopbarComponent } from './mainlayout/topbar/topbar.component';
import { HeaderbarComponent } from './mainlayout/headerbar/headerbar.component';
import { NavigationbarComponent } from './mainlayout/navigationbar/navigationbar.component';
import {MatCardModule, MatListModule, MatSidenavModule, MatTabsModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { AjouterUtilisateurComponent } from './GestionUtilisateurEtDroits/ajouter-utilisateur/ajouter-utilisateur.component';
import { GestionDesProfilesComponent } from './GestionUtilisateurEtDroits/gestion-des-profiles/gestion-des-profiles.component';
import { UtilisateursComponent } from './GestionUtilisateurEtDroits/utilisateurs/utilisateurs.component';
import { ClientsComponent } from './GestionDeVentes/clients/clients.component';
import { AjouterUnClientComponent } from './GestionDeVentes/ajouter-un-client/ajouter-un-client.component';
import { ProduitsComponent } from './GestionDeVentes/produits/produits.component';
import { GestionDesProduitsComponent } from './GestionDeVentes/gestion-des-produits/gestion-des-produits.component';
import { GestionDesFournisseuresComponent } from './GestionDeVentes/gestion-des-fournisseures/gestion-des-fournisseures.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UsersServiceService} from './services/users-service.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    HeaderbarComponent,
    NavigationbarComponent,
    AjouterUtilisateurComponent,
    GestionDesProfilesComponent,
    UtilisateursComponent,
    ClientsComponent,
    AjouterUnClientComponent,
    ProduitsComponent,
    GestionDesProduitsComponent,
    GestionDesFournisseuresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSidenavModule,
    RouterModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [UsersServiceService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
