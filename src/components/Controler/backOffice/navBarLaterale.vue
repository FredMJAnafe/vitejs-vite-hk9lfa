<template>
<section class="conteneurNavBar">
  <section class="navigation">
    <ul>
      <li>
        <span class="logoEntreprise"><font-awesome-icon icon="phone" /></span>
        <span class="description">ANAFE</span>
      </li>
      <li>
        <a href="#">
          <span class="logoNav"></span>
          <span class="description">Factures non soldées</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="logoNav"><i class="fa-regular fa-file-invoice"></i></span>
          <font-awesome-icon icon=”hat-wizard” />
          <span class="description">Factures soldées</span>
        </a>

      </li>
      <li>
        <a href="#">
          <span class="logoNav"><font-awesome-icon icon="fa-regular fa-file-invoice" /></span>
          <span class="description">Toutes les factures</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="logoNav"><font-awesome-icon icon="fa-regular fa-file-invoice" /></span>
          <span class="description">Créer une facture</span>
        </a>
      </li>
      <li>
        <router-link to="modifierProfil">
          <a href="#">
            <span class="logoNav"></span>
            <span class="description">Paramètres</span>
          </a>
        </router-link>
      </li>
      <li>
        <a href="#">
          <span class="logoNav"><font-awesome-icon icon="phone" /></span>
          <span class="description">Déconnexion</span>
        </a>
      </li>
    </ul>
  </section>
</section>
</template>

<script>


export default {
  name: "navBarLaterale"
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  overflow-x: hidden;
}

.conteneurNavBar{
  position: relative;
  width: 100%;
}
.navigation{
  position: fixed;
  width: 300px;
  height: 100%;
  background: darkblue;
  transition: 0.5s;
  overflow: hidden;
}

.navigation ul{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.navigation ul li{
  position: relative;
  width: 100%;
  list-style: none;
}

.navigation ul li:hover{
  background: dodgerblue;
}

.navigation ul li:nth-child(1){
  margin-bottom: 60px;
}

.navigation ul li:nth-child(4){
  margin-bottom: 60px;
}

.navigation ul li:nth-child(5){
  margin-bottom: 160px;
}

.navigation ul li:nth-child(6){
  margin-bottom: 100px;
}


.navigation ul li:nth-child(1):hover{
  background: transparent;
}

.navigation ul li a{
  position: relative;
  display: block;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: white;
}

.navigation ul li a .logoNav{
  position: relative;
  display: block;
  min-width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}

.navigation ul li a .description{
  position: relative;
  display: block;
  padding: 0 10px;
  height: 60px;

}



</style>