const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;
const usersRouter = require("./src/users/routes/users.routes");

app.use("/users", usersRouter);

app.listen(port, "192.168.1.75", () => {
  console.log(`Example app listening on port ${port}`);
});
