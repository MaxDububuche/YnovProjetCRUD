const express = require('express');
const config = require('../configs/server.config');
const bodyParser = require('body-parser');
const apiRouter = require('../routes');
const app = express();

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', __dirname + '\\..\\views')

app.set('view engine', 'pug');

app.use(bodyParser.json());

app.use('/fruitjuice', apiRouter);

exports.start = () => {
    let port = config.port;

    app.listen(port, (err) => {
        if (err) {
            console.log(`Error:${err}`);
            process.exit(-1);
        }
        console.log(`app is running on port ${port}`);
    });

}