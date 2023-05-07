const mongoose =require("mongoose")

const connectdb = () => {
    try {
        mongoose.connect('mongodb://localhost:27017/TourApp')
        console.log('db connected')
    } catch (error) {
        console.log(err)
    }
}

module.exports = connectdb