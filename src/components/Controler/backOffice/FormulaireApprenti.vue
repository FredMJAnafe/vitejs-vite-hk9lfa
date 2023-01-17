<template>
  <!--En attendant de pouvoir implémenter correctement les enums-->

  <form class="formulaire">
    <fieldset class="titreFormulaireFacturier">
      <legend>
          Formulaire Apprenti (<a
            target="_blank"
            href="https://www.formulaires.service-public.fr/gf/getNotice.do?cerfaNotice=51649&cerfaFormulaire=10103"
            style="font-weight: bold"
            >Aide</a
          >)
      </legend>
      <div class="detailApprenti">
        <div class="inputBoxFacturier">
          <span class="detailFacturier">Nom de naissance</span>
          <input
            type="text"
            v-model="nom_de_naissance"
            placeholder="obligatoire"
            minlength="1"
            maxlength="80"
            required
          />
        </div>
        <div class="inputBoxFacturier">
          <span class="detailFacturier">Nom d'usage</span>
          <input type="text" v-model="nom_usage" minlength="1" maxlength="80" />
        </div>
        <div class="inputBoxFacturier">
          <span class="detailFacturier">Prénom</span>
          <input
            type="text"
            v-model="prenom"
            placeholder="obligatoire"
            minlength="1"
            maxlength="80"
            required
          />
        </div>
        <div class="inputBoxFacturier">
          <span class="detailFacturier">Date de naissance</span>
          <input
            id="dateNaissanceApprenti"
            type="date"
            :value="dateNaissance"
            @input="this.SiApprentiMineur"
            required
          />
        </div>
        <div class="inputBoxFacturier">
          <span class="detailFacturier">Sexe</span>
          <select v-model="sexe">
            <option :value="M" label="Masculin">Masculin</option>
            <option :value="F" label="Féminin">Féminin</option>
          </select>
        </div>
        <div class="inputBoxFacturier">
          <span class="detailFacturier">Département de naissance</span>
          <select
            id="departementsNaissanceListe"
            v-on:change="this.getListeCommunesNaissance"
            v-model="departement_de_naissance"
            placeholder="obligatoire"
            required
            maxlength="3"
            minlength="1"
            pattern="^[0-9]{1,3}$"
          >
            <option label="Choisir" selected>0</option>
          </select>
        </div>
        <div class="inputBoxFacturier">
          <span class="detailFacturier">Commune de naissance</span>
          <input
            id="communesNaissanceRecherche"
            :value="commune_de_naissance"
            type="text"
            placeholder="obligatoire"
            minlength="1"
            maxlength="80"
            required
            @input="this.rechercheCommunes"
          />
          <!--select id="communesNaissanceListe" v-model="commune_de_naissance" @click="this.getListeCommunesNaissance">

                    </select-->
        </div>
        <div class="inputBoxFacturier">
          <span class="detailFacturier">Nationalité</span>
          <select v-model="nationalite" required>
            <option :value="1">Française</option>
            <option :value="2">Union Européenne</option>
            <option :value="3">Etranger hors Union Européenne</option>
          </select>
        </div>
        <div class="inputBoxFacturier">
          <span class="detailFacturier">Régime social</span>
          <select v-model="regime_social">
            <option :value="0" label="--"></option>
            <option :value="1" label="MSA"></option>
            <option :value="2" label="URSSAF"></option>
          </select>
        </div>
        <div class="inputBoxFacturier">
          <span class="detailFacturier">Adresse</span>
          <input
            type="text"
            v-model="adresse"
            placeholder="obligatoire"
            minlength="1"
            maxlength="50"
            required
          />
        </div>
        <div class="inputBoxFacturier">
          <span class="detailFacturier">Complément d'adresse</span>
          <input
            type="text"
            v-model="complement_adresse"
            minlength="1"
            maxlength="155"
          />
        </div>
        <div class="inputBoxFacturier">
          <span class="detailFacturier">Code postal</span>
          <input
            type="text"
            v-model="code_postal"
            placeholder="obligatoire"
            minlength="1"
            maxlength="5"
            required
          />
        </div>
        <div class="inputBoxFacturier">
          <span class="detailFacturier">Commune</span>
          <input
            type="text"
            v-model="commune"
            placeholder="obligatoire"
            minlength="1"
            maxlength="80"
            required
          />
        </div>
        <div class="inputBoxFacturier">
          <span class="detailFacturier">Téléphone</span>
          <input
            type="tel"
            pattern="^((\+)33|0)[1-9](\d{2}){4}$"
            v-model="telephone"
            placeholder="obligatoire"
            minlength="1"
            maxlength="13"
            required
          />
        </div>
        <div class="inputBoxFacturier">
          <span class="detailFacturier">Courriel</span>
          <input
            type="email"
            v-model="courriel"
            placeholder="obligatoire"
            minlength="1"
            maxlength="80"
            required
          />
        </div>
        <div class="inputBoxFacturier">
          <span class="detailFacturier">Situation avant ce contrat</span>
          <select v-model="situation_apprenti">
            <option :value="1" label="Scolaire (hors DIMA)"></option>
            <option :value="2" label="Prépa apprentissage"></option>
            <option :value="3" label="Etudiant"></option>
            <option :value="4" label="Contrat d’apprentissage"></option>
            <option :value="5" label="Contrat de professionnalisation"></option>
            <option :value="6" label="Contrat aidé"></option>
            <option
              :value="7"
              label="En formation au CFA sous statut de stagiaire de la formation professionnelle, avant signature d’un contrat d’apprentissage (L6222-12-1 du code du travail)"
            ></option>
            <option
              :value="8"
              label="En formation, au CFA sans contrat sous statut de stagiaire de la formation professionnelle, suite à rupture (5° de L6231-2 du code du travail)"
            ></option>
            <option
              :value="9"
              label="Autres situations sous statut de stagiaire de la formation professionnelle"
            ></option>
            <option :value="10" label="Salarié"></option>
            <option
              :value="11"
              label="Autres situations sous statut de stagiaire de la formation professionnellePersonne à la recherche d’un emploi (inscrite ou non à P&ocirc;le Emploi)"
            ></option>
            <option :value="12" label="Inactif"></option>
          </select>
        </div>
        <div class="inputBoxFacturier">
          <span class="detailFacturier"
            >Dernier dipl&ocirc;me ou titre préparé</span
          >
          <select v-model="dernier_diplome">
            <optgroup label="Dipl&ocirc;me ou titre de niveau bac +5 et plus">
              <option :value="80" label="Doctorat"></option>
              <option :value="71" label="Master professionnel/DESS"></option>
              <option :value="72" label="Master recherche/DEA"></option>
              <option :value="73" label="Master indifférencié"></option>
              <option
                :value="74"
                label="Dipl&ocirc;me d'ingénieur, dipl&ocirc;me d'école de commerce"
              ></option>
              <option
                :value="79"
                label="Autre dipl&ocirc;me ou titre de niveau bac+5 ou plus"
              ></option>
            </optgroup>
            <optgroup label="Dipl&ocirc;me ou titre de niveau bac +3 et 4 ">
              <option :value="61" label="1ère année de Master"></option>
              <option :value="62" label="Licence professionnelle"></option>
              <option :value="63" label="Licence générale"></option>
              <option
                :value="69"
                label="Autre dipl&ocirc;me ou titre de niveau bac +3 ou 4"
              ></option>
            </optgroup>
            <optgroup label="Dipl&ocirc;me ou titre de niveau bac +2">
              <option
                :value="54"
                label="Brevet de Technicien Supérieur"
              ></option>
              <option
                :value="55"
                label="Dipl&ocirc;me Universitaire de technologie"
              ></option>
              <option
                :value="58"
                label="Autre dipl&ocirc;me ou titre de niveau bac+2"
              ></option>
            </optgroup>
            <optgroup label="Dipl&ocirc;me ou titre de niveau bac">
              <option :value="41" label="Baccalauréat professionnel"></option>
              <option :value="42" label="Baccalauréat général"></option>
              <option :value="43" label="Baccalauréat technologique"></option>
              <option
                :value="49"
                label="Autre dipl&ocirc;me ou titre de niveau bac"
              ></option>
            </optgroup>
            <optgroup label="Dipl&ocirc;me ou titre de niveau CAP/BEP">
              <option :value="33" label="CAP"></option>
              <option :value="34" label="BEP"></option>
              <option :value="35" label="Mention complémentaire"></option>
              <option
                :value="38"
                label="Autre dipl&ocirc;me ou titre de niveau CAP/BEP"
              ></option>
            </optgroup>
            <optgroup label="Aucun dipl&ocirc;me ni titre">
              <option
                :value="25"
                label="Dipl&ocirc;me national du Brevet"
              ></option>
              <option
                :value="26"
                label="Certificat de formation générale"
              ></option>
              <option
                :value="13"
                label="Aucun dipl&ocirc;me ni titre professionnel"
              ></option>
            </optgroup>
          </select>
        </div>
        <div class="inputBoxFacturier">
          <span class="detailFacturier"
            >Intitulé précis du derier dipl&ocirc;me ou titre préparé</span
          >
          <textarea
            type="text"
            v-model="intitule_dernier_diplome"
            placeholder="obligatoire"
            minlength="1"
            maxlength="255"
            required
          ></textarea>
        </div>
        <div class="inputBoxFacturier">
          <span class="detailFacturier">Derniere classe / année suivie</span>
          <select v-model="derniere_classe_suivie">
            <option
              :value="parseInt('01', 8)"
              label="L’apprenti a suivi la dernière année du cycle de formation et a obtenu le dipl&ocirc;me ou titre"
            ></option>
            <option
              :value="11"
              label="L’apprenti a suivi la 1ère année du cycle et l’a validée (examens réussis mais année non dipl&ocirc;mante)"
            ></option>
            <option
              :value="12"
              label="L’apprenti a suivi la 1ère année du cycle mais ne l’a pas validée (échec aux examens, interruption ou abandon de formation)"
            ></option>
            <option
              :value="21"
              label="L’apprenti a suivi la 2è année du cycle et l’a validée (examens réussis mais année non dipl&ocirc;mante)"
            ></option>
            <option
              :value="22"
              label="L’apprenti a suivi la 2è année du cycle mais ne l’a pas validée (échec aux examens, interruption ou abandon de formation)"
            ></option>
            <option
              :value="31"
              label="L’apprenti a suivi la 3è année du cycle et l’a validée (examens réussis mais année non dipl&ocirc;mante, cycle adaptés)"
            ></option>
            <option
              :value="32"
              label="L’apprenti a suivi la 3è année du cycle mais ne l’a pas validée (échec aux examens, interruption ou abandon de formation)"
            ></option>
            <option
              :value="40"
              label="L’apprenti a achevé le 1er cycle de l’enseignement secondaire (collège)"
            ></option>
            <option
              :value="41"
              label="L’apprenti a interrompu ses études en classe de 3ème"
            ></option>
            <option
              :value="42"
              label="L’apprenti a interrompu ses études en classe de 4ème"
            ></option>
          </select>
        </div>
        <div class="inputBoxFacturier">
          <span class="detailFacturier">Numéro de sécurité sociale</span>
          <input
            type="text"
            v-model="numero_de_securite_sociale"
            placeholder="obligatoire"
            minlength="13"
            maxlength="13"
            required
          />
        </div>
        <div class="inputBoxFacturier">
          <span class="detailFacturier">Clé numéro de sécurité sociale</span>
          <input
            type="text"
            v-model="cle_numero_de_securite_sociale"
            placeholder="obligatoire"
            minlength="0"
            maxlength="2"
            required
          />
        </div>
        <div
          class="inputBoxFacturier"
          style="display: flex; flex-direction: row"
        >
          <span class="detailFacturier">Travailleur handicapé</span>
          <input type="checkbox" v-model="travailleur_handicape" />
        </div>
        <div class="inputBoxFacturier">
          <div
            v-if="afficheFormulaireMineur == true"
            class="etudiantMineur"
            style="display: flex"
          >
            <div
              class="inputBoxFacturier"
              style="display: flex; flex-direction: row"
            >
              <span class="detailFacturier">Mineur émancipé</span>
              <input
                :value="afficheMineurNonEmancipe"
                @input="this.SiMineurEmancipe"
                type="checkbox"
                v-model="mineur_emancipe"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div class="detailApprentiMineur">
        <div
          v-if="
            afficheFormulaireMineur == true && afficheMineurNonEmancipe == true
          "
          class="etudiantMineur"
        >
          <!--div class="ligneHorizontaleFormulaire"></div-->

          <div class="inputBoxFacturier">
            <span class="detailFacturier">Nom du représentant légal</span>
            <input
              type="text"
              v-model="nom_du_representant_legal"
              minlength="1"
              maxlength="80"
            />
          </div>
          <div class="inputBoxFacturier">
            <span class="detailFacturier">Adresse du représentant légal</span>
            <input
              type="text"
              v-model="adresse_du_representant_legal"
              minlength="1"
              maxlength="50"
            />
          </div>
          <div class="inputBoxFacturier">
            <span class="detailFacturier"
              >Code postal du représentant légal</span
            >
            <input
              type="text"
              v-model="code_postal_du_representant_legal"
              minlength="0"
              maxlength="5"
            />
          </div>
          <div class="inputBoxFacturier">
            <span class="detailFacturier">Prénom du représentant légal</span>
            <input
              type="text"
              v-model="prenom_du_representant_legal"
              minlength="1"
              maxlength="80"
            />
          </div>
          <div class="inputBoxFacturier">
            <span class="detailFacturier"
              >Complément d'adresse du représentant légal</span
            >
            <input
              type="text"
              v-model="complement_adresse_du_representant_legal"
              minlength="0"
              maxlength="155"
            />
          </div>
          <div class="inputBoxFacturier">
            <span class="detailFacturier">Commune du représentant légal</span>
            <input
              type="text"
              v-model="commune_du_representant_legal"
              minlength="0"
              maxlength="80"
            />
          </div>
        </div>
      </div>
      <BoutonBase
        class="BoutonBaseRecherche"
        intituleBouton="effacer"
        v-on:click="this.effacerFormulaire"
      ></BoutonBase>

      <BoutonBase
        class="BoutonBaseRecherche"
        intituleBouton="ajouter"
        v-on:click="this.rentrerApprentiBDD"
      ></BoutonBase>
      <div v-if="afficheErreurs" class="erreur">
        <p>{{ messageErreur }}</p>
      </div>
    </fieldset>
  </form>
</template>

<script>
import BoutonBase from '@/components/Controler/elementsHTML/bouton/BoutonBase.vue';
import construitURLService from '@/services/construitURL.service.vue';
//import {Apprenti} from "@/components/Model/Apprenti.Class";
//import {Apprenti} from "@/components/Model/ApprentiTS.Class";
import Apprenti from '@/components/Model/ApprentiJS.Class';
import creationJSONService from '@/services/creationJSON.service.vue';
import configuration from '@/administration/configuration.vue';
import connexionAPIService from '@/services/connexionAPI.service.vue';

export default {
  name: 'FormulaireApprenti',
  components: {
    BoutonBase,
  },
  data() {
    return {
      afficheFormulaireMineur: false,
      afficheMineurNonEmancipe: true,
      afficheErreurs: true,
      messageErreur: '',
      listeGeographie: [],
      tableauRecherche: [],

      nom_de_naissance: '',
      nom_usage: '',
      prenom: '',
      dateNaissance: '',
      sexe: '',
      commune_de_naissance: '',
      departement_de_naissance: '',
      adresse: '',
      complement_adresse: '',
      code_postal: '',
      commune: '',
      nationalite: '',
      telephone: '',
      courriel: '',
      travailleur_handicape: false,
      numero_de_securite_sociale: '',
      cle_numero_de_securite_sociale: '',
      situation_apprenti: '',
      dernier_diplome: '',
      intitule_dernier_diplome: '',
      derniere_classe_suivie: '',
      mineur_emancipe: false,
      nom_du_representant_legal: '',
      adresse_du_representant_legal: '',
      code_postal_du_representant_legal: '',
      prenom_du_representant_legal: '',
      complement_adresse_du_representant_legal: '',
      commune_du_representant_legal: '',
    };
  },
  mounted() {
    this.getListeDepartements();
  },
  methods: {
    SiApprentiMineur(event) {
      console.log(event);
      //on recupere la date du jour
      const dateDuJour = Date.now();
      //On recuperer la saisie de l'agent et on soustrait 18 ans
      let dateDeNaissance = document.getElementById(
        'dateNaissanceApprenti'
      ).value;
      this.$data.dateNaissance = dateDeNaissance;
      dateDeNaissance = dateDeNaissance.split('-');
      dateDeNaissance = new Date(
        dateDeNaissance[0],
        dateDeNaissance[1] - 1,
        dateDeNaissance[2]
      );
      dateDeNaissance = dateDeNaissance.getTime();
      const dixHuitAnsEnMillisecondes = 567648000000;
      if (dateDuJour - dateDeNaissance < dixHuitAnsEnMillisecondes) {
        //On affiche la partie pour les mineurs du formulaire
        this.$data.afficheFormulaireMineur = true;
        //On passe l'information au composant parent
        this.$emit('afficheMineurNonEmancipe', event);
      } else {
        this.$data.afficheFormulaireMineur = false;
        this.$emit('afficheMajeur', event);
      }
    },
    SiMineurEmancipe(event) {
      if (this.$data.afficheMineurNonEmancipe) {
        this.$data.afficheMineurNonEmancipe = false;
        this.$emit('afficheMineurEmancipe', event);
      } else {
        this.$data.afficheMineurNonEmancipe = true;
        this.$emit('afficheMineurNonEmancipe', event);
      }
    },
    getListeDepartements() {
      if (
        document.querySelector('#departementsNaissanceListe')
          .childElementCount <= 1
      ) {
        this.$data.listeGeographie = fetch(
          'https://geo.api.gouv.fr/departements'
        )
          .then((response) => response.json())
          .then((data) =>
            data.forEach((element) => {
              let a = document.createElement('option');
              //a.setAttribute(":value", element.code);
              a.innerHTML = element.code;
              a.setAttribute('label', element.code + '-' + element.nom);
              document
                .getElementById('departementsNaissanceListe')
                .appendChild(a);
            })
          );
      }
    },
    getListeCommunesNaissance() {
      let v;
      if ((v = document.querySelector('#departementsNaissanceListe').value)) {
        d = fetch('https://geo.api.gouv.fr/departements/' + v + '/communes')
          .then((response) => response.json())
          .then((data) => data.forEach((element) => {}));
      }
    },
    rechercheCommunes() {
      return true;
    },
    async rentrerApprentiBDD(event) {
      console.log(this.$data.nom_de_naissance);
      if (true || document.querySelector('.formulaire').reportValidity()) {
        console.log('Les informations du formulaire sont valides !');
        let apprenti = new Apprenti(
          this.$data.nom_de_naissance,
          this.$data.nom_usage,
          this.$data.prenom,
          this.$data.dateNaissance,
          this.$data.sexe,
          this.$data.commune_de_naissance,
          this.$data.departement_de_naissance,
          this.$data.adresse,
          this.$data.complement_adresse,
          this.$data.code_postal,
          this.$data.commune,
          this.$data.nationalite,
          this.$data.telephone,
          this.$data.courriel,
          this.$data.travailleur_handicape,
          this.$data.numero_de_securite_sociale,
          this.$data.cle_numero_de_securite_sociale,
          this.$data.mineur_emancipe,
          this.$data.nom_du_representant_legal,
          this.$data.adresse_du_representant_legal,
          this.$data.code_postal_du_representant_legal,
          this.$data.prenom_du_representant_legal,
          this.$data.complement_adresse_du_representant_legal,
          this.$data.commune_du_representant_legal
        );
        let JSON = creationJSONService.methods.construitJSON(apprenti);
        let URL = construitURLService.methods.construitURLConnectionBack(
          configuration.data().collections.apprenti,
          configuration.data().urlPossibles.ajouter
        );
        //Reservation case mémoire de la BDD
        let reponseBDD = await connexionAPIService.methods.requete(URL, JSON);
        if (reponseBDD.code_reponse !== 0) {
          alert('erreur : ' + reponseBDD.Error_info);
        } else {
          apprenti.modifieIdentifiantApprenti(
            reponseBDD.extra_info.identifiantApprenti
          );
          JSON = creationJSONService.methods.construitJSON(apprenti);
          //Modification de la case mémoire et ajout de l'apprenti en BDD
          URL = construitURLService.methods.construitURLConnectionBack(
            configuration.data().collections.apprenti,
            configuration.data().urlPossibles.modifier
          );
          reponseBDD = await connexionAPIService.methods.requete(URL, JSON);
          if (reponseBDD.code_reponse !== 0) {
            alert('erreur : ' + reponseBDD.Error_info);
          } else {
            this.$emit('remetEtatInitial', event);
            alert('Apprenti ajouté en base de données');
          }
        }
      } else {
        console.log(
          'Les informations du formulaire sont incorrectes, pas de liaison avec la BDD !'
        );
      }
    },
    async effacerFormulaire() {
      for (let valeur of document.getElementsByClassName('detailApprenti')[0]
        .children) {
        /*console.log(valeur.lastChild.value);*/
        valeur.lastChild.value = '';
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

/*section{
      display: flex;
      padding: 10px;
    }*/

.detailApprenti {
  width: 100%;
  max-width: content-box;
  border-radius: 5px;
  padding: 10px;
  background: white;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  /*grid-template-columns: repeat(5, 1fr);
        grid-gap: 0.2rem 0.5rem;*/
  box-shadow: 0px 5px 5px -5px;
  justify-content: flex-start;
  align-items: flex-start;
}

.etudiantMineur:last-child {
  max-width: content-box;
  border-radius: 5px;
  padding: 10px;
  background: white;
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.2rem 0.5rem;
}

.detailApprentiMineur .etudiantMineur div {
  margin: auto;
}

.ligneHorizontaleFormulaire {
  margin: 1em;
  height: 3px;
  background: linear-gradient(#e66465, #9198e5);
  width: 95%;
}

.titreFormulaireFacturier {
  text-align: center;
}

.inputBoxFacturier {
  display: flex;
  flex-direction: column;
  margin-right: auto;
  width: inherit;
  flex-basis: 20%;
  margin-right: 1%;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-left: 1%;
  align-items: flex-start;
  justify-content: center;
}

select {
  width: inherit;
}

option {
  data-width: 100%;
}

.formulaire {
  width: 90%;
}
</style>
