const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
//import Routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

//CONNECT TO DB
mongoose.connect(process.env.DB_CONN, () => console.log("Çonnect to db"));

///moiddlewares
app.use(express.json());

//Route middlware
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(3000, () => console.log("Server UP and running"));
