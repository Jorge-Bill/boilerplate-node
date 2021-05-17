import { Router } from "express";

import ExampleController from './controllers/ExampleController';

const routes = new Router();

routes.get("/", (req, res) => {
  res.send("Boilerplate node - versão 1.0");
});

routes.post("/example", ExampleController.StartMethod);

export default routes;
