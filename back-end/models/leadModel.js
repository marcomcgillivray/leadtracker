const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema(
    {
    name: {
        type: String,
    },
    aisle: {
        type: Number
    },
    gotItem: {
        type: Boolean,
        default: false
    }

}
)

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;