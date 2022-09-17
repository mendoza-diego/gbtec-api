const db = require('./db.json')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

const getRandom = (res) => {
  return res.jsonp(db.unsplash.results[Math.floor(Math.random() * db.unsplash.results.length)]);
}

server.get('/photos', (req, res) => {
  return res.jsonp(db.unsplash.results);
})

server.get('/photos/random', (req, res) => {
  getRandom(res);
})

server.get('/search/photos', (req, res) => {
  return res.jsonp(db.unsplash);
})

server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})