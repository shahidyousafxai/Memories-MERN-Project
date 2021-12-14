import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv'
const app = express()
dotenv.config()

app.use(bodyParser.json({ limit: '50mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(cors())

app.use('/posts', postRoutes)

// const CONNECTION_URL =
//   'mongodb+srv://shahid:asdfghjkl@mycluster.rudzs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server Running at ${PORT}`)))
  .catch((err) => console.log(`${err} server did not connect`))
