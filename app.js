const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log('IP:', ip);
  console.log('req.baseUrl:', req.baseUrl);
  console.log('req.hostname:', req.hostname);
  console.log('req.ip:', req.ip);
  console.log('req.originalUrl:', req.originalUrl);
  res.send('ip = ' + ip);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
