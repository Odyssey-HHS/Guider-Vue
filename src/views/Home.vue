<template>
  <div class="home">
    <div class="grid grid-cols-1 md:grid-cols-3">
      <LampModule name="Table Lamp" dbKey="lampColor" v-if="!isGuard" />
      <DoorModule name="Appartment Door" dbKey="openDoor" />
      <NightTimeModule name="Night Time" dbKey="fnt" v-if="isGuard" />
      <MotionAlert name="Motion Alert" dbKey="motionAlert" v-if="isGuard" />
      <FireAlert name="Fire Alert" dbKey="fireAlert" v-if="isGuard" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LampModule from "@/components/smart_modules/LampModule.vue";
import DoorModule from "@/components/smart_modules/DoorModule.vue";
import MotionAlert from "@/components/smart_modules/MotionAlert.vue";
import FireAlert from "@/components/smart_modules/FireAlert.vue";
import NightTimeModule from "@/components/smart_modules/NightTimeModule.vue";

import { useStore } from "../store";

export default defineComponent({
  name: "Home",
  components: {
    LampModule,
    DoorModule,
    MotionAlert,
    NightTimeModule,
    FireAlert
  },
  beforeMount() {
    const store = useStore();
    if (!store.authenticated) {
      this.$router.push("/login");
    }
  },
  computed: {
    isGuard() {
      const store = useStore();
      return store.role === "guard";
    }
  }
});
</script>
