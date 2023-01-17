<template>
    <header class="titreFormulaireFacturier">
        <h5>Formulaire Contrat</h5>
        <a target="_blank" href="https://www.formulaires.service-public.fr/gf/getNotice.do?cerfaNotice=51649&cerfaFormulaire=10103" style="font-weight: bold;">Aide pour remplir le formulaire</a>
        <!--En attendant de pouvoir implémenter correctement les enums-->
    </header>
    <form class="formulaire">
        <div class="detailContrat">
            <div class="inputBoxFacturier">
                <span class="detailFacturier">Mode contractuel</span>
                <select v-model="mode_contractuel" required>
                    <option :value="1" label="à durée limitée"></option>
                    <option :value="2" label="dans le cadre d’un CDI"></option>
                    <option :value="3" label="entreprise de travail temporaire"></option>
                    <option :value="4" label="activités saisonnières à deux employeurs"></option>
                </select>
            </div>
            <div class="inputBoxFacturier">
                <span class="detailFacturier">Type de contrat ou d’avenant</span>
                <select v-model="type_de_contrat" @change="this.SiContratPrecedent" required>
                    <optgroup label="Contrat initial">
                        <option :value="11" label="Premier contrat d’apprentissage de l’apprenti"></option>
                    </optgroup>
                    <optgroup label="Succession de contrats">
                        <option :value="21" label="Nouveau contrat avec un apprenti qui a terminé son précédent contrat auprès d’un même employeur"></option>
                        <option :value="22" label="Nouveau contrat avec un apprenti qui a terminé son précédent contrat auprès d’un autre employeur"></option>
                        <option :value="23" label="Nouveau contrat avec un apprenti dont le précédent contrat auprès d’un autre employeur a été rompu"></option>
                    </optgroup>
                    <optgroup label="Avenant : modification des conditions du contrat">
                        <option :value="31" label="Modification de la situation juridique de l’employeur"></option>
                        <option :value="32" label="Changement d’employeur dans le cadre d’un contrat saisonnier"></option>
                        <option :value="33" label="Prolongation du contrat suite à un échec à l’examen de l’apprenti"></option>
                        <option :value="34" label="Prolongation du contrat suite à la reconnaissance de l’apprenti comme travailleur handicap"></option>
                        <option :value="35" label="Modification du diplôme préparé par l’apprenti"></option>
                        <option :value="36" label="Autres changements : changement de maître d’apprentissage, de durée de travail hebdomadaire, réduction de durée, etc"></option>
                        <option :value="37" label="Modification du lieu d’exécution du contrat"></option>
                    </optgroup>
                </select>
            </div>
            <div class="inputBoxFacturier">
                <span class="detailFacturier">Type de dérogation</span>

                <select v-model="type_de_derogation">
                    <option :value="11" label="Age de l’apprenti inférieur à 16 ans"></option>
                    <option :value="12" label="Age supérieur à 29 ans : cas spécifiques prévus dans le code du travail"></option>
                    <option :value="21" label="Réduction de la durée du contrat ou de la période d’apprentissage"></option>
                    <option :value="22" label="Allongement de la durée du contrat ou de la période d’apprentissage"></option>
                    <option :value="50" label="Cumul de dérogations"></option>
                    <option :value="60" label="Autre dérogation"></option>
                </select>
            </div>
            <div class="inputBoxFacturier">
                <div v-if="afficheContratPrecedent==true">
                    <span class="detailFacturier">Numéro de contrat précédent</span>
                    <input  id="numero_contrat_precedent" type="text" :value="numero_contrat_precedent"  required>

                </div>
            </div>
            <div class="inputBoxFacturier">
                <span class="detailFacturier">Date de conclusion</span>
                <input id="dateNaissanceContrat" type="date" v-model="date_conclusion" @change="this.verificationDates" required>
            </div>
            <div class="inputBoxFacturier">
                <span class="detailFacturier">Date de début d’exécution</span>
                <input id="dateNaissanceContrat" type="date" v-model="date_debut_execution_contrat" @change="this.verificationDates" required>
            </div>
            <div class="inputBoxFacturier">
                <span class="detailFacturier">Date de fin de contrat</span>
                <input id="dateNaissanceContrat" type="date" v-model="date_fin_contrat" @change="this.verificationDates" required>
            </div>
            <div class="inputBoxFacturier">
                <span class="detailFacturier">Durée hebdo. de travail (h)</span>
                <input id="dateNaissanceContrat" type="text" v-model="duree_hebdomadaire_travail_heures" required>
            </div>
            <div class="inputBoxFacturier">
                <span class="detailFacturier">Durée hebdo. de travail (min)</span>
                <input id="dateNaissanceContrat" type="text" v-model="duree_hebdomadaire_travail_minutes" required>
            </div>

            <div class="inputBoxFacturier" style="display:flex;flex-direction: row;">
                <span class="detailFacturier">Travail sur machines dangereuses</span>
                <input type="checkbox" v-model="travail_sur_machines_dangereuses" required>
            </div>

            <div v-if="afficheFormulaireAvenant==true" class="etudiantAvenant">
                <div class="inputBoxFacturier">
                    <span class="detailFacturier">Date d'effet de l'avenant</span>
                    <input type="date" :value="date_effet_avenant" @change="this.SiContratAvenant">
                </div>
            </div> 
            <div class="inputBoxFacturier">
                <span class="detailFacturier">Salaire brut à l'embauche</span>
                <input id="dateNaissanceContrat" type="text" v-model="salaire_brut_embauche" required>
            </div>

            <div class="inputBoxFacturier">
                <span class="detailFacturier">Date de début année 1</span>
                <input id="dateNaissanceContrat" type="date" :value="date_début_annee_un" @input="this.SiContratAvenant" required>
            </div>
            <div class="inputBoxFacturier">
                <span class="detailFacturier">Date de fin année 1</span>
                <input id="dateNaissanceContrat" type="date" :value="date_fin_annee_un" @input="this.SiContratAvenant" required>
            </div>
            <div class="inputBoxFacturier" oninput="x.value='' + parseInt(a.value) + '%'">
                <span class="detailFacturier">Pourcentage année 1</span>
                <input type="number" name="a" v-model="pourcentage_annee_un" min="0" max=" 100" step="0.01">
                <output name="x"></output>
            </div>






            <div class="inputBoxFacturier">
                <span class="detailFacturier">Numéro de sécurité sociale</span>
                <input type="text" v-model="numero_de_securite_sociale" placeholder="obligatoire" required>
            </div>
            <div class="inputBoxFacturier">
                <span class="detailFacturier">Clé numéro de sécurité sociale</span>
                <input type="text" v-model="cle_numero_de_securite_sociale" placeholder="obligatoire" required>
            </div>
            <div class="inputBoxFacturier" style="display:flex;flex-direction: row;">
                <span class="detailFacturier">Travailleur handicapé</span>
                <input type="checkbox" v-model="travailleur_handicape" required>
            </div>
            <div class="inputBoxFacturier">
                <div v-if="afficheFormulaireAvenant==true" class="etudiantAvenant" style="display:flex;">


                </div>
            </div>   

            <div v-if="afficheErreurs" class="erreur">
                <p>{{messageErreur}}</p>


            </div>        
            <bouton-base class="BoutonBaseRecherche" intituleBouton="effacer" v-on:click="this.effacerFormulaire"></bouton-base>
            <bouton-base class="BoutonBaseRecherche" intituleBouton="ajouter" v-on:click="this.rentrerContratBDD"></bouton-base> 
        </div>
        <div class="detailContratAvenant">



        </div>
    </form>

</template>

<script>
    import BoutonBase from "@/components/Controler/elementsHTML/bouton/BoutonBase.vue";
    import construitURLService from "@/services/construitURL.service.vue";
//import {Contrat} from "@/components/Model/Contrat.Class";
//import {Contrat} from "@/components/Model/ContratTS.Class";
    import Contrat from "@/components/Model/ContratJS.Class";
    import creationJSONService from "@/services/creationJSON.service.vue";
    import configuration from "@/administration/configuration.vue";
    import connexionAPIService from "@/services/connexionAPI.service.vue";


    export default {
        name: "formulaireContrat",
        components: {
            BoutonBase
        },

        data() {
            return {
                afficheFormulaireAvenant: false,
                afficheContratPrecedent: true,
                afficheErreurs: false,
                messageErreur: "",

                mode_contractuel: "",
                type_de_contrat: "",
                type_de_derogation: "",
                numero_contrat_precedent: "",

                date_conclusion: "",
                date_debut_execution_contrat: "",
                date_fin_contrat: "",

                duree_hebdomadaire_travail_heures: "",
                duree_hebdomadaire_travail_minutes: "",
                travail_sur_machines_dangereuses: "",
                date_effet_avenant: "",
                salaire_brut_embauche: "",

                date_début_annee_un: "",
                date_fin_annee_un: "",
                pourcentage_annee_un: "",
                type_remuneration_annee_un: "",

                date_début_annee_un_changement_tranche_age: "",
                date_fin_annee_un_changement_tranche_age: "",
                pourcentage_annee_un_changement_tranche_age: "",
                type_remuneration_annee_un_changement_tranche_age: "",

                date_début_annee_deux: "",
                date_fin_annee_deux: "",
                pourcentage_annee_deux: "",
                type_remuneration_annee_deux: "",

                date_début_annee_deux_changement_tranche_age: "",
                date_fin_annee_deux_changement_tranche_age: "",
                pourcentage_annee_deux_changement_tranche_age: "",
                type_remuneration_annee_deux_changement_tranche_age: "",

                date_début_annee_trois: "",
                date_fin_annee_trois: "",
                pourcentage_annee_trois: "",
                type_remuneration_annee_trois: "",

                date_début_annee_trois_changement_tranche_age: "",
                date_fin_annee_trois_changement_tranche_age: "",
                pourcentage_annee_trois_changement_tranche_age: "",
                type_remuneration_annee_trois_changement_tranche_age: "",

                date_début_annee_quatre: "",
                date_fin_annee_quatre: "",
                pourcentage_annee_quatre: "",
                type_remuneration_annee_quatre: "",

                date_début_annee_quatre_changement_tranche_age: "",
                date_fin_annee_quatre_changement_tranche_age: "",
                pourcentage_annee_quatre_changement_tranche_age: "",
                type_remuneration_annee_quatre_changement_tranche_age: "",

                nourriture: "",
                logement: "",
                autres: ""
            }
        },
        methods: {
            verificationDates() {

                //Condition de validation de la donnée (cf. https://www.cfadock.fr/portail_developpeur#/tabs/null)
                const dateValiditeCFA = new Date("2020-01-01").toString();
                //on recupere la date du jour
                const dateDuJour = Date.now();
                let dateSignatureContrat = this.$data.date_conclusion;
                let dateDebutContrat = this.$data.date_debut_execution_contrat;
                let dateFinContrat = this.$data.date_fin_contrat;

                /*console.log("Date de signature du contrat : " +dateSignatureContrat);
                 console.log("Date de début du contrat : " + dateDebutContrat);
                 console.log("Date de fin du contrat : " + dateFinContrat);*/
                let messageErreur = "";//Le rapport d'erreur est contruit ici
                let booleenErreur = false;//Si il y a une erreur, le booleen passera à true
                if (dateSignatureContrat > dateDuJour && dateSignatureContrat != "") {
                    booleenErreur = true;
                    messageErreur += "La date de signature du contrat est supérieure à la date du jour !! (è.é)\n\n";
                }

                if (dateSignatureContrat > dateDebutContrat && (dateSignatureContrat != "" && dateDebutContrat != "")) {
                    booleenErreur = true;
                    messageErreur += "La date de signature du contrat est supérieure à la date de début du contrat !! (è.é)\n\n";
                }

                if (dateSignatureContrat < dateValiditeCFA && dateSignatureContrat != "") {
                    booleenErreur = true;
                    messageErreur += "La date de conclusion est antérieure au 1er janvier 2020 !! (è.é)\n\n";
                }

                if (dateFinContrat <= dateDebutContrat && (dateFinContrat != "" && dateDebutContrat != "")) {
                    booleenErreur = true;
                    messageErreur += "La date de fin du contrat est antérieure à celle du début !! (è.é)\n\n";
                }

                if (booleenErreur) {
                    //traitement en cas d'erreur
                    this.$data.afficheErreurs = true;
                    this.$data.messageErreur = messageErreur;
                }
            },
            SiContratPrecedent(event) {
                console.log("Date de conclusion du contrat : " + this.$data.type_de_contrat);
                if (this.$data.type_de_contrat == 11) {
                    this.$data.afficheContratPrecedent = false;
                } else {
                    this.$data.afficheContratPrecedent = true;
                }
                this.$emit('afficheContratPrecedent', event);
            },
            SiContratAvenant(event) {
                console.log("Date de conclusion du contrat : " + this.$data.type_de_contrat);
                let type_contrat = this.$data.type_de_contrat;
                if (type_contrat == 11 || type_contrat == 21 || type_contrat == 22 || type_contrat == 23) {
                    this.$data.afficheFormulaireAvenant = false;
                } else {
                    this.$data.afficheFormulaireAvenant = true;
                }
                this.$emit('afficheFormulaireAvenant', event);
            },
            async rentrerContratBDD(event) {
                console.log(this.$data.nom_de_naissance);

                let contrat = new Contrat(
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

                let JSON = creationJSONService.methods.construitJSON(contrat);
                let URL = construitURLService.methods.construitURLConnectionBack(configuration.data().collections.contrat, configuration.data().urlPossibles.ajouter);
                //Reservation case mémoire de la BDD
                let reponseBDD = await connexionAPIService.methods.requete(URL, JSON);
                if (reponseBDD.code_reponse !== 0) {
                    console.log("erreur : " + reponseBDD.Error_info);
                } else {
                    contrat.modifieIdentifiantContrat(reponseBDD.extra_info.identifiantContrat);
                    JSON = creationJSONService.methods.construitJSON(contrat);
                    //Modification de la case mémoire et ajout de l'contrat en BDD
                    URL = construitURLService.methods.construitURLConnectionBack(configuration.data().collections.contrat, configuration.data().urlPossibles.modifier);
                    reponseBDD = await connexionAPIService.methods.requete(URL, JSON);
                    if (reponseBDD.code_reponse !== 0) {
                        console.log("erreur : " + reponseBDD.Error_info);
                    } else {
                        this.$emit('remetEtatInitial', event);
                        console.log("Contrat ajouté en base de données");
                    }
                }
            },
            async effacerFormulaire() {
                for (let valeur of document.getElementsByClassName("detailContrat")[0].children) {
                    /*console.log(valeur.lastChild.value);*/
                    valeur.lastChild.value = "";
                }
            }
        }}

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

    .detailContrat{
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

    .etudiantAvenant{

    }

    .etudiantAvenant:last-child{
        max-width: content-box;
        border-radius: 5px;
        padding: 10px;
        background: white;
        display: flex;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 0.2rem 0.5rem;

    }

    .detailContratAvenant .etudiantAvenant div{
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
        width: inherit;
        flex-basis: 22%;
        margin-right: 1%;
        margin-top: 1px;
        margin-bottom: 1px;
        margin-left: 1%;
        align-items: flex-start;
        justify-content: center;
    }

    /*.detailContrat div:last-child{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }*/

    select{
        width: 50%;
    }

    .erreur{
        color: red;
    }

    select{
        width: inherit;
    }

    option{
        data-width: 100%;
    }

    .formulaire{
        width: 90%;
    }
</style>