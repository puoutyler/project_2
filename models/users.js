const mongoose = require('mongoose')
const {Schema, model} = mongoose

const userSchema = new Schema ({
    username: {type: String, unique: true, require: true},
    password: {type: String, require: true}
})

const User = model('User', userSchema);

module.exports = User;