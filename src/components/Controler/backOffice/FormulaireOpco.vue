<template>
  <legend class="titreFormulaireFacturier">
    <h5>
      Formulaire Opco
      <span class="boutonAide" @click="afficheaide = !afficheaide">(Aide)</span>
    </h5>
  </legend>
  <div v-if="afficheaide">
    Remplir les informations sur l'Opco puis les identifiants pour les
    accrochages en recette et en production.
  </div>
  <fieldset>
    <div class="detailOpco">
      <div>
        <div id="opcoInfos">
          <span class="detailFacturier">Informations</span>
          <div class="inputBoxFacturier">
            <span class="detailFacturier">Nom</span>
            <input
              id="inputNomOpco"
              type="text"
              v-model="nom_opco"
              placeholder="obligatoire"
              required
            />
          </div>
          ....
        </div>
        <div id="opcoAccrochages">
          <span class="detailFacturier">Accrochages</span>
          <div class="opcoAccrochage">
            <span class="detailFacturier">Accrochage Recette</span>
            <div class="inputBoxFacturier">
              <span class="detailFacturier">Clé API Recette</span>
              <input
                class="key"
                type="text"
                v-model="apikey_recete"
                placeholder="obligatoire"
                required
              />
            </div>
            <div class="inputBoxFacturier">
              <span class="detailFacturier">Client id recette</span>
              <input
                class="key"
                type="text"
                v-model="clientid_recete"
                placeholder="obligatoire"
                required
              />
            </div>
            <div class="inputBoxFacturier">
              <span class="detailFacturier">Client secret recette</span>
              <input
                class="key"
                type="text"
                v-model="clientsecret_recete"
                placeholder="obligatoire"
                required
              />
            </div>
            <div class="inputBoxFacturier">
              <span class="detailFacturier">Token Url recette</span>
              <input
                class="url"
                type="text"
                v-model="tokenurl_recete"
                placeholder="obligatoire"
                required
              />
            </div>
            <div class="inputBoxFacturier">
              <span class="detailFacturier">Api Url recette</span>
              <input
                class="url"
                type="text"
                v-model="apiurl_recete"
                placeholder="obligatoire"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <BoutonBase
        class="BoutonBaseRecherche"
        intituleBouton="effacer"
        @click="this.effacerFormulaire"
      ></BoutonBase>
      <BoutonInsertionBdd
        nomCollection="opco"
        @insertion-bdd="fabriqueObjet"
      ></BoutonInsertionBdd>
    </div>
  </fieldset>
</template>

<script>
import BoutonBase from '@/components/Controler/elementsHTML/bouton/BoutonBase.vue';
import BoutonInsertionBdd from '@/components/Controler/elementsHTML/bouton/BoutonInsertionBdd.vue';

import creationJSONService from '@/services/creationJSON.service.vue';
import configuration from '@/administration/configuration.vue';
import connexionAPIService from '@/services/connexionAPI.service.vue';

export default {
  name: 'FormulaireOpco',
  components: {
    BoutonBase,
    BoutonInsertionBdd,
  },

  data() {
    return {
      afficheaide: false,
      nom_opco: '',
      apikey_recete: '',
      cliendid_recete: '',
      clientsecret_recete: '',
      tokenurl_recete: '',
      apiurl_recete: '',
      objet: Object,
    };
  },
  emits: {
    objet() {},
  },
  methods: {
    fabriqueObjet(param) {
      let objet = {
        nom: this.nom_opco,
        accrochages: [
          {
            prod: false,
            apikey: this.apikey_recete,
            cliendid: this.cliendid_recete,
            clientsecret: this.clientsecret_recete,
            tokenurl: this.tokenurl_recete,
            apiurl: this.apiurl_recete,
          },
        ],
      };
      this.$emit('insertionBdd', param, JSON.stringify(objet));
    },
  },
};
</script>
<style>
.boutonAide {
  font-size: 0.8em;
}
.boutonAide:hover {
  cursor: pointer;
}
</style>
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

.detailMaitre {
  width: 90%;
  max-width: content-box;
  border-radius: 5px;
  padding: 10px;
  background: white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.2rem 0.5rem;
  box-shadow: 0px 5px 5px -5px;
}

.detailMaitreMineur {
  width: 90%;
  max-width: content-box;
  border-radius: 5px;
  padding: 10px;
  background: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.2rem 0.5rem;
  box-shadow: 0px 5px 5px -5px;
}

.etudiantMineur {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.detailMaitreMineur .etudiantMineur div {
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
}

/*.detailMaitre div:last-child{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}*/
</style>

/* Suggestions : -prévoir d'utiliser une API pour rentrer des données
géographiques -prévoir d'utiliser une API pour rentrer des données d'entreprise
-faire une validation des données afin de vérifier quelles sont bien dans le bon
format */
