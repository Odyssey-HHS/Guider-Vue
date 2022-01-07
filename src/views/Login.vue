<template>
  <div class="login">
    <LoginField />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginField from "@/components/LoginField.vue";

export default defineComponent({
  components: {
    LoginField,
  },
});
</script>
