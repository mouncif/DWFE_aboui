import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {GestionDesProfilesComponent} from './GestionUtilisateurEtDroits/gestion-des-profiles/gestion-des-profiles.component';
import {AjouterUtilisateurComponent} from './GestionUtilisateurEtDroits/ajouter-utilisateur/ajouter-utilisateur.component';
import {UtilisateursComponent} from './GestionUtilisateurEtDroits/utilisateurs/utilisateurs.component';
import {NavigationbarComponent} from './mainlayout/navigationbar/navigationbar.component';
import {ProfilesComponent} from './GestionUtilisateurEtDroits/profiles/profiles.component';
import {ProduitsComponent} from './GestionDeVentes/produits/produits.component';
import {ClientsComponent} from './GestionDeVentes/clients/clients.component';
import {FournisseursComponent} from './GestionDeVentes/fournisseurs/fournisseurs.component';
import {AjouterUnClientComponent} from './GestionDeVentes/ajouter-un-client/ajouter-un-client.component';
import {GestionDesFournisseuresComponent} from './GestionDeVentes/gestion-des-fournisseures/gestion-des-fournisseures.component';
import {GestionDesProduitsComponent} from './GestionDeVentes/gestion-des-produits/gestion-des-produits.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {
    path: 'add', component: AjouterUtilisateurComponent,

  },
  {
    path: '', component: LoginComponent,

  },
  {
    path: 'listeuser', component: UtilisateursComponent
  },
  {
    path: 'profile', component: GestionDesProfilesComponent
  },
  {
    path: 'accueil', component: NavigationbarComponent
  },
  {
    path: 'profiles', component: ProfilesComponent
  },
  {
    path: 'produits', component: ProduitsComponent
  },
  {
    path: 'clients', component: ClientsComponent
  },
  {
    path: 'fournisseurs', component: FournisseursComponent
  },
  {
    path: 'addclient', component: AjouterUnClientComponent
  },
  {
    path: 'addfournisseur', component: GestionDesFournisseuresComponent
  },
  {
    path: 'addproduit', component: GestionDesProduitsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
