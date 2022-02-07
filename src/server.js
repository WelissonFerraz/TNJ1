const express = require('express');
const cors = require ('cors');
const newLocal = express();
const app = newLocal;
require ('./src/Routes/index')(app);
app.use (cors());
app.use(express.json());
app.listen(3333);
