const Pool = require('pg').Pool
const pool = new Pool({
  user: 'test_user',
  host: 'localhost',
  database: 'beers',
  password: 'password',
  port: 5432,
});

// const dbUpdateQuery = pgClient.query('LISTEN beer_changed');
// const dbRemoveQuery = pgClient.query('LISTEN beer_removed');
// pgClient.on('notification', (payload) => {
//   console.log(payload);
// });

const getBeers = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM beers ORDER BY tapNumber ASC', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows);
      }
    })
  })
}

const aedes = require('aedes')()
const httpServer = require('http').createServer()
const ws = require('websocket-stream')
const port = 8888
const rows = []

const processNewRows = (newRows) => {
  aedes.publish({
    cmd: 'publish',
    qos: 0,
    topic: 'beers',
    payload: newRows,
    retain: true
  })
  rows = newRows;
}

const processDeletedRows = (deletedRows) => {
  

}

ws.createServer({ server: httpServer }, aedes.handle);

httpServer.listen(port, function () {
  console.log('server started and listening on port ', port)

  getBeers().then((rows) => {
    console.log(rows);
    processNewRows(rows);
  })
})
