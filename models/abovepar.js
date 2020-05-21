const {Schema, model} = require('mongoose');

const scoreSchema = new Schema({
    course: {type: String, require: true},
    front: {type: Number, require: true},
    back: {type: Number, require: true},
    overall: {type: Number, require: true},
    notes: String
},
    {timestamps: true}
)

module.exports = model('score', scoreSchema)