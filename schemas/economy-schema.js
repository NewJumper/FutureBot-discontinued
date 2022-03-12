const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const economySchema = mongoose.Schema({
    userId: reqString,
    guildId: reqString,
    bits: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('economy', economySchema)