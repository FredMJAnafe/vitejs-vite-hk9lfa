export default class Employeur{
    siret: string;
    effectif: string;
    nom_du_contact: string;
    afficheEmployeurPublic: boolean;
    prenom_du_contact: string;
    adresse: string;
    complement_adresse: string;
    code_postal: string;
    commune: string;
    telephone: string;
    courriel: string;
    type_employeur: string;
    cle_numero_de_securite_sociale: string;
    mineur_emancipe: string;

    constructor(
        nom_de_naissance: string,
        nom_usage: string,
        prenom: string,
        date_de_naissance: string,
        travailleur_handicape: boolean,
        commune_de_naissance: string,
        adresse: string,
        complement_adresse: string,
        code_postal: string,
        commune: string,
        telephone: string,
        courriel: string,
        numero_de_securite_sociale: string,
        cle_numero_de_securite_sociale: string,
        mineur_emancipe: string,
        nom_du_representant_legal: string,
        adresse_du_representant_legal: string,
        code_postal_du_representant_legal: string,
        prenom_du_representant_legal: string,
        complement_adresse_du_representant_legal: string,
        commune_du_representant_legal: string
    ) {
        this.nom_de_naissance=nom_de_naissance;
        this.nom_usage=nom_usage;
        this.prenom=prenom;
        this.date_de_naissance=date_de_naissance;
        this.travailleur_handicape=travailleur_handicape;
        this.commune_de_naissance=commune_de_naissance;
        this.adresse=adresse;
        this.complement_adresse=complement_adresse;
        this.code_postal=code_postal;
        this.commune=commune;
        this.telephone=telephone;
        this.courriel=courriel;
        this.numero_de_securite_sociale=numero_de_securite_sociale;
        this.cle_numero_de_securite_sociale=cle_numero_de_securite_sociale;
        this.mineur_emancipe=mineur_emancipe;
        this.nom_du_representant_legal=nom_du_representant_legal;
        this.adresse_du_representant_legal=adresse_du_representant_legal;
        this.code_postal_du_representant_legal=code_postal_du_representant_legal;
        this.prenom_du_representant_legal=prenom_du_representant_legal;
        this.complement_adresse_du_representant_legal=complement_adresse_du_representant_legal;
        this.commune_du_representant_legal=commune_du_representant_legal;
    }
}