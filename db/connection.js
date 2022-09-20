const mongoose = require('mongoose')
require('dotenv').config()

// added comment
const mongoURI = 
  process.env.NODE_ENV === 'production'
    ?
      process.env.DB_URL
    :
      process.env.DEV_DB_URL
// mongoose.Promise = Promise

mongoose.connect(mongoURI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then((conn) => {
	console.log(`connected to mongodb on ${conn.connections[0].name} db`)
})
.catch(err => {
	console.error(err)
})

module.exports = mongoose