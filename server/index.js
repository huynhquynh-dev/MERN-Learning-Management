const express = require('express')
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://lionhuynh:lionhuynh@mern-learning-managemen.tkf7x.mongodb.net/MERN-Learning-Management-DB?retryWrites=true&w=majority`,
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

app.get('/', (req, res) => {res.send('hello world')})

const PORT = 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))