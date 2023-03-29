import App from "./App.svelte";

import "./index.scss";

const app = new App({
  target: document.getElementById("app"),
});

window.app = app;

export default app;
