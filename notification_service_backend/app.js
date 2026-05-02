const express = require("express");
const routes = require("./routes");

const app = express();
app.use(express.json());

app.use("/notifications", routes);

app.listen(3000, () => {
  console.log("server started on 3000");
});