<script setup>
import Layout from "./components/layouts/layout.vue";
import Welcome from "./components/pages/Welcome.vue";
import Dashboard from "./components/pages/Dashboard.vue";
import Workout from "./components/pages/Workout.vue";

const selectedDisplay = 2;
</script>

<template>
  <Layout>
    <Welcome v-if="selectedDisplay == 0" />
    <Dashboard v-if="selectedDisplay == 1" />
    <Workout v-if="selectedDisplay == 2" />
  </Layout>
</template>

<style scoped></style>
