import { getRouter } from "@/router";
import { reactive } from "vue";

const store = reactive({
  websocket: new WebSocket(
    process.env.VUE_APP_WEBSOCKET ?? "ws://localhost:8443/ws"
  ),
  authenticated: false,
  role: "",
  motionAlert: false,
  fireAlert: false,
  door: false,
  lampColor: 0,
  forceNightTime: false,
});

// Add Event listener
store.websocket.addEventListener("message", (message) => {
  const object = JSON.parse(message.data);
  console.log(object);

  if (object && typeof object.role === "string") {
    store.authenticated = true;
    store.role = object.role;
    getRouter().push("/");
  }

  if (object && typeof object.motionAlert === "boolean") {
    store.motionAlert = object.motionAlert;
  }

  if (object && typeof object.fireAlert === "boolean") {
    store.fireAlert = object.fireAlert;
  }

  if (object && typeof object.door === "boolean") store.door = object.door;

  if (object && typeof object.lampColor === "number") {
    store.lampColor = object.lampColor;
  }
});

setInterval(() => {
  if (!store.authenticated) {
    return;
  }

  console.log("Hard sync fetch");

  store.websocket.send("{}");
}, 1000);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useStore() {
  return store;
}
