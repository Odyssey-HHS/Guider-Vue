<template>
  <div class="flex justify-center p-2">
    <div class="shadow-lg container bg-gray-200">
      <div class="bg-green-500 p-2">
        <h1 class="text-gray-800 text-xl">{{ name }}</h1>
      </div>
      <div class="py-2 grid grid-cols-6">
        <button @click="updateLamp(0)">Off</button>
        <button @click="updateLamp(16768170)">Warm White</button>
        <button @click="updateLamp(16777215)">Cold White</button>
        <button @click="updateLamp(16711680)">Red</button>
        <button @click="updateLamp(65280)">Green</button>
        <button @click="updateLamp(255)">Blue</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useStore } from "../../store";

export default defineComponent({
  name: "LampModule",
  data() {
    return {
      lampValue: 0,
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
    updateLamp(value: number) {
      this.lampValue = value;
      const store = useStore();
      store.websocket.send(JSON.stringify({ [this.dbKey]: this.lampValue }));
    },
  },
});
</script>
