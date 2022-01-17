<template>
  <div class="flex justify-center p-2">
    <div class="shadow-lg container">
      <div class="bg-green-500 p-2">
        <h1 class="text-gray-800 text-xl">{{ name }}</h1>
      </div>
      <div class="py-2 bg-gray-200 grid grid-cols-2">
        <button @click="updateNightTime(true)">Debug</button>
        <button @click="updateNightTime(false)">Normal</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useStore } from "../../store";

export default defineComponent({
  name: "NightTimeModule",
  data() {
    return {
      nightValue: false,
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    dbKey: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateNightTime(value: boolean) {
      this.nightValue = value;
      const store = useStore();
      store.websocket.send(JSON.stringify({ [this.dbKey]: this.nightValue }));
    },
  },
});
</script>
