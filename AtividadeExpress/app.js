const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`[LOG] ${req.method} ${req.url}`);
  next();
});

const page = (name) => (req, res) => {
  res.send(`<h1>${name}</h1>`);
};

app.get("/", page("Home (/)"));
app.get("/about", page("About (/about)"));
app.get("/data", page("Data (/data - GET)"));
app.get("/users", page("Users (/users)"));
app.get("/signup", page("Signup (/signup)"));

app.get("/signin", (req, res) => {
  res.send(`
    <h1>Signin (/signin)</h1>
    <p>Entre em /users/seuNome</p>
  `);
});

app.get("/users/:userid", (req, res) => {
  const userid = req.params.userid;

  if (!userid || userid.trim() === "") {
    return res.redirect("/signup");
  }

  res.send(`<h1>Bem-vindo, ${userid}</h1>`);
});

app.post("/data", (req, res) => {
  res.send("<h1>POST recebido em /data</h1>");
});

app.use((req, res) => {
  res.status(404).send(`
    <h1>404 - Página não encontrada</h1>
    <a href="/">Ir para Home</a>
  `);
});

app.listen(3000, () => {
  console.log("Rodando em http://localhost:3000");
});