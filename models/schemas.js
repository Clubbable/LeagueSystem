const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    Email: {
        type: String,
        required:[true, "Email field is required!"]
    },
    AccountName: {
        type: String,
        required:[true, "AccountName field is required!"]
    },
    Region: {type: String},
    Tier: {type: String},
    Division: {type: String},
    MatchMakeRating: {type: Number},
    InGame: {type: Boolean},
    Online: {type: Boolean}
});

const PartySchema = new Schema({
    PartyName: {type: String},
    Members: {
        type: [PlayerSchema],
        required:[true, "Members field is required!"]
    },
    PlayerAverageMMR: {type: Number},
    OpponentParty: {type: this}
});

const Player = mongoose.model("player", PlayerSchema);
const Party = mongoose.model("party", PartySchema);

const Schemas = {"PlayerSchema": Player, "PartySchema": Party};

module.exports = Schemas;