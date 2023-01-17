import {createRouter, createWebHistory} from "vue-router";
import identification from "@/components/Controler/connexion/identification.vue";
import facturier from "@/components/Vue/facturier.vue";
import facturierPlusModerne from "@/components/Vue/facturierPlusModerne.vue";
import modifierProfil from "@/components/Vue/modifierProfil.vue";
import transmettreDocumentOPCO from "@/components/Vue/transmettreDocumentOPCO.vue";


const routes = [
    {
        name:'connexion',
        path:'/',
        component: identification
    },
    {
        name:'facturier',
        path:'/facturier',
        component: facturier
    },
    {
        name:'facturierPlusModerne',
        path:'/facturierUI',
        component: facturierPlusModerne
    },
    {
        name:'modifierProfil',
        path:'/modifierProfil',
        component: modifierProfil
    },
    {
        name:'transmettreDossier',
        path:'/transmettreDossier',
        component: transmettreDocumentOPCO
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;