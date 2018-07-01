const express = require('express');

const app = express();

app.set('port', process.env.PORT || 8000);

app.use('/', express.static('./'));

app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`);
});
