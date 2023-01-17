<template>
  <table id="tableaufacture">
    <thead id="titreTableauFacturerNonSolde">
      <tr>
        <th>N°</th>
        <th>Apprenti</th>
        <th>Section</th>
        <th>Employeur</th>
        <th>Contrat</th>
        <th>OPCO</th>
        <th>Factures</th>
        <th>Reste à payer</th>
        <th>Etape</th>
        <th></th>
      </tr>
    </thead>
    <tbody id="filtresFacturier">
      <tr>
        <td id="premiereCaseTableauRecherche"></td>
        <td>
          <select>
            <option>Choisir un apprenti</option>
          </select>
          <BoutonBase
            class="BtnAfficheFormulaire"
            :etatBouton="etatFormulaire == 'apprenti'"
            :type="typeBtnAfficherFormulaire"
            @click="changeEtatBoutonFormulaire('apprenti')"
          ></BoutonBase>
        </td>
        <td>
          <select>
            <option>CI</option>
            <option>CDUI</option>
            <option>COM</option>
            <option>GPME</option>
            <option>MCO</option>
            <option>MMV</option>
            <option>NDRC</option>
            <option>SAM</option>
          </select>
          <BoutonBase
            class="BtnAfficheFormulaire"
            :etatBouton="etatFormulaire == 'section'"
            :type="typeBtnAfficherFormulaire"
            @click="changeEtatBoutonFormulaire('section')"
          ></BoutonBase>
        </td>
        <td>
          <select>
            <option>Test employeur</option>
          </select>
          <BoutonBase
            class="BtnAfficheFormulaire"
            :etatBouton="etatFormulaire == 'employeur'"
            :type="typeBtnAfficherFormulaire"
            @click="changeEtatBoutonFormulaire('employeur')"
          ></BoutonBase>
          <!--bouton-base @click="formMaitre = true" class="BoutonBaseRecherche" id="BoutonBaseRechercheMaitre" :intituleBouton="this.$data.nomBoutonMaitre" v-on:click="this.ajouterUnMaitre"></bouton-base-->
        </td>
        <td></td>
        <td>
          <select>
            <option>Choisir</option>
          </select>
          <BoutonBase
            class="BtnAfficheFormulaire"
            :etatBouton="etatFormulaire == 'opco'"
            :type="typeBtnAfficherFormulaire"
            @click="changeEtatBoutonFormulaire('opco')"
          ></BoutonBase>
        </td>
        <td></td>
        <td></td>
        <td>
          <select>
            <option>en cours</option>
          </select>
        </td>
        <td></td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td colspan="10">
          <form class="formulaire formulaireAjoutFacturier">
            <FormulaireOpco
              v-if="etatFormulaire == 'opco'"
              v-on:remetEtatInitial="this.remetEtatInitial"
              id="formOpco"
              @insertion-bdd="insereObjetDansBdd"
            >
            </FormulaireOpco>
            <FormulaireApprenti
              v-if="etatFormulaire == 'apprenti'"
              v-on:remetEtatInitial="this.remetEtatInitial"
              id="formApprenti"
            >
            </FormulaireApprenti>
          </form>

          <div class="boutonCreationDossier">
            <span class="iconeAjout"
              ><font-awesome-icon icon="fa-person-circle-plus"
            /></span>
            <span>Creer un nouveau dossier</span>
          </div>
          <div id="lignesDuFacturier">
            <element-contrat-tableau-facturier></element-contrat-tableau-facturier>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import BoutonBase from '@/components/Controler/elementsHTML/bouton/BoutonBase.vue';
import elementContratTableauFacturier from '@/components/Controler/backOffice/elementContratTableauFacturier.vue';
import FormulaireApprenti from '@/components/Controler/backOffice/FormulaireApprenti.vue';
import FormulaireOpco from '@/components/Controler/backOffice/FormulaireOpco.vue';
import formulaireEmployeur from '@/components/Controler/backOffice/formulaireEmployeur.vue';
import formulaireMaitre from '@/components/Controler/backOffice/formulaireMaitre.vue';
//import formulaireContrat from "@/components/Controler/backOffice/formulaireContrat.vue";
import construitURLService from '@/services/construitURL.service.vue';
import configuration from '@/administration/configuration.vue';

export default {
  name: 'tableauFactureNonSoldees',
  components: {
    BoutonBase,
    FormulaireOpco,
    FormulaireApprenti,
    elementContratTableauFacturier,
  },
  data() {
    return {
      typeBtnAfficherFormulaire: 'ouvrirformulaire',
      etatFormulaire: '',
    };
  },
  methods: {
    changeEtatBoutonFormulaire(etat) {
      if (this.etatFormulaire == etat) {
        this.etatFormulaire = '';
      } else {
        this.etatFormulaire = etat;
      }
    },
    resetFormulaire(NomFormulaire) {
      let formulaire = document.getElementById('lesFormulairesAjoutFacturier');
      let barreRechercheFacturier = document.getElementById('filtresFacturier');
      formulaire.classList.add('fermetureFormulaireFacturier');
      barreRechercheFacturier.style.height = '4rem';
      this.$data['nomBouton' + NomFormulaire] = 'ajouter';
      this['form' + nomFormulaire] = false;
    },
    apprentiMineurEmancipe() {
      let barreRechercheFacturier = document.getElementById('filtresFacturier');
      barreRechercheFacturier.style.height = '28rem';
    },
    apprentiMineurNonEmancipe() {
      let barreRechercheFacturier = document.getElementById('filtresFacturier');
      barreRechercheFacturier.style.height = '35rem';
    },
    apprentiMajeur() {
      let barreRechercheFacturier = document.getElementById('filtresFacturier');
      barreRechercheFacturier.style.height = '26rem';
    },
    ajouterUneSection() {
      console.log('ajoute une section');
    },
    remetEtatInitial() {
      console.log('remet en place');
      this.resetFormulaireApprenti();
    },
    async insereObjetDansBdd(nomCollection, json) {
      let URL = construitURLService.methods.construitURLConnectionBack(
        nomCollection,
        configuration.data().urlPossibles.ajouter
      );
      let reponseBDD = await connexionAPIService.methods.requete(URL, json);
      if (reponseBDD.code_reponse !== 0) {
        alert('erreur : ' + reponseBDD.Error_info);
      } else {
        let objet = JSON.parse(json);
        objet._id = reponseBDD.extra_info.identifiantOpco;
        this.$emit('insertionObjetOk', nomCollection, JSON.stringify(objet));
        console.log(
          'Objet ajouté en base de données, collection : ' +
            nomCollection +
            ', _id:' +
            objet._id
        );
      }
    },
    async effacerFormulaire() {
      for (let valeur of document.getElementsByClassName('detailOpco')[0]
        .children) {
        valeur.lastChild.value = '';
      }
    },
  },
};
</script>

<style scoped>
#titreTableauFacturerNonSolde {
  display: flex;
  background: var(--mauve-clair);
  height: 28px;
  box-shadow: 0px 5px 5px -3px;
}

.titreTableau h4 {
  font-weight: 300;
  font-size: 1rem;
  color: white;
  text-align: center;
}

#numeroTitreFacturier {
  width: 3%;
  min-width: 30px;
  background: var(--color-dark);
  margin-right: 1px;
  border-radius: 0 0 6px 0;
}

#titreTableauFacturerNonSolde :nth-child(2) {
  background: var(--color-dark);
  width: 18%;
  min-width: 150px;
  margin-right: 1px;
  border-radius: 6px 0 6px 0;
}

#titreTableauFacturerNonSolde :nth-child(3) {
  width: 5%;
  min-width: 60px;
  background: var(--color-dark);
  margin-right: 1px;
  border-radius: 6px 0 6px 0;
}
#titreTableauFacturerNonSolde :nth-child(4) {
  width: 18%;
  min-width: 100px;
  background: var(--color-dark);
  margin-right: 1px;
  border-radius: 6px 0 6px 0;
}

#titreTableauFacturerNonSolde :nth-child(5) {
  width: 6%;
  min-width: 60px;
  background: var(--color-dark);
  margin-right: 1px;
  border-radius: 6px 0 6px 0;
}

#titreTableauFacturerNonSolde :nth-child(6) {
  width: 8%;
  min-width: 70px;
  background: var(--color-dark);
  margin-right: 1px;
  border-radius: 6px 0 6px 0;
}

#titreTableauFacturerNonSolde :nth-child(7) {
  width: 8%;
  min-width: 70px;
  background: var(--color-dark);
  margin-right: 1px;
  border-radius: 6px 0 6px 0;
}

#titreTableauFacturerNonSolde :nth-child(8) {
  width: 8%;
  min-width: 98px;
  background: var(--color-dark);
  margin-right: 1px;
  border-radius: 6px 0 6px 0;
}

#titreTableauFacturerNonSolde :nth-child(9) {
  width: 25%;
  min-width: 150px;
  background: var(--color-dark);
  border-radius: 6px 0 0 0;
}

#titreTableauDerniereCase {
  width: 15%;
  min-width: 130px;
  background: var(--color-dark);
  background: var(--color-dark);
  height: 28px;
}

/* Valeur height a changer dynamiquement pour englober les formulaires*/
#filtresFacturier {
  display: flex;
  background: var(--mauve-clair);
  height: 4rem;
  box-shadow: 0px 5px 5px -4px;
  transition-property: height;
  transition-duration: 1s;
}

#premiereCaseTableauRecherche {
  width: 3%;
  min-width: 30px;
}

#filtresFacturier :nth-child(2) {
  padding: 0px;
  width: 18%;
  min-width: 150px;
  margin-right: 1px;
}

#filtresFacturier :nth-child(3) {
  width: 5%;
  min-width: 60px;
  margin-right: 1px;
}

#filtresFacturier :nth-child(4) {
  width: 18%;
  min-width: 100px;
  margin-right: 1px;
}

#filtresFacturier :nth-child(5) {
  width: 6%;
  min-width: 60px;
  margin-right: 1px;
}

#filtresFacturier :nth-child(6) {
  width: 8%;
  min-width: 70px;
  margin-right: 1px;
}

#filtresFacturier :nth-child(7) {
  width: 8%;
  min-width: 70px;
  margin-right: 1px;
}

#filtresFacturier :nth-child(8) {
  width: 8%;
  min-width: 98px;
  margin-right: 1px;
}

#filtresFacturier :nth-child(9) {
  width: 25%;
  min-width: 150px;
}

#filtresFacturier :nth-child(10) {
  width: 15%;
  min-width: 130px;
}

.enteteRecherche {
  height: 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

select {
  width: 100%;
}

#lesFormulairesAjoutFacturier {
  display: none;
  position: absolute;
  top: 9.5rem;
  margin-top: 4em;
  width: 100%;
  height: 13rem;
  animation: fadein 3s;
}

.OuvertureFormulaireFacturier {
  -webkit-transition: 2s;
  -moz-transition: 2s;
  -ms-transition: 2s;
  -o-transition: 2s;
  transition: 2s;
  margin-left: 0%;
  opacity: 1;
}

.fermetureFormulaireFacturier {
  -webkit-transition: 2s;
  -moz-transition: 2s;
  -ms-transition: 2s;
  -o-transition: 2s;
  transition: 2s;
  margin-left: 100%;
  opacity: 0;
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.boutonCreationDossier {
  margin: 0.5rem 3rem 0.5rem 3rem;
  padding: 0.3rem;
  text-align: center;
  border-style: dashed;
  color: #ffaece;
  border-color: #ffaece;
  text-transform: capitalize;
  border-radius: 10px;
  transition-duration: 1s;
}

.iconeAjout {
  font-size: 120%;
}

.boutonCreationDossier span {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.boutonCreationDossier:hover {
  font-size: 120%;
}

#lignesDuFacturier {
  /*
  La seule barre de defilement du facturier
   */
  background: var(--mauve-clair);
  flex-grow: 3;
  margin: 0rem 0.5rem 0.5rem 0.3rem;
  margin-bottom: 2.4rem;
  border-radius: 7px;
  box-shadow: 0px 5px 5px -3px;
}

.detailApprenti select {
  width: 50%;
}
</style>
