<template>
  <div class="currency__block">
    <h2><slot name="title"></slot></h2>
    <div class="currency__watch">
      {{ props.currency.total }} {{ props.currency.name }}
    </div>

    <div class="currency__wrap" :id="attr">
      <Currency @click="toggleMenu" :currency="props.currency.name" />
      <TransitionFade>
        <DropMenu
          v-if="isOpen"
          :attr="attr"
          @change="changeCurrency($event)"
          @close="toggleMenu"
        />
      </TransitionFade>
    </div>
    <input
      type="number"
      class="currency__amount"
      :value="props.currency.total"
      @input="changeValue($event)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";

import DropMenu from "@/components/exchange/DropMenu.vue";
import Currency from "@/components/Currency.vue";
import TransitionFade from "@/components/TransitionFade.vue";

const props = defineProps({
  currency: { type: Object, required: true },
  attr: { type: String, required: true },
});

const emits = defineEmits({ change: String, input: String });

const isOpen: Ref<boolean> = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function changeValue(event: { target: { value: string } }) {
  console.log(event.target.value);
  emits("input", +event.target.value);
}
function changeCurrency(value: string) {
  emits("change", value);
}

type slots = { title: { message: string } };
</script>

<style scoped lang="scss">
.currency__block {
  display: grid;

  grid-template-columns: 1fr fit-content(100%);
  grid-gap: 10px;

  align-items: center;

  width: 100%;
}

.currency__row {
  display: flex;
  align-items: center;
  padding: 8px 0px;
  gap: 80px;
  border-bottom: 1px solid var(--primary);
}

.currency__wrap {
  position: relative;
  border-bottom: 1px solid var(--primary);
}

.currency__amount {
  max-width: 100px;
  padding: 8px;
  text-align: center;
  border: 1px solid var(--primary);
  border-radius: 8px;
}
.currency__watch {
  justify-self: end;
  text-transform: uppercase;
}
</style>
