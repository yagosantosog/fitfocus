<script setup>
import Grid from "../Grid.vue";
import { gymHealthFacts } from "../../utils";
const randomNumber = Math.floor(Math.random() * gymHealthFacts.length);
const todaysFact = gymHealthFacts[randomNumber];
</script>

<template>
  <section id="dashboard">
    <div class="card tip-container">
      <h2>Welcome Soldier</h2>
      <div>
        <p class="tip"><strong>Daily Tip</strong><br />{{ todaysFact }}</p>
      </div>
      <button>Start workout &rarr;</button>
    </div>
    <Grid />
  </section>
</template>

<style scoped></style>
