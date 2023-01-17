<template>

  <router-view>

  </router-view>
  
</template>

<script>



export default {
  name: 'App',
  data(){
    return {
      //protected assets url base (utile pour les ressources sur stackblitz)
      //TODO : tenir compte de la prod !
      pab:'https://factures.anafe.fr/protectedassets'
    }
  }
}
</script>

<style>
   @import "bootstrap/dist/css/bootstrap.css";

  :root{
    --main-color: #223AAD;
    --color-dark: #34425A;
    --text-grey: #B0B0B0;
    --rose-pastel: #FEE4E3;
    --mauve-clair: #DAD8DC;
  }

  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style-type: none;
    box-sizing: border-box;
  }
</style>
