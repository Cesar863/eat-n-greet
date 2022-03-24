const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// const meetupSchema = new Schema({
//     meetupID: {
//         type: String,
//         required: true,
//     },
//     username: {
//         type: String,
//         required: true,
//     },
//     title: {
//         type: String,
//         required: true,
//     },
//     body: {
//         type: String,
//         required: true
//     },
// });
const meetupSchema = new Schema({
    meetupText: {
        type: String,
        required: "You need to enter a meetup!",
        minlength: 1,
        maxlength: 280,
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
