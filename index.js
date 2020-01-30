const server = require('./server')
// const db = require()

const port = process.env.PORT || 4000

if (!module.parent) {
server.listen(port, () => {
  console.log(`listening @ http://localhost:${port}`);
})
}

server.get("/", (req, res) => {
    res.send("<h2>BACK END BUILD WEEK")
})