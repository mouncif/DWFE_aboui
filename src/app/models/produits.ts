export interface Produits {
  id?: null;
  nom: string;
  nom_court: string;
  prix_base: number;
  prix_vente: number;
  remise_max: number;
  unites: number;
  image: string;
  stock_init: number;
  stock_actuel: number;
  proteger: boolean;
}
