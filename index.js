const express = require ('express'),
      bodyParser = require('body-parser'),
      app = express(),
      port = process.env.PORT || 3000,
      data = require('./data/youthvod.json');

app.all('*', (req, res, next) => {
  console.log("runs for all HTTP verbs first");
  next();
});

app.get('/', (req,res) => {
//   console.log(`__dirname: ${__dirname}`);
//   res.sendFile(`${__dirname}/html/index.html`);
//   });

// app.get('/getAllYouthVod', (req,res) => {
   console.log(`getAllYouthVod: ${data.vod_name}`);
   res.status(200).json(data);
  });
app.post('/getMoviesByName/', (req,res) => {
     console.log(`recieved: ${req.body.movie_name}`);
     let foundVod = false;
     for(let i in data.youth_movies) {
        var movie = data.youth_movies[i];
        if(movie.name == req.body.movie_name) {
          console.log(`found: ${req.body.movie_name}`);
          foundVod = true;
          res.status(200).json(data.youth_movies[i]);
        }
      }
      if(!foundVod)
        res.status(200).json({"err": "vod not found"});
  });
// app.all('/getMoviesByDateAndDuration/', (req,res) => {
//      console.log(`recieved: ${req.params.year} and ${req.params.duration}`);
//      let foundVod = false;
//      var result = [];
//      for(let i in data.youth_movies) {
//         var movie = data.youth_movies[i];
//         if((movie.year == req.params.year) && (movie.duration >= req.params.duration)) {
//           console.log(`found: ${movie.name}`);
//           foundVod = true;
//           result.push(data.youth_movies[i]);
//         }
//       }
//      for(let i in data.youth_recorded) {
//         var movie = data.youth_recorded[i];
//         if((movie.year == req.params.year) && (movie.duration >= req.params.duration)) {
//           console.log(`found: ${movie.name}`);
//           foundVod = true;
//           result.push(data.youth_recorded[i]);
//         }
//       }
//       if(!foundVod) {
//         res.status(200).json({"err": "vod not found"});
//       }
//       res.status(200).json(result);
//   });
app.all('*', function(req, res) {
  res.send(`Got lost? This is a friendly 404 page :)`);
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});