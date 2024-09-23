const express = require("express");
const routes = express.Router();
const Menu = require("./../models/menu");

routes.post("/", async (request, response) => {
  try {
    const menuData = request.body;
    const newMenu = new Menu(menuData);
    const savedMenu = await newMenu.save();
    response.status(201).json(savedMenu);
  } catch (err) {
    response.status(500).json({ message: err });
  }
});

routes.get("/", async (request, response) => {
  try {
    const menuData = await Menu.find();
    response.status(200).json(menuData);
  } catch (err) {
    response.status(500).json(err);
  }
});

module.exports = routes;
