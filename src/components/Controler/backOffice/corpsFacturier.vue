<template>
  <div class="analyse">
    <fenetre-montant class="fenetreMontant" v-bind:montant="this.montantWidget.total" ></fenetre-montant>
    <fenetre-montant class="fenetreMontant" v-bind:montant="this.montantWidget.nMoins1" ></fenetre-montant>
    <fenetre-montant class="fenetreMontant" v-bind:montant="this.montantWidget.n" ></fenetre-montant>
  </div>
  <tableau-facture></tableau-facture>

</template>

<script>
import fenetreMontant from "@/components/Controler/elementsHTML/widget/fenetreMontant.vue";
import tableauFacture from "@/components/Controler/elementsHTML/tableaux/tableauFacture.vue";

export default {
  name: "corpsFacturier",
  components:{
    fenetreMontant,
    tableauFacture
  },
  props:{
    montantWidget:Object
  }
}
</script>

<style scoped>

.analyse{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  background: var(--mauve-clair);
  padding: 0.6rem 1rem;
}

.fenetreMontant{
  box-shadow: 0px 5px 5px -5px;
}

</style>