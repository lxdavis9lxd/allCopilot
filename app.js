const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const getInfoRoute = require('./routes/getInfo');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', getInfoRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
