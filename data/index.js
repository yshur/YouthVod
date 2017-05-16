'use strice';//JS engine use strict parsing
var data = require('./youthvod.json');

exports.getAllVodDB = function() {
	console.log('return all vod database');
	return data;
};
exports.getAllYouthItems = function() {
	var result = [];
	for(let i in data.youth_movies) {
		var movie = data.youth_movies[i];
		var movieData = {'name': movie.name, 'year': movie.year,
						'rating': movie.rating, 'director': movie.director};
		console.log(movie.name);
		result.push(movieData);
	}
	for(let i in data.youth_recorded) {
		var movie = data.youth_recorded[i];
		var movieData = {'name': movie.name, 'year': movie.year};
		console.log(movie.name);
		result.push(movieData);
	}
	for(let i in data.youth_series) {
		var series = data.youth_series[i];
		var seasonArray = [];
		for(let j in series.seasons) {
			var season = series.seasons[j];
			var episodeArray = [];
			for(let k in season.episodes) {
				var episode = season.episodes[k];
				var episodeData = {
		'title': `season ${season.season_num} episode ${episode.episode_num}`,
									'name': episode.name};
				episodeArray.push(episodeData);
			}
			var seasonData = {'name': `season ${season.season_num}`, 
								'num_of_episodes': episodeArray.length,
								'episodes': episodeArray};
			seasonArray.push(seasonData);
		}
		var seriesData = {'name': series.name, 'year': series.year,
							'num_of_seasons': seasonArray.length,
							'seasons': seasonArray};
		console.log(series.name);
		result.push(seriesData);
	}
	console.log('return all vod items with important properties');
	return result;
};
exports.getStarData = function(star_name) {
	var foundItems = [];
	for(let i in data.youth_movies) {
		var movie_stars = data.youth_movies[i].stars;
		for(let j in movie_stars) {
			if(star_name == movie_stars[j]) {
				console.log(data.youth_movies[i].name);
				foundItems.push(data.youth_movies[i]);
			}
		}
	}
	for(let i in data.youth_series) {
		var series_stars = data.youth_series[i].stars;
		for(let j in series_stars) {
			if(star_name == series_stars[j]) {
				console.log(data.youth_series[i].name);
				foundItems.push(data.youth_series[i]);
			}
		}
	}
	console.log(`return items that ${star_name} participate in`);
	if(foundItems.length == 0) {
		console.log(`${star_name} not found`);
		foundItems.push({"err":"VOD item is not found"});
	}
	return foundItems;
	};
exports.getItemsByYearAndMinDuration = function(year, time) {
	var foundItems = [];
	for(let i in data.youth_movies) {
		if((year == data.youth_movies[i].year) && (time <= data.youth_movies[i].duration)) {
			console.log(data.youth_movies[i].name);
			foundItems.push(data.youth_movies[i]);
		}
	}
	for(let i in data.youth_recorded) {
		if((year == data.youth_recorded[i].year) && (time <= data.youth_recorded[i].duration)) {
			console.log(data.youth_recorded[i].name);
			foundItems.push(data.youth_recorded[i]);
		}
	}
	for(let i in data.youth_series) {
		if(year == data.youth_series[i].year) {
			console.log(data.youth_series[i].name);
			var series = data.youth_series[i],
					seasonArray = [];
			for(let j in series.seasons) {
				var season = series.seasons[j],
						episodeArray = [];
				for(let k in season.episodes) {
					var episode = season.episodes[k];
					if (time <= episode.duration) {
						console.log(episode.name);
						episodeArray.push(episode);
					}
				}

				var seasonData = {'name': `season ${season.season_num}`, 
									'num_of_episodes': episodeArray.length,
									'episodes': episodeArray};
				seasonArray.push(seasonData);
			}
			var seriesData = {'name': series.name, 'year': series.year,
								'num_of_seasons': seasonArray.length,
								'description': series.description,
								'stars': series.stars,
								'seasons': seasonArray};
			foundItems.push(seriesData);
		}		
	}
	if(foundItems.length == 0) {
		console.log(`items not found from ${year} that their duration above ${time}`);
		foundItems.push({"err":"VOD item is not found"});
	}
	console.log(`return items from ${year} that their duration above ${time}`);
	return foundItems;
	};

