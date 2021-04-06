require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')

// @Connect DB Mongoose
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:lionhuynh@mern-learning-managemen.tkf7x.mongodb.net/MERN-Learning-Management-DB?retryWrites=true&w=majority`,
        {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        })
        console.log('Mongodb connected')
    } catch (error) {
        console.log('Mongodb connect failed')
        process.exit(1)
    }
}
connectDB()

const app = express()
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/posts', postRouter)

const PORT = process.env.SERVER_PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
