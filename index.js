const express = require ('express'),
      bodyParser = require('body-parser'),
      app = express(),
      port = process.env.PORT || 3000,
      data = require('./data');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/includes', express.static(`${__dirname}/public`));
app.use(
(req,res,next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  res.set("Content-Type", "application/json");
  next();
});

app.all('*', (req, res, next) => {
  console.log("runs for all HTTP verbs first");
  next();
});

app.get('/', (req,res) => {
  console.log(`__dirname: ${__dirname}`);
  res.sendFile(`${__dirname}/index.html`);
  });

app.get('/getAllYouthItems', data.getAllYouthItems);
  //, (req,res) => {
 //  console.log('getAllYouthItems');
	// data.getAllYouthItems();
 //  //console.log(`${answer}`);
	// //res.status(200).json(answer);
 //  });
// app.post('/getItemsByYear/', (req,res) => {
//   var year1 = req.body.year;
//   console.log('getItemsByYear');
// 	console.log(`post: year = ${req.body.year}`);
// 	var answer = data.getItemsByYear(year1);
// 	res.status(200).json(answer);
//   });
// app.get('/getItemsByGenreAndWord/:genre/:word', (req,res) => {
// 	var genre = req.params.genre,
// 		  word = req.params.word;
//   console.log('getItemsByGenreAndWord');
//   console.log(`get: genre = ${req.body.genre}, word = ${req.body.word}`);
// 	var answer = data.getItemsByGenreAndWord(genre, word);
// 	res.status(200).json(answer);
//   });
// app.put('/getItemsByGenreAndWord/:genre/:word', (req,res) => {
//   var genre = req.params.genre,
//       word = req.params.word;
//   console.log('getItemsByGenreAndWord');
//   console.log(`put: genre = ${req.body.genre}, word = ${req.body.word}`);
//   var answer = data.getItemsByGenreAndWord(year, time);
//   res.status(200).json(answer);
//   });
// app.post('/getItemsByGenreAndWord/', (req,res) => {
//   var genre = req.body.genre,
//       word = req.body.word;
//   console.log('getItemsByGenreAndWord');
//   console.log(`post: genre = ${req.body.genre}, word = ${req.body.word}`);
//   var answer = data.getItemsByGenreAndWord(genre, word);
//   res.status(200).json(answer);
//   });
app.all('*', function(req, res) {
  var error = {"error":"item not found"};
  res.status(200).json(error);
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
