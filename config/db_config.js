const mongoose = require('mongoose')
const debugDb = require('debug')('app:db')

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })

    debugDb('Connected to MongoDB')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB
