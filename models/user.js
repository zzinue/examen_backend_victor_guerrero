const mongoose = require('mongoose')
const autoIncrement=require('mongoose-auto-increment')

const userSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

autoIncrement.initialize(mongoose.connection)
userSchema.plugin(autoIncrement.plugin,'user')

const user=mongoose.model('user',userSchema)
module.exports=user