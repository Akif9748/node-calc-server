const express = require('express');
const bodyParser = require('body-parser');
const path = require("path")
const math = require("mathjs")

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");


app.get("/", (req, res) => res.render("input"));

app.post('/', (req, res) => {
    var resp;
    try {
        resp = math.evaluate(req.body.girdi)
    } catch (e) {
        resp = e
    }
    res.render("output.ejs", { result: resp })
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});