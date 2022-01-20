<template>
  <div class="flex justify-center p-2" v-if="alertValue">
    <div class="shadow-lg container bg-gray-200">
      <div class="bg-red-500 p-2">
        <h1 class="text-gray-800 text-xl">{{ name }}</h1>
      </div>
      <div class="py-2 bg-gray-200 grid grid-cols-1">
        <button @click="updateAlert(false)">Ack</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useStore } from "../../store";

export default defineComponent({
  name: "PanicAlert",
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
    updateAlert(value: boolean) {
      const store = useStore();
      store.websocket.send(JSON.stringify({ [this.dbKey]: value }));
    },
  },
  computed: {
    alertValue() {
      const store = useStore();
      return store.panicAlert;
    },
  },
});
</script>
