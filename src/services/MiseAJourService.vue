<template>
  <div id="etatmiseajour">
    <span class="etat_0" v-if="etat == 0">En cours</span>
    <span class="etat_1" v-if="etat == 1"
      >Mise à jour effectuée {{ progression }}</span
    >
    <span class="etat_2" v-if="etat == 2">Echec de la mise à jour</span>
  </div>
</template>

<script>
import construitURLService from '@/services/construitURL.service.vue';
import configuration from '@/administration/configuration.vue';
import connexionAPIService from '@/services/connexionAPI.service.vue';
import LocalBddService from '@/services/LocalBddService.vue';

export default {
  name: 'MiseAJourService',
  props: {},
  data() {
    return {
      etat: 0,
      collections: [],
      nbTotalCollections: 0,
      progression: '',
      infosDistantes: '',
      //derniereMAJ:0
    };
  },
  mounted: function () {
    this.$nextTick(function () {
      this.collections = Object.values(configuration.data().collections);
      this.nbTotalCollections = this.collections.length;
      //TODO : cote back
      //if(this.derniereMAJ > Date.now() - ...  )
      //this.derniereMAJ = Date.now();
      this.miseAJour();
    });
  },
  methods: {
    async miseAJour() {
      let nomCollection = this.collections.shift();
      if (nomCollection) {
        await this.miseAJourCollection(nomCollection);
        this.miseAJour();
      } else {
        this.etat = 1;
      }
    },
    getMessageFromDistInfo(dist) {
      var aInfog = [];
      if (dist && dist.extra_info) {
        for (var nomOpco in dist.extra_info) {
          let info = dist.extra_info[nomOpco],
            ainfo = [];
          if (info.nbinsertions != 0) {
            ainfo.push(info.nbinsertions + 'i');
          }
          if (info.nbmodifications) {
            ainfo.push(info.nbmodifications + 'm');
          }
          if (ainfo.length) {
            aInfog.push(
              nomOpco + '.' + info.collection + '(' + ainfo.join(',') + ')'
            );
          }
        }
      }
      return aInfog.length ? '-Distant:' + aInfog.join(' / ') : '';
    },
    async miseAJourCollection(nomCollection) {
      let URL = construitURLService.methods.construitURLConnectionBack(
        nomCollection,
        configuration.data().urlPossibles.obtenir
      );
      let reponseBDD = await connexionAPIService.methods.requete(URL, {});
      if (reponseBDD.code_reponse !== 0) {
        alert('erreur get ' + nomCollection + ' : ' + reponseBDD.Error_info);
      } else {
        let liste = reponseBDD.extra_info;
        LocalBddService.methods.miseAJour(nomCollection, liste);
        this.$emit('ongetliste', nomCollection, liste);
        let msgdist = this.getMessageFromDistInfo(reponseBDD.dist_info);

        this.progression =
          this.nbTotalCollections -
          this.collections.length +
          '/' +
          this.nbTotalCollections +
          msgdist;
      }
    },
    getInfosDistantes(infos) {
      this.infosDistantes = infos;
    },
  },
};
</script>
<style scoped>
.etat_0 {
  background: orangered;
}
.etat_1 {
  background: yellowgreen;
}
.etat_2 {
  background: red;
}
</style>
