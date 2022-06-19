const express = require("express");
const session = require("express-session");
const methodOverride = require("method-override");
const flash = require("req-flash");

const homeRouter = require("./routers/homeRouter");
const dashboardRouter = require("./routers/dashboardRouter");
const loginRouter = require("./routers/loginRouter");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/assets", express.static("assets"));
app.use("/public", express.static("node_modules/tinymce"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// Konfigurasi session
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "t@1k0ch3ng",
    name: "secretName",
    cookie: {
      sameSite: true,
      maxAge: 60000,
    },
  })
);
app.use(flash());

app.use("/login", loginRouter);
app.use("/dashboard", dashboardRouter);
app.use("/", homeRouter);

app.listen("3000", () => {
  console.log("app runing at port 3000");
});
