var express = require('express')
var path = require('path')
var app = express()

var port = process.env.PORT || 3000;

//设置模板引擎
app.set('view engine', 'ejs')

//引入路由模板
var routes = require('./routes')

//静态资源托管
app.use(express.static(path.join(__dirname, 'public')))

//home page
app.get('/', routes.home)

//movie_single
app.get('/star_wars_episode/:episode_number?', routes.movie_single)

//not Found
app.get('*', routes.notFound);


app.listen(port, function(){
  console.log('App server listening on port ' + port)
})
