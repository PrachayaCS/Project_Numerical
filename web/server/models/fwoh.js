const mongoose = require('mongoose')
const Schema = mongoose.Schema

const fwoh = new Schema(
    {
        fx: { type: String, required: true },
        d: { type: String, required: true },
        h: { type: String, required: true },
        x: { type: String, required: true }
    }
)

module.exports = mongoose.model('fwohs', fwoh)