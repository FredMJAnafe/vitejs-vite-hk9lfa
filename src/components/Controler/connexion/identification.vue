<template>
  <section class="boite">
    <section class="formulaire">
      <h1>Connexion</h1>
      <section class="entreeUtilisateur">
        <input v-model="email" type="email" name="" id="email" required="required">
        <span>e-mail</span>
        <i></i>
      </section>
      <section class="entreeUtilisateur">
        <input v-model="password" type="password" name="" id="password" required="required">
        <span>mot de passe</span>
        <i></i>
      </section>
    </section>
    <bouton-flashy intituleBouton="connexion"  v-bind:email="this.email" v-bind:password="this.password"></bouton-flashy>
  </section>
</template>

<script>
import boutonFlashy from "@/components/Controler/elementsHTML/bouton/boutonFlashy.vue";

export default {
  name: 'UserIdentification',
  components: {boutonFlashy},
  data(){
    return{
      email:'',
      password:''
    }
  }

}
</script>

<style scoped>


.boite{
  position: relative;
  width: 400px;
  max-width: 400px;

  height: 420px;
  border-radius: 15px;
  overflow: hidden;
  background: black;
  margin-left: auto;
  margin-right: auto;
}

.boite::before{
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 400px;
  max-width: 400px;
  height: 420px;
  background: linear-gradient(90deg,white,black, white);
  transform-origin: bottom right;
  animation: animate 3s linear infinite;
}



@keyframes animate {
  0%{
    transform:rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}

.formulaire{

  position: absolute;
  inset: 2px;
  background: white;
  border-radius: 10px;
  z-index: auto;
  padding: 50px 40px;
  display: flex;
  flex-direction: column;


}

.formulaire h1{
  font-weight: 1000;
  text-align: center;
  letter-spacing: 0.4em;
  font-size: 180%;
  text-transform: uppercase;
}

.entreeUtilisateur{
  position: relative;
  width: 300px;
  margin-top: 35px;
}

.entreeUtilisateur input{
  position: relative;
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1em;
  letter-spacing: 0.05em;
}

.entreeUtilisateur span{
  position: absolute;
  left: 0;
  top: -40px;
  padding: 20px 10px 10px;
  pointer-events: none;
  letter-spacing: 0.05em;
}

.entreeUtilisateur input:valid ~ span,
.entreeUtilisateur input:focus ~ span{
  color: lightslategrey;
}

.entreeUtilisateur i{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, black, lightslategrey, white);
  border-radius: 4px;
}

.boutonFlashy{
  position: absolute;
  bottom: 10px;
  border: none;
  outline: none;
  width: 100%;
}

</style>