import { reactive } from "vue";

const store = reactive({
  websocket: new WebSocket("ws://localhost:8443/ws"),
  authenticated: false,
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useStore() {
  return store;
}
