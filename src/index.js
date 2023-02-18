const app = require("./app");
const Loaders = require("./loaders");

Loaders.start();

app.listen(4000, () => console.log("olá"));
