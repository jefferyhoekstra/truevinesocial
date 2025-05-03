/// --- initialization --- \\\
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
require("dotenv").config();

// databases
const posts = require("./models/posts");

const server = express();
const port = 3000;
const { DB_URI } = process.env;

/// --- middleware --- \\\
server.use(express.static("public"));
server.set("view engine", "ejs");
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(methodOverride("_method"));

/// --- database --- \\\
mongoose
    .connect(DB_URI)
    .then(() =>
        server.listen(port, () => {
            console.log(`Connected to database ${mongoose.connection.name}\nServer is running on port ${port}`);
        })).catch((error) => console.log(error));

/// --- routes --- \\\
server.get("/", (request, response) => {
    response.render("index");
});