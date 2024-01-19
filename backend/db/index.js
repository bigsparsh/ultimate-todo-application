const mongoose = require("mongoose");
mongoose.connect(
	"mongodb+srv://bigsparsh:NwWoiXldO0xO31uS@cluster0.maoq3bv.mongodb.net/ultimate-todo-application"
);

const todoSchema = mongoose.Schema({
	title: String,
	desc: String,
	assocDate: Date,
	timestamp: Date,
});
const eventSchema = mongoose.Schema({
	name: String,
	venue: String,
	assocDate: Date,
	timestamp: Date,
});

const Event = mongoose.model("Event", eventSchema);
const Todo = mongoose.model("Todo", todoSchema);

module.exports = { Event, Todo };
