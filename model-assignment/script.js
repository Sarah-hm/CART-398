import {
  dashboard,
  webcam,
} from "https://cdn.jsdelivr.net/npm/create-marcelle@0.1.1/index.min.js";

const w = webcam();

const dash = dashboard({
  title: "Hello Marcelle",
  author: "Jane Doe",
});

dash.page("Main").sidebar(w);

dash.show();
