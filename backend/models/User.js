const mongoose = require('mongoose');

const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model('user', UserSchema);
//model is the one jiske through hum insert karwwaayenge user ka data. It is wrapper of Schema. CRUD operations can be done using Model 