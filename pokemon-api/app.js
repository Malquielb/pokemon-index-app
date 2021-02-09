const express = require('express');
const bodyParser =  require('body-parser');
const cors = require('cors');
const pokemon = require('./routes/pokemon')

const app = express();
const corsOptions = { origin: 'http://localhost:3000' }

app.set('port', process.env.PORT || 4000);
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/pokemon', pokemon);

const server = app.listen(app.get('port'), function() {
    console.log(`Express server listening on port ${server.address().port}`);
})
