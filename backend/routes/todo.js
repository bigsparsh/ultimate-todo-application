const { Router } = require("express");
const router = Router();

const { Todo } = require("../db/");

router.get("/getall", async (req, res) => {
	const todos = await Todo.find({});
	res.json({
		todos,
	});
});

module.exports = router;
