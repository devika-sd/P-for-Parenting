const express = require('express');
var cors = require('cors');
const app = express();

const databaseConnection = require('./db');
const errorHandler = require('./middleware/errorHandler');
const parentingRoute = require('./routing/parenting')

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

databaseConnection();

app.use('/api/v1/parenting',parentingRoute)

app.use(errorHandler);

app.listen(8080, () => { console.log("Server Running on 8080") })