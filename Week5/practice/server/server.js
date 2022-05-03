const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
