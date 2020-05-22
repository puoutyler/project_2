const {Schema, model} = require('mongoose');

const scoreSchema = new Schema({
    course: {type: String, required: true},
    front: {type: Number, required: true},
    back: {type: Number, required: true},
    overall: {type: Number, required: true},
    notes: String
},
    {timestamps: true}
)

module.exports = model('score', scoreSchema)