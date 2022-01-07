<template>
  <div class="home">
    <LampModule />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LampModule from "@/components/LampModule.vue";
import { useStore } from "../store";

export default defineComponent({
  name: "Home",
  components: {
    LampModule,
  },
  beforeMount() {
    const store = useStore();
    if (!store.authenticated) {
      this.$router.push("/login");
    }
  },
});
</script>
