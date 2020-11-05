const express = require('express');
const indexRouter = require('./routes/indexRouter');
const history = require('connect-history-api-fallback');

const app = express();

app.use("/", indexRouter);
app.use(history());
app.use(express.static('public'));

const port = 3000;
app.listen(port, () => {
  console.log(`start app with ${port} port`);
})


