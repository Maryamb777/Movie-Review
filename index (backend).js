import app from "./server.js"
import mongodb from "mongodb"
import ReviewsDAO from "./dao/reviewsDAO.js"

const MongoClient = mongodb.MongoClient
const mongo_username = process.env.maryamsocial777
const mongo_password = process.env["6GcvDZ3sojXllQrQ"];
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.u4gnm58.mongodb.net/?retryWrites=true&w=majority`

// specify port
const port = 5501

MongoClient.connect(
  uri,
  {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true
  })
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    await ReviewsDAO.injectDB(client)
    app.listen(port, () => {
      console.log(`listening on port ${port}`)
    })
  })