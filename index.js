const businessLogic = require("./cupcakesBL");
const express = require("express");

const app = express();
app.use(express.json());

const cupcakes = [{ id: 1, description: "Choclate" }];

app.get("/", (req, res) => {
  res.send("Hello World 1");
});

app.get("/cupcakes/api", (req, res) => {
  res.send(businessLogic.getCupcakes());
});

app.get("/cupcakes/api/:id", (req, res) => {
  const id = parseInt(req.params["id"]);

  const cupcake = businessLogic.getcupcake(id);


  if (cupcake) {
    res.send(cupcake);
  } else {
    res.send(`cupcake not found with the  id ${id}`);
  }

  res.send(cupcakes);
});

app.post("/cupcakes/api/", (req, res) => {
  console.log(`id is ${req.body.id}`);
  const cupcake = { id: req.body.id, description: req.body.description };
  businessLogic.postcupcake(cupcake);

  res.send(businessLogic.getCupcakes());
});

const port = 3000;
app.listen(3000, () => {
  console.log(`Listening to the app on port ${port} `);
});
