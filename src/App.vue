<script setup>
import Layout from "./components/layouts/layout.vue";
import Welcome from "./components/pages/Welcome.vue";
import Dashboard from "./components/pages/Dashboard.vue";
import Workout from "./components/pages/Workout.vue";
import { workoutProgram } from "./utils";
import { ref } from "vue";

const defaultData = {};
for (let workoutIdx in workoutProgram) {
  const workoutData = workoutProgram[workoutIdx];

  defaultData[workoutIdx] = {};

  for (let e of workoutData.workout) {
    defaultData[workoutIdx][e.name] = "";
  }
}
const selectedDisplay = ref(1);
const data = ref(defaultData);
const selectedWorkout = ref(-1);
</script>

<template>
  <Layout>
    <Welcome v-if="selectedDisplay == 0" />
    <Dashboard v-if="selectedDisplay == 1" />
    <Workout
      :data="data"
      :selectedWorkout="selectedWorkout"
      v-if="workoutProgram?.[selectedWorkout]"
    />
  </Layout>
</template>

<style scoped></style>
