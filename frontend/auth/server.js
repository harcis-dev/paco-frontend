const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
  console.log("Login: ");
  console.log(new Date().toLocaleString());
});

app.listen(8082, () =>
  console.log("API is running on http://localhost:8082/login")
);
