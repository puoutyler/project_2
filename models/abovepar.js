const {Schema, model} = require('mongoose');

const scoreSchema = new Schema({
    course: String,
    front: Number,
    back: Number,
    overall: Number
},
    {timestamps: true}
)

module.exports = model('score', scoreSchema)