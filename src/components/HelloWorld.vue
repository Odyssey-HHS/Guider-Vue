<template>
  <div class="hello flex justify-center">
    <div class="shadow-lg container">
      <div class="bg-green-500 p-2">
        <h1 class="text-gray-800 text-xl">{{ msg }}</h1>
      </div>
      <div class="py-2 bg-gray-200">
        <ol class="list-none">
          <li class="p-2 cursor-pointer hover:bg-green-300">Item</li>
          <li class="p-2 cursor-pointer hover:bg-green-300">Item</li>
          <li class="p-2 cursor-pointer hover:bg-green-300">Item</li>
          <li class="p-2 cursor-pointer hover:bg-green-300">Item</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>
