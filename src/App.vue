<script setup>
import Layout from "./components/layouts/layout.vue";
import Welcome from "./components/pages/Welcome.vue";
import Dashboard from "./components/pages/Dashboard.vue";
import Workout from "./components/pages/Workout.vue";
import { workoutProgram } from "./utils";
import { computed, ref } from "vue";

const defaultData = {};
for (let workoutIdx in workoutProgram) {
  const workoutData = workoutProgram[workoutIdx];

  defaultData[workoutIdx] = {};

  for (let e of workoutData.workout) {
    defaultData[workoutIdx][e.name] = "";
  }
}
console.log(defaultData);
const selectedDisplay = ref(0);
const data = ref(defaultData);
const selectedWorkout = ref(-1);

const isWorkoutComplete = computed(() => {
  const currWorkout = data.value?.[selectedWorkout.value];
  if (!currWorkout) {
    return false;
  } //guard clause to exit function

  const isCompleteCheck = Object.values(currWorkout).every((ex) => !!ex);
  return isCompleteCheck;
});

const firstIncompleteWorkoutIndex = computed(() => {
  const allWorkouts = data.value;
  if (!allWorkouts) {
    return -1;
  }
  for (const [index, workout] of Object.entries(allWorkouts)) {
    const isComplete = Object.values(workout).every((ex) => !!ex);
    if (!isComplete) {
      return index;
    }
  }
  return -1;
});

function handleChangeDisplay(idx) {
  selectedDisplay.value = idx;
}

function handleSelectedWorkout(idx) {
  selectedDisplay.value = 2;
  selectedWorkout.value = idx;
}

function handleSaveWorkout() {
  // save the current data snapshot to localstorage so that we can retrieve it next time
  localStorage.setItem("workouts", JSON.stringify(data.value));

  // show the dashboard
  selectedDisplay.value = 1;

  // deselect a workout
  selectedWorkout.value = -1;
}
</script>

<template>
  <Layout>
    <Welcome
      :handleChangeDisplay="handleChangeDisplay"
      v-if="selectedDisplay == 0"
    />
    <Dashboard
      :handleSelectedWorkout="handleSelectedWorkout"
      v-if="selectedDisplay == 1"
    />
    <Workout
      :data="data"
      :selectedWorkout="selectedWorkout"
      v-if="workoutProgram?.[selectedWorkout]"
    />
  </Layout>
</template>

<style scoped></style>
