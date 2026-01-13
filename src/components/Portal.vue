<script setup></script>

<template>
  <Teleport to="#portal">
    <div class="portal-container">
      <div
        role="button"
        tabindex="0"
        @click="() => {}"
        class="portal-underlay"
      ></div>
      <div class="portal-content">
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.portal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1001;
}

.portal-underlay {
  position: absolute;
  inset: 0;
  background: var(--background-primary);
  opacity: 0.7;
  z-index: 999;
  border: none;
  padding: none;
}
</style>
