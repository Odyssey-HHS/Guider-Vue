<template>
  <div class="flex justify-center p-2">
    <div class="shadow-lg container">
      <div class="bg-green-500 p-2">
        <h1 class="text-gray-800 text-xl">{{ name }}</h1>
      </div>
      <div class="py-2 bg-gray-200 grid grid-cols-2">
        <button @click="updateDoor(true)">Open</button>
        <button @click="updateDoor(false)">Closed</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useStore } from "../../store";

export default defineComponent({
  name: "DoorModule",
  data() {
    return {
      doorValue: false,
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
    updateDoor(value: boolean) {
      this.doorValue = value;
      const store = useStore();
      store.websocket.send(JSON.stringify({ [this.dbKey]: this.doorValue }));
    },
  },
});
</script>
