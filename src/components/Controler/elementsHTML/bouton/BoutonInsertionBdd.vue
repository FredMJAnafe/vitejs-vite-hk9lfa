<template>
  <BoutonBase
    :intituleBouton="intitule"
    :paramBouton="param"
    :evenementBouton="evenement"
  ></BoutonBase>
</template>

<script>
import BoutonBase from '@/components/Controler/elementsHTML/bouton/BoutonBase.vue';
export default {
  name: 'BoutonFInsertionBdd',
  components: {
    BoutonBase,
  },
  props: {
    intituleBouton: String,
    nomCollection: String,
  },
  data() {
    return {
      intitule: this.intituleBouton || 'Ajouter',
      param: this.nomCollection,
      evenement: 'insertionBdd',
    };
  },
};
</script>
