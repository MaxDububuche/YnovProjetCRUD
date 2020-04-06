const express = require('express');
const config = require('../configs/server.config');
const bodyParser = require('body-parser');
const apiRouter = require('../routes');

const app = express();

app.use(bodyParser.json());

app.use('/api/v1', apiRouter);

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