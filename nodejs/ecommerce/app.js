const express = require('express');
const conn =  require('./libs/MongooseConnection');
const app = express();
const productsRoutes = require("./routes/productsRoutes");
const userRouter = require('./routes/UserRouter')
const authJwt = require('./libs/jwt')

app.use(authJwt())

app.use(express.json());
const api_prefix = process.env.API_PREFIX;
app.use(api_prefix, productsRoutes);

app.use('/api/v1/users', userRouter)

const port = process.env.PORT;

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}!`);
});