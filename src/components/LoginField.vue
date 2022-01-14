<template>
  <div class="flex justify-center mt-10">
    <div class="shadow-lg container">
      <div class="bg-red-500 p-2">
        <h1 class="text-gray-800 text-xl">Login</h1>
      </div>
      <div class="flex py-2 bg-gray-200 justify-center">
        <div class="columns-1 w-min">
          <input
            type="text"
            v-model="username"
            placeholder="naam"
            class="mx-2 mt-2"
            @keydown.enter="login"
          />
          <input
            type="password"
            v-model="password"
            placeholder="wachtwoord"
            class="mx-2 my-2"
            @keydown.enter="login"
          />
          <button
            class="border-black bg-green-400 py-2 px-4 rounded shadow-sm"
            @click="login"
          >
            Let me in! :)
          </button>
        </div>
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
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const store = useStore();
      store.websocket.send(
        JSON.stringify({
          token: "hardcoded-valid",
          username: this.username,
          password: this.password,
        })
      );
    },
  },
});
</script>
