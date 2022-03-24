const {
    Schema,
    model
} = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const meetupSchema = new Schema({
    meetupText: {
        type: String,
        required: "You need to enter a meetup!",
        minlength: 1,
        maxlength: 500,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    username: {
        type: String,
        required: true,
    },
}, {
    toJSON: {
        getters: true,
    },
});

const Meetup = model("Meetup", meetupSchema);

module.exports = Meetup;
