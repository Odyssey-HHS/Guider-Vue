<template>
  <div class="flex justify-center">
    <div class="shadow-lg container">
      <div class="bg-green-500 p-2">
        <h1 class="text-gray-800 text-xl">Table Lamp</h1>
      </div>
      <div class="py-2 bg-gray-200">
        <input type="number" v-model="lampValue" @change="updateLamp" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useStore } from "../store";

export default defineComponent({
  name: "LampModule",
  data() {
    return {
      lampValue: 0,
    };
  },
  methods: {
    updateLamp() {
      const store = useStore();
      store.websocket.send(JSON.stringify({ lampColor: this.lampValue }));
    },
  },
});
</script>
