const express = require("express");
// const methodOverride = require("method-override");
// const { path } = require("path");
const homeRouter = require("./routers/homeRouter");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/assets", express.static("assets"));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json);
// app.use(methodOverride("_method"));

app.use("/", homeRouter);

app.listen("3000", () => {
  console.log("app runing at port 3000");
});
