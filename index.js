const server = require('./server')
// const db = require()

const port = process.env.PORT || 0000

if (!module.parent) {
server.listen(port, () => {
  console.log(`listening @ http://localhost:${port}`);
})
}
