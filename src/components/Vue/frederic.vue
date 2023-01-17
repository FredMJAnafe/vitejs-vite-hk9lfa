<template>
  <p> Bonjour Je suis frederic</p>
  <button>{{this.$data.nomBouton}}</button>

</template>

<script>
export default {
  name: "fredericMJ",
  data(){
    return{
      nomBouton:"ceci est mon bouton"
    }
  }
}
</script>

<style scoped>


</style>