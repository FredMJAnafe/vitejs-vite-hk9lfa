<template>
<section class="bandeauHaut">
  <div class="contenuBandeauHaut">
    <div class="deconnexion">
      <router-link class="lienDeconnexion" to="/">
        <font-awesome-icon icon="fa-power-off" />
        <span class="texteDeconnexion">Deconnexion</span>
      </router-link>
    </div>
  </div>

</section>
</template>

<script>
export default {
  name: "bandeauHautFacturier"
}
</script>

<style scoped>
.bandeauHaut{
  position: fixed;
  right: 0;
  top: 0;
  left: 165px;
  z-index: 100;
  height: 33px;
  box-shadow: 0px 8px 5px -7px ;
}

.contenuBandeauHaut{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: auto;

}

.deconnexion{
  margin-right: 1em;
  margin-top: 5px;
}

.lienDeconnexion{
  text-decoration: none;
  color: var(--color-dark);
    
}

.lienDeconnexion:hover{
    text-decoration: none;
    color : red;
}

.texteDeconnexion{
  margin-left: 0.5em;
}



</style>