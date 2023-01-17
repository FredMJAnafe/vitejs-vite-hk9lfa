<template>
  <nav-bar-laterale></nav-bar-laterale>
  <section class="facturier">
    <entete-navigation></entete-navigation>
  </section>

</template>

<script>
import navBarLaterale from "@/components/Controler/backOffice/navBarLaterale.vue";
import enteteNavigation from "@/components/Controler/backOffice/entete.vue";

export default {
  name: "affichageFacturier",
  mounted() {
  this.$router.push({name:'facturier'});
},
  components:
      {
        navBarLaterale,
        enteteNavigation
      }
}
</script>

<style scoped>
.facturier{
  position: absolute;
  width: calc(100% - 300px);
  left: 300px;
}

</style>