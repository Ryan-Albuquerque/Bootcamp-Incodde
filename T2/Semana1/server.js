const express = require("express");
const path = require("path")

const app = express();

// app.use(require("./routes"))

app.use('/booking_store', express.static(path.join(__dirname + "/desafioJSDOM/")))
app.use('/fake_google', express.static(path.join(__dirname + "/desafio_fake_google/")))

app.listen(3000);
