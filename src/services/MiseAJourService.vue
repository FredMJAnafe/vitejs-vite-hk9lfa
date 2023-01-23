<template>
  <div id="etatmiseajour">
    <span v-if="etat == 0">En cours</span>
    <span v-if="etat == 1">Mise à jour effectuée {{ progression }}</span>
    <span v-if="etat == 2">Echec de la mise à jour</span>
  </div>
</template>

<script>

import construitURLService from '@/services/construitURL.service.vue';
import configuration from '@/administration/configuration.vue';
import connexionAPIService from '@/services/connexionAPI.service.vue';
import LocalBddService from '@/services/LocalBddService.vue';

export default {
  name: 'MiseAJourService',
  props: {
  },
  data() {
    return {
      etat:0,
      collections:[],
      nbTotalCollections:0,
      progression:''
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.collections = configuration.data().collections.splice();
      this.nbTotalCollections = configuration.data().collections.length;

      this.miseAJour();
    })
  },
  methods: {
    async miseAJour() {
      let nomCollection = this.collections.shift();
      if(nomCollection) {
        await miseAJourCollection(nomCollection);
        this.miseAJour();
      }
      else {
        this.etat = 2;
      }
    },
    async miseAJourCollection(nomCollection) {
      let URL = construitURLService.methods.construitURLConnectionBack(
        nomCollection,
        configuration.data().urlPossibles.obtenir
      );
      let reponseBDD = await connexionAPIService.methods.requete(URL, "{}");
      if (reponseBDD.code_reponse !== 0) {
        alert('erreur get ' + nomCollection + ' : ' + reponseBDD.Error_info);
      } else {
        let liste = reponseBDD.extra_info;
        LocalBddService.update(nomCollection,liste);
        this.$emit('ongetliste', nomCollection, liste);
        this.progression = (this.nbTotalCollections - this.collections.length) + '/' + this.nbTotalCollections;
      }
    }
  }
};
</script>
