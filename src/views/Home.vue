<template>
  <div class="home">
    <div class="grid grid-cols-3">
      <LampModule name="Table Lamp" dbKey="lampColor" />
      <DoorModule name="Appartment Door" dbKey="openDoor" />
      <AlertModule name="Motion Alert" dbKey="motionAlert" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LampModule from "@/components/smart_modules/LampModule.vue";
import DoorModule from "@/components/smart_modules/DoorModule.vue";
import AlertModule from "@/components/smart_modules/AlertModule.vue";
import { useStore } from "../store";

export default defineComponent({
  name: "Home",
  components: {
    LampModule,
    DoorModule,
    AlertModule,
  },
  beforeMount() {
    const store = useStore();
    if (!store.authenticated) {
      this.$router.push("/login");
    }
  },
});
</script>
