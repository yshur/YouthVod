const express = require ('express'),
      bodyParser = require('body-parser'),
      app = express(),
      port = process.env.PORT || 3000,
      data = require('./data');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/includes', express.static(`${__dirname}/public`));
app.use('/', express.static('./'));

app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  res.set("Content-Type", "application/json");
  next();
});

app.get('/', (req,res) => {
  console.log(`__dirname: ${__dirname}`);
  res.sendFile(`${__dirname}/index.html`);
  });

app.get('/getAllVodDB', (req,res) => {
  console.log('getAllVodDB');
	var answer = data.getAllVodDB();
	res.status(200).json(answer);
  });
app.get('/getAllYouthItems', (req,res) => {
  console.log('getAllYouthItems');
	var answer = data.getAllYouthItems();
	res.status(200).json(answer);
  });
app.post('/getStarData/', (req,res) => {
  var star1 = req.body.star;
  console.log('getStarData');
	console.log(`post: star = ${req.body.star}`);
	var answer = data.getStarData(star1);
	res.status(200).json(answer);
  });
app.get('/getItemsByYearAndMinDuration/:year/:time', (req,res) => {
	var year = req.params.year,
		time = req.params.time;
  console.log('getItemsByYearAndMinDuration');
  console.log(`get: year = ${req.body.year}, time = ${req.body.time}`);
	var answer = data.getItemsByYearAndMinDuration(year, time);
	res.status(200).json(answer);
  });
app.put('/getItemsByYearAndMinDuration/:year/:time', (req,res) => {
  var year = req.params.year,
    time = req.params.time;
  console.log('getItemsByYearAndMinDuration');
  console.log(`put: year = ${req.params.year}, time = ${req.params.time}`);
  var answer = data.getItemsByYearAndMinDuration(year, time);
  res.status(200).json(answer);
  });
app.post('/getItemsByYearAndMinDuration/', (req,res) => {
  var year = req.body.year,
    time = req.body.time;
  console.log('getItemsByYearAndMinDuration');
  console.log(`post: year = ${req.body.year}, time = ${req.body.time}`);
  var answer = data.getItemsByYearAndMinDuration(year, time);
  res.status(200).json(answer);
  });
app.all('*', function(req, res) {
  res.send(`Got lost? This is a friendly 404 page :)`);
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
