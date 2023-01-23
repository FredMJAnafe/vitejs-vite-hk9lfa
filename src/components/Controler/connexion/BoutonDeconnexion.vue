<template>
  <div class="deconnexion lienDeconnexion" @click="deconnexion()">
    <font-awesome-icon icon="fa-power-off" />
    <span class="texteDeconnexion">Deconnexion</span>
  </div>
</template>

<script>
import connexionAPIService from '@/services/connexionAPI.service.vue';
import construitURLService from '@/services/construitURL.service.vue';
import configuration from '@/administration/configuration.vue';

export default {
  name: 'BoutonDeconnexion',
  methods: {
    async deconnexion() {
      let mail = localStorage.getItem('mail');
      const URL = construitURLService.methods.construitURLConnectionBack(
        '',
        configuration.data().urlPossibles.deconnexion
      );
      console.log(URL);
      const json = '{"mail":' + '"' + mail + '"}';

      let reponse = await connexionAPIService.methods.requete(URL, json);
      console.log(reponse.code_reponse);
      if (reponse.code_reponse !== 0) {
        //Il faut renvoyer la reponse erreur au composant parent
        console.log('erreur');
      } else {
        //Connexion etablie
        localStorage.setItem('nom', '');
        localStorage.setItem('prenom', '');
        localStorage.setItem('avatar', '');
        localStorage.setItem('mail', '');
        await this.$router.push({ name: 'connexion' });
      }
    },
  },
};
</script>

<style scoped>
.deconnexion {
  margin-right: 1em;
  margin-top: 5px;
}

.lienDeconnexion {
  text-decoration: none;
  color: var(--color-dark);
}

.lienDeconnexion:hover {
  text-decoration: none;
  color: red;
  cursor: pointer;
}

.texteDeconnexion {
  margin-left: 0.5em;
}
</style>
