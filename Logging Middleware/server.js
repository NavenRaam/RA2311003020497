const app = require("./app");
const Log = require("./logger");

const PORT = 3000;

app.listen(PORT, () => {
  Log("backend", "info", "config", `Server running on port ${PORT}`);
});