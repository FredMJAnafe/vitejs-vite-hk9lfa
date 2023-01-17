<template>
  <header class="titreFormulaireFacturier">
    <h5>Formulaire Maitre</h5>
    <a target="_blank" href="https://www.formulaires.service-public.fr/gf/getNotice.do?cerfaNotice=51649&cerfaFormulaire=10103" style="font-weight: bold;">Aide pour remplir le formulaire</a>
  </header>
  <section>
    <div class="detailMaitre">
      <div>
        <div id="maitreUn">
          <span class="detailFacturier">Maitre 1</span>
          <div class="inputBoxFacturier">
            <span class="detailFacturier">Nom</span>
            <input id="inputNomUn" type="text" v-model="nom_un" placeholder="obligatoire" required>
          </div>
          <div class="inputBoxFacturier">
            <span class="detailFacturier">Prénom</span>
            <input id="inputPrenomUn" type="text" v-model="prenom_un" placeholder="obligatoire" required>
          </div>
          <div class="inputBoxFacturier">
            <span class="detailFacturier">Date de naissance</span>
            <input id="dateNaissanceMaitre" type="date" :value="dateNaissance_un" @input="this.SiMaitreMineur" required>
          </div>
          <div class="inputBoxFacturier">
            <span class="detailFacturier">Nom</span>
            <input id="inputSiret" type="text" v-model="nom_un" placeholder="obligatoire" required>
          </div>
        </div>
        <div id="maitreDeux">   
          <span class="detailFacturier">Maitre 2</span>
          <div class="inputBoxFacturier">
            <span class="detailFacturier">Nom</span>
            <input id="inputEffectif" type="text" v-model="nom_deux" placeholder="obligatoire" required>
          </div>
          <div class="inputBoxFacturier">
            <span class="detailFacturier">Prénom</span>
            <input id="inputPrenomUn" type="text" v-model="prenom_deux" placeholder="obligatoire" required>
          </div>
          <div class="inputBoxFacturier">
            <span class="detailFacturier">Date de naissance</span>
            <input id="dateNaissanceMaitre" type="date" :value="dateNaissance_deux" @input="this.SiMaitreMineur" required>
          </div>
        </div>
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Attestation sur l'honneur que les critères d'éligibilité à la fonction de maître d'maitressage sont respectés</span>
        <input type="checkbox" v-model="attestation" required>
      </div>
      <bouton-base class="BoutonBaseRecherche" intituleBouton="effacer" v-on:click="this.effacerFormulaire"></bouton-base>
      <bouton-base class="BoutonBaseRecherche" intituleBouton="ajouter" v-on:click="this.rentrerMaitreBDD"></bouton-base> 
    </div>
  </section>

</template>

<script>
  import BoutonBase from "@/components/Controler/elementsHTML/bouton/BoutonBase.vue";
import construitURLService from "@/services/construitURL.service.vue";
//import {Maitre} from "@/components/Model/Maitre.Class";
//import {Maitre} from "@/components/Model/MaitreTS.Class";
import Maitre from "@/components/Model/MaitreJS.Class";
import creationJSONService from "@/services/creationJSON.service.vue";
import configuration from "@/administration/configuration.vue";
import connexionAPIService from "@/services/connexionAPI.service.vue";

  export default {
    name: "formulaireMaitre",
    components: {
      BoutonBase
    },

    data(){
      return {
        attestation_un:false,
        attestation_deux:false,
        nom_un:"",
        nom_deux:"",
        prenom_un:"",
        prenom_deux:"",
        dateNaissance_un:"",
        dateNaissance_deux:""
      }
    },
    methods:{
      SiMaitrePublic(event) {
        if (this.$data.afficheMaitrePublic) {
          this.$data.afficheMaitrePublic = false;
              //this.$emit('afficheMineurEmancipe', event);
        } else {
          this.$data.afficheMaitrePublic = true;
          this.$emit('afficheMaitrePublic', event);
        }
      },
      validationSiret(){
        let regex = /^[0-9]{14}$/;
        let argument = document.getElementById("inputSiret").value;
        if( regex.test(argument) ){
          console.log("siret validé");
        }
        else{
          console.log("Le format du siret n'est pas bon");
        }
      },
      validationEffectif(){
        let argument = document.getElementById("inputEffectif");
        if( argument.value >=0 ){
          console.log("Effectif validé");
        }
        else{
          console.log("Le format de l'effectif n'est pas bon");
          
        }
      },
      async rentrerMaitresBDD(event){
        console.log(this.$data.nom_de_naissance);

        let maitreUn= new Maitre(
          this.$data.nom_un,
          this.$data.prenom_un,
          this.$data.dateNaissance_un,
          this.$data.attestation_un
          );
        let maitreDeux= new Maitre(
          this.$data.nom_deux,
          this.$data.prenom_deux,
          this.$data.dateNaissance_deux,
          this.$data.attestation_deux
          );

        let JSON= creationJSONService.methods.construitJSON(maitreUn);
        let URL = construitURLService.methods.construitURLConnectionBack(configuration.data().collections.maitreUn, configuration.data().urlPossibles.ajouter);
       //Reservation case mémoire de la BDD
        let reponseBDD= await connexionAPIService.methods.requete(URL, JSON);
        if(reponseBDD.code_reponse !==0){
          alert("erreur : "+reponseBDD.Error_info);
        }else{
          maitreUn.modifieIdentifiantMaitre(reponseBDD.extra_info.identifiantMaitre);
          JSON= creationJSONService.methods.construitJSON(maitreUn);
          //Modification de la case mémoire et ajout de l'maitreUn en BDD
          URL= construitURLService.methods.construitURLConnectionBack(configuration.data().collections.maitreUn, configuration.data().urlPossibles.modifier);
          reponseBDD= await connexionAPIService.methods.requete(URL, JSON);
          if(reponseBDD.code_reponse !==0){
            alert("erreur : "+reponseBDD.Error_info);
          }else{
            this.$emit('remetEtatInitial', event);
            alert("Maitre ajouté en base de données");
          }
        }





        let JSON2= creationJSONService.methods.construitJSON(maitreDeux);
        let URL2 = construitURLService.methods.construitURLConnectionBack(configuration.data().collections.maitreDeux, configuration.data().urlPossibles.ajouter);
       //Reservation case mémoire de la BDD
        let reponseBDD2= await connexionAPIService.methods.requete(URL2, JSON2);
        if(reponseBDD2.code_reponse !==0){
          alert("erreur : "+reponseBDD2.Error_info);
        }else{
          maitreDeux.modifieIdentifiantMaitre(reponseBDD2.extra_info.identifiantMaitre);
          JSON2= creationJSONService.methods.construitJSON(maitreDeux);
          //Modification de la case mémoire et ajout de l'maitreDeux en BDD
          URL2= construitURLService.methods.construitURLConnectionBack(configuration.data().collections.maitreDeux, configuration.data().urlPossibles.modifier);
          reponseBDD2= await connexionAPIService.methods.requete(URL2, JSON2);
          if(reponseBDD2.code_reponse !==0){
            alert("erreur : "+reponseBDD2.Error_info);
          }else{
            this.$emit('remetEtatInitial', event);
            alert("Maitre ajouté en base de données");
          }
        }
      },
      async effacerFormulaire(){
        for(let valeur of document.getElementsByClassName("detailMaitre")[0].children){
            /*console.log(valeur.lastChild.value);*/
          valeur.lastChild.value = "";
        }
      }
    }
  }

</script>

<style scoped>

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

/*section{
  display: flex;
  padding: 10px;
}*/

.detailMaitre{
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

.detailMaitreMineur{
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

.etudiantMineur{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.detailMaitreMineur .etudiantMineur div{
  margin:auto;
}

.ligneHorizontaleFormulaire{
  margin: 1em;
  height: 3px;
  background: linear-gradient(#e66465, #9198e5);
  width: 95%;
}

.titreFormulaireFacturier{
  text-align: center;
}

.inputBoxFacturier{
  display: flex;
  flex-direction: column;
  margin-right: auto;
}

/*.detailMaitre div:last-child{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}*/

</style>



/*

Suggestions : 
-prévoir d'utiliser une API pour rentrer des données géographiques
-prévoir d'utiliser une API pour rentrer des données d'entreprise
-faire une validation des données afin de vérifier quelles sont bien dans le bon format

*/