<template>
  <button class="currency">
    <component :is="icon[currency]" class="currency__icon"></component>
    {{ currency }}
  </button>
</template>

<script setup lang="ts">
import IconBTC from "@/components/icons/IconBTC.vue";
import IconETH from "@/components/icons/IconETH.vue";
import IconUSD from "@/components/icons/IconUSD.vue";
import IconEUR from "@/components/icons/IconEUR.vue";

const porps = defineProps({ currency: { type: String, required: true } });

const icon = {
  btc: IconBTC,
  eth: IconETH,
  eur: IconEUR,
  usd: IconUSD,
};
</script>

<style scoped lang="scss">
.currency {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  background: var(--trasparent);
  text-transform: uppercase;

  transition: background var(--transition-time);
  &:hover {
    background: var(--primary-light);
  }
}

.currency__icon {
  width: 20px;
  height: 20px;
  background: var(--primary);
  color: var(--accent);
  padding: 3px;
  border-radius: 4px;
}
</style>
