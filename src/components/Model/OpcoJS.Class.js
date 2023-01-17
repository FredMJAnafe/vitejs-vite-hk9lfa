export default class Opco {
  id;
  accrochages;
  active;
  nom;

  constructor(nom) {
    this.id = null;
    this.active = true;
    this.accrochages = [];
    this.nom = nom;
  }
  accroche(accrochage) {
    accrochage.date = Date.now();
    return this.accrochages.push(accrochage);
  }
  modifieIdentifiant(idOpco) {
    this.id = idOpco;
  }
}
