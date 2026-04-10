var express = require('express');
var router = express.Router();

const page = (name) => (req, res) => {
  res.send(`<h1>${name}</h1>`);
};

router.get("/", page("Home (/)"));
router.get("/about", page("About (/about)"));
router.get("/data", page("Data (/data - GET)"));
router.post("/data", (req, res) => {
  res.send("<h1>POST recebido em /data</h1>");
});
router.get("/signup", page("Signup (/signup)"));

router.get("/signin", (req, res) => {
  res.send(`
    <h1>Signin (/signin)</h1>
    <p>Entre em /users/seuNome</p>
  `);
});

module.exports = router;
