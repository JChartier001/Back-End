const server = require('./server')
// const db = require()

const port = process.env.PORT || 4000

server.get('/', (req, res) => {
    res.send("<h2>BACK END BUILD WEEK</h2>")
})


if (!module.parent) {
server.listen(port, () => {
  console.log(`listening @ http://localhost:${port}`);
})
}
