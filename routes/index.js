var moviesJSON = require('../movies.json')

//home
exports.home = function(req, res){
  var movies = moviesJSON.movies
  res.render('home', {
    title: "star_wars_movies",
    movies: movies
  })
}

//movie_single
exports.movie_single = function(req, res){
  var episode_number = req.params.episode_number
  var movies = moviesJSON.movies
  var length = movies.length

  if(episode_number >= 1 && episode_number <= length){
    var movie = movies[episode_number - 1]
    var title = movie.title
    var main_characters = movie.main_characters
    res.render("movie_single", {
      movies: movies,
      title: title,
      movie: movie,
      main_characters: main_characters
    })
  }
}

//not Found
exports.notFound = function(req, res){
  var movies = moviesJSON.movies
  res.render("notFound",{
    movies: movies,
    title: "Sorry, This is not the page you are looking for!"
  })
}
