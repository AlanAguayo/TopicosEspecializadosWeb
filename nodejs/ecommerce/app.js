const express = require('express');
const conn =  require('./libs/MongooseConnection');
const app = express();
const productsRoutes = require("./routes/productsRoutes");

app.use(express.json());
const api_prefix = process.env.API_PREFIX;
app.use(api_prefix, productsRoutes);

const port = process.env.PORT;

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}!`);
});