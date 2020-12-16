const express = require('express');
const bodyParser = require('body-parser');

// Router
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use('/', require('./routes/index.routes'));


app.listen(PORT, ()=> {
    console.log(`Server Running at port ${PORT}`)
})