var mongoose = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose');

var AvailabilitySchema = new mongoose.Schema({
    
    open: {
        type: String
    },
    close: {
        type: String
    },
    dates: {
        type: Array,
    },
})
AvailabilitySchema.plugin(passportLocalMongoose)
module.exports = mongoose.model("Availability", AvailabilitySchema)