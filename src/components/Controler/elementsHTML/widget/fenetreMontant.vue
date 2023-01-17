<template>
  <section class="card">
    <div class="cardHead">
      <h2>{{this.$props.montant.montant}}</h2>
      <font-awesome-icon class="fontIcone" icon="fa-money-bill-transfer" />
    </div>
    <div class="contenuCard">
      <small>Montant à solder <strong>{{this.$props.montant.intitule}}</strong></small>
      <div class="indicateurCard">
        <div class="affichageIndicateurCard"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "fenetreMontant",
  props:{
    montant:Object
  }
}
</script>

<style scoped>

.cardHead{
  display: flex;
  justify-content: space-between;
  margin-left: 1em;
  margin-right: 1em;
  align-items: flex-start;
}
.fontIcone{
  font-size: 2rem;
  color: var(--color-dark);
}

.cardHead h2{
  font-size: 1.8rem;
  color: #555;
}

.contenuCard{
  padding-left: 1rem;
  color: #555555;
  font-weight: 400;
}

</style>