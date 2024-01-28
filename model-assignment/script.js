import { dashboard, webcam } from "https://unpkg.com/@marcellejs/core";

const w = webcam();

const dash = dashboard({
  title: "Hello Marcelle",
  author: "Jane Doe",
});

dash.page("Main").sidebar(w);

dash.show();
