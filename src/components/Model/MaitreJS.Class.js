export default class Maitre{
    identifiantMaitre;
    bloque;

    nom_de_naissance;
    prenom;
    date_de_naissance;
    attestation;

    constructor(
        nom_de_naissance,
        prenom,
        date_de_naissance,
        attestation
        ) {
        this.identifiantMaitre=null;
        this.bloque=false;

        this.nom_de_naissance=nom_de_naissance;
        this.date_de_naissance=date_de_naissance;
        this.prenom=prenom;
        this.attestation=attestation;
    }

    modifieIdentifiantMaitre(identifiantMaitre){
        this.identifiantMaitre=identifiantMaitre;
    }
}