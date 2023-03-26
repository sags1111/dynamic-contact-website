const express = require("express");
const app = express();
const hbs = require("hbs");
const { registerPartials } = require("hbs");
const path = require("path");
const port = process.env.PORT || 8000;
require('./db/conn');
const User = require("./data/contact");
const { expr } = require("jquery");
const viewPath = path.join(__dirname, "../views");
const tempPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
app.set("view engine", "hbs");
app.set("views", viewPath);
app.set("views", tempPath);
hbs.registerPartials(partialsPath);
//  middle-ware
app.set('/css', express.static(path.join(__dirname, "../node_modules/bootstraps/dist/css")));
app.set('/jq', express.static(path.join(__dirname, "../node_modules/bootstraps/dist/jq")));
app.set('/js', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.urlencoded({ extended: false }));

// declare
app.get("/", (req, res) => {
    res.render("index");
});

app.post("/contact", async(req, res) => {
    try {
        res.send(req.body);
    } catch (error) {
        res.status(500).send(error);
    }

});
app.listen(port, () => {
    console.log(`${port} connection established!`);
});