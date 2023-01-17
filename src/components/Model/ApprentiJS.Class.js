export default class Apprenti{
    identifiantApprenti;
    bloque;

    nom_de_naissance;
    nom_usage;
    prenom;
    date_de_naissance;
    sexe;

    travailleur_handicape;
    commune_de_naissance;
    departement_de_naissance;
    adresse;
    complement_adresse;
    code_postal;
    commune;
    nationalite;
    telephone;
    courriel;

    numero_de_securite_sociale;
    cle_numero_de_securite_sociale;
    mineur_emancipe;
    nom_du_representant_legal;
    adresse_du_representant_legal;
    code_postal_du_representant_legal;
    prenom_du_representant_legal;
    complement_adresse_du_representant_legal;
    commune_du_representant_legal;

    constructor(
        nom_de_naissance,
        nom_usage,
        prenom,
        sexe,
        date_de_naissance,

        commune_de_naissance,
        departement_de_naissance,
        adresse,
        complement_adresse,
        code_postal,
        commune,
        nationalite,
        telephone,
        courriel,

        travailleur_handicape,
        numero_de_securite_sociale,
        cle_numero_de_securite_sociale,
        numero_situation_apprenti,
        libelle_situation_apprenti,
        numero_dernier_diplome,
        libelle_dernier_diplome,
        derniere_classe_suivie,

        mineur_emancipe,
        nom_du_representant_legal,
        adresse_du_representant_legal,
        code_postal_du_representant_legal,
        prenom_du_representant_legal,
        complement_adresse_du_representant_legal,
        commune_du_representant_legal
        ) {
        this.identifiantApprenti=null;
        this.bloque=false;

        this.nom_de_naissance=nom_de_naissance;
        this.nom_usage=nom_usage;
        this.prenom=prenom;
        this.date_de_naissance=date_de_naissance;
        this.sexe=sexe;

        this.commune_de_naissance=commune_de_naissance;
        this.departement_de_naissance=departement_de_naissance;
        this.adresse=adresse;
        this.complement_adresse=complement_adresse;
        this.code_postal=code_postal;
        this.commune=commune;
        this.nationalite=nationalite;
        this.telephone=telephone;
        this.courriel=courriel;

        this.travailleur_handicape=travailleur_handicape;
        this.numero_de_securite_sociale=numero_de_securite_sociale;
        this.cle_numero_de_securite_sociale=cle_numero_de_securite_sociale;
        this.numero_situation_apprenti=numero_situation_apprenti;
        this.libelle_situation_apprenti=libelle_situation_apprenti;
        this.numero_dernier_diplome=numero_dernier_diplome;
        this.libelle_dernier_diplome=libelle_dernier_diplome;
        this.derniere_classe_suivie=derniere_classe_suivie;

        this.mineur_emancipe=mineur_emancipe;
        this.nom_du_representant_legal=nom_du_representant_legal;
        this.adresse_du_representant_legal=adresse_du_representant_legal;
        this.code_postal_du_representant_legal=code_postal_du_representant_legal;
        this.prenom_du_representant_legal=prenom_du_representant_legal;
        this.complement_adresse_du_representant_legal=complement_adresse_du_representant_legal;
        this.commune_du_representant_legal=commune_du_representant_legal;
    }

    modifieIdentifiantApprenti(identifiantApprenti){
        this.identifiantApprenti=identifiantApprenti;
    }
}