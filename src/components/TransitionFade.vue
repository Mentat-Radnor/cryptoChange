<template>
  <transition name="vanish"><slot /></transition>
</template>

<style lang="scss">
.vanish-enter-active,
.vanish-leave-active {
  transition: opacity 0.5s ease;
}

.vanish-enter-from,
.vanish-leave-to {
  opacity: 0;
}
</style>
