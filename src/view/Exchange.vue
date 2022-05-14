<template>
  <div class="container grow">
    <div class="content">
      <ExchangeBlock
        :currency="currencyValue[0]"
        :attr="randomID()"
        @change="changeCurrency(0, $event)"
        @input="changeCurrencyTotal(0, $event)"
        ><template #title>Amount i have</template></ExchangeBlock
      >
      <ExchangeBlock
        :currency="currencyValue[1]"
        :attr="randomID()"
        @change="changeCurrency(1, $event)"
        @input="changeCurrencyTotal(1, $event)"
        ><template #title>I need</template></ExchangeBlock
      >

      <div class="rate__wrap">
        <p>Rate:</p>
        <div class="rate">{{ currencyValue[1].total * 1.01 }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, reactive, watch } from "vue";

import ExchangeBlock from "@/components/exchange/ExchangeBlock.vue";

import { getCurrentChange } from "@/services/ServicesExchange";
import { currency } from "../currency";

interface ICurrency {
  name: string;
  total: number;
}

const currencyValue: Array<ICurrency> = reactive([
  { name: currency[0], total: 1 },
  { name: currency[1], total: 0 },
]);

const coversionRate: Ref<any> = ref(0);

(async () => {
  refreshCurrency();
})();

async function refreshCurrency() {
  await getNewConversionRate();
  changeCurrencyTotal(0, currencyValue[0].total);
}

async function getNewConversionRate() {
  const {
    data: { conversion_rate },
  } = await getCurrentChange(currencyValue[0].name, currencyValue[1].name);

  coversionRate.value = (+conversion_rate).toFixed(2);
}

async function changeCurrency(index: number, value: string) {
  if (
    Object.values(currencyValue).some(
      (element: ICurrency) => element.name === value
    )
  ) {
    currencyValue.reverse();
    return;
  }

  currencyValue[index].name = value;

  refreshCurrency();
}

function changeCurrencyTotal(index: number, value: number) {
  currencyValue[index].total = value;
  currentAmount(index);
}

function currentAmount(index: number) {
  if (coversionRate.value) {
    index == 0
      ? (currencyValue[1].total = +(
          currencyValue[0].total * coversionRate.value
        ).toFixed(4))
      : (currencyValue[0].total = +(
          currencyValue[1].total / coversionRate.value
        ).toFixed(4));
  }
}

function randomID() {
  return "find" + Math.round(Math.random() * 1000);
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  gap: 30px;
  flex-direction: column;

  width: fit-content;
  padding: 32px;
  border: 1px solid var(--primary);
  background: var(--primary-lightest);
  border-radius: 16px;
}

.rate__wrap {
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  padding: 16px;
  background: var(--accent);
}
</style>
