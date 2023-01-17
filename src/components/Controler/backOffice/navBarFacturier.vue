<template>
  <section class="sidebar">
    <div class="side-header">
      <div class="logo-entreprise">
        <img :src="this.logoEntreprise" crossOrigin="Anonymous" alt="entreprise" >
      </div>
    </div>
    <div class="side-content">
      <div class="profil">
        <div class="photoProfil">
          <img :src="this.utilisateur.photoProfil" >
        </div>
        <h4>{{this.utilisateur.nomUtilisateur}}</h4>
      </div>
    </div>
    <div class="side-menu">
      <ul>
        <li>
          <router-link class="lienNavBar" to="/facturierUI">
            <div class="elementLienNav">
              <div class="logoNavBar">
                <font-awesome-icon icon="fa-file-invoice"/>
              </div>
              <span>
                <small>Factures non soldées</small>
              </span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link class="lienNavBar" to="/facturierUI">
            <div class="elementLienNav">
              <div class="logoNavBar">
                <font-awesome-icon icon="fa-file-invoice"/>
              </div>
              <span>
                <small>Factures soldées</small>
              </span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link class="lienNavBar" to="/facturierUI">
            <div class="elementLienNav">
              <div class="logoNavBar">
                <font-awesome-icon icon="fa-file-invoice"/>
              </div>
              <span>
                <small>Toutes les factures</small>
              </span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link class="lienNavBar" to="/facturierUI">
            <div class="elementLienNav">
              <div class="logoNavBar">
                <font-awesome-icon icon="fa-file-invoice"/>
              </div>
              <span>
                <small>Creer facture</small>
              </span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link class="lienNavBar" to="/transmettreDossier">
            <div class="elementLienNav">
              <div class="logoNavBar">
                <font-awesome-icon icon="fa-file-invoice"/>
              </div>
              <span>
                <small>Transmettre un dossier</small>
              </span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link class="lienNavBar" to="/facturierUI">
            <div class="elementLienNav">
              <div class="logoNavBar">
                <font-awesome-icon icon="fa-file-invoice"/>
              </div>
              <span>
                <small>Créer un formulaire
                  <!--bouton-base @click="formApprenti = true" class="BoutonBaseRecherche" id="BoutonBaseRechercheApprenti" :intituleBouton="this.$data.nomBoutonApprenti" v-on:click="this.ajouterUnApprenti" style="position: relative;left: 200px;">Maitre</bouton-base-->
                </small>
                <!-- pour créer un formulaire spécifique : Maitre, Contrat, Formation, Attestation-->
              </span>
            </div>
            <ul style="display: none">
                <li>
                  <div class="elementLienNav">
                    <div class="logoNavBar">
                      <font-awesome-icon icon="fa-file-invoice"/>
                    </div>
                    <span>
                      <small>Entreprise</small>
                      <!-- pour créer un formulaire spécifique : Maitre, Contrat, Formation, Attestation-->
                    </span>
                  </div>
              </li>
            </ul>
          </router-link>
        </li>
        <li>
          <router-link class="lienNavBar" to="/modifierProfil">
            <div class="elementLienNav">
              <div class="logoNavBar">
                <font-awesome-icon icon="fa-file-invoice"/>
              </div>
              <span>
                <small>Parametres</small>
              </span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link class="lienNavBar" to="/">
            <div class="elementLienNav" id="elementDeconnexion">
              <div class="logoNavBar">
                <font-awesome-icon icon="fa-file-invoice"/>
              </div>
              <span>
                <small >Deconnexion</small>
              </span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
//import logoEntreprise from '#/logo0_small.png'
import App from "@/App.vue"
export default {
  name: "navBarFacturier",
  data(){
    return{
      logoEntreprise:App.data().pab + '/logo0_small.png'
    }
  },
  props:{
    utilisateur: Object
  }
}
</script>

<style scoped>
section.sidebar{
  position: fixed;
  height: 100%;
  width: 165px;
  left: 0;
  bottom: 0;
  top: 0;
  z-index: 100;
  background: var(--color-dark);
}

div.side-header{
  background: white;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-entreprise img{
  height: 90px;
  width: 90px;
}

.profil img{
  height: 90px;
  width: 90px;
  border-radius: 50%;

}

div.profil{
  text-align: center;
  padding: 1rem 0rem;
}

div.photoProfil{
  height: 90px;
  width:90px;
  display: inline-block;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
}

div.profil h4{
  color: white;
  font-weight: 300;
}

div.side-menu li{
  position: relative;
  left: -15px;
  display: block;
}

.logoNavBar{
  display: block;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: -0.4em;
}

div.side-menu span{
  display: block;
  text-align: center;
  font-size: 1rem ;
}

.elementLienNav{
  margin-bottom: 1.2em;
border: solid white 1px;
}

.lienNavBar{
  text-decoration: none;
  color: white;
}

.elementLienNav:hover {
    text-decoration: none;
    color: var(--rose-pastel);
    box-shadow:0px 0px 3px 1px white;
}
#elementDeconnexion{
    border: solid red 2px;
}
#elementDeconnexion:hover{
    box-shadow:0px 0px 3px 1px red;
}

.elementLienNav{
        /*border: solid white 1px;*/
        border-radius: 6px 0 6px 0;
        background-color : #3d5276;
    }

@media screen and (max-height: 790px) {
    .logoNavBar svg{
        display: none;
    }
    .elementLienNav small{
        font-size: 1.1em;
    }

    .elementLienNav{
        border: solid white 1px;
        border-radius: 6px 0 6px 0;
        padding: 2% 3%;
        background-color : #3d5276;
    }
    .logoNavBar{
        margin-bottom: 0em;
    }

    #elementDeconnexion{
        border: solid red 2px;
    }
        
}
</style>