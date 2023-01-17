<template>
  <nav-bar-facturier v-bind:utilisateur="utilisateur" ></nav-bar-facturier>
  <section class="affichagePrincipal">
    <header>
      <bandeau-haut-facturier></bandeau-haut-facturier>
    </header>
    <main>
      <corps-facturier v-bind:montantWidget="widget"></corps-facturier>

    </main>
  </section>
</template>

<script>
import photoProfilDefaut from "@/assets/vue.svg";
import NavBarFacturier from "@/components/Controler/backOffice/navBarFacturier.vue";
import bandeauHautFacturier from "@/components/Controler/backOffice/bandeauHautFacturier.vue";
import corpsFacturier from "@/components/Controler/backOffice/corpsFacturier.vue";

export default {
  name: "facturierPlusModerne",
  components: {
    NavBarFacturier,
    bandeauHautFacturier,
    corpsFacturier
  },
  data(){
    return{
      utilisateur:{
        photoProfil:'',
        nomUtilisateur:''
      },
      widget:{
        //A creer les données quand on aura les data de la BDD
        total:{
          intitule:'total',
          montant:700,
          montantTotal:25000
        },
        nMoins1:{
          intitule:'2021-2022',
          montant:250,
          //montantTotal:this.data().widget.total.montant
          montantTotal:700
        },
        n:{
          intitule:'2022-2023',
          montant:450,
          //montantTotal:this.data().widget.total.montant
          montantTotal:700
        }
      }
    }
  },
  beforeMount(){
    if(localStorage.getItem("avatar")===""){
      this.utilisateur.photoProfil=photoProfilDefaut;
    }else{
      this.utilisateur.photoProfil=localStorage.getItem("avatar");
    }

    if (localStorage.getItem("nom")!=="" && localStorage.getItem("prenom") !==""){
      this.utilisateur.nomUtilisateur=localStorage.getItem("prenom")+" "+localStorage.getItem("nom");
    }else{
      this.utilisateur.nomUtilisateur=localStorage.getItem("mail");
    }
  }
}
</script>

<style scoped>

main{
  margin-left: 165px;
  width: calc(100%- 165px);
  margin-top: 2em;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.affichagePrincipal{
  /*
  Ici se trouve la gestion de l'affichage de la fenetre principale à droite du facturier
   */
  height: 100vh;
  position: fixed;
  width: 100%;
}



</style>