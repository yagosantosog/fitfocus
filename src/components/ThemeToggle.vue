<script setup>
import { useTheme } from "../composables/useTheme";
const { toggleTheme, theme } = useTheme();
</script>
<template>
  <button @click="toggleTheme">
    <i :class="'fa-solid ' + (theme === 'dark' ? 'fa-sun' : 'fa-moon')"></i>
  </button>
</template>

<style scoped></style>
