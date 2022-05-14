<template>
  <ul class="dropMenu">
    <li
      class="dropMenu__item"
      v-for="(element, index) in currency"
      :key="'currency' + index"
      @click="change(element)"
    >
      <Currency :currency="element" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from "vue";

import Currency from "@/components/Currency.vue";

import { currency } from "@/currency";
import { useClickOutside } from "@/utils/useClickOutsidebySelector";

const props = defineProps({ attr: { type: String, required: true } });
const emits = defineEmits({ change: String, close: null });

function change(element: string) {
  emits("change", element);
  closeMenu();
}

function closeMenu() {
  emits("close");
}

useClickOutside("#" + props.attr, closeMenu);
</script>

<style lang="scss">
.dropMenu {
  position: absolute;
  top: 100%;
  left: 0;

  background: var(--primary-lightest);
  border-radius: 4px;
  z-index: 1;
}
</style>
