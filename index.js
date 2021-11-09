"use strict";
const nodemailer = require("nodemailer");
const express = require('express');
const app = express();
const routes = require('./routes/app.routes');
var cors = require('cors');

app.use(cors());
app.options('*', cors());
app.use(express.json()); //tornar o corpo inteligivel para o javascript. Transforma a requisição em json
app.use(routes);
app.listen(process.env.
    PORT || 4000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });