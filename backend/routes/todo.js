const { Router } = require("express");
const router = Router();
const zod = require("zod");

const { Todo } = require("../db/");

router.get("/getall", async (req, res) => {
	const todos = await Todo.find({});
	res.json({
		todos,
	});
});

router.post("/create", async (req, res) => {
	const todoSchema = zod.object({
		title: zod.string(),
		desc: zod.string(),
		assocDate: zod.string(),
	});
	const currentTimeStamp = new Date();
	if (todoSchema.safeParse(req.body).success) {
		const todo = req.body;
		const newTodo = new Todo({
			title: todo.title,
			desc: todo.desc,
			assocDate: todo.assocDate,
			timestamp: currentTimeStamp,
		});
		await newTodo.save();
	} else {
		res.status(400).json({
			error: "INVAILD BODY FORMAT",
		});
		return;
	}
	res.json({
		message: "Todo created Successfully",
	});
});

router.post("/getspecific", async (req, res) => {
	const todoFilter = req.query.filter || "";
	console.log(todoFilter);
	try {
		if (todoFilter) {
			const todo = await Todo.find({
				title: { $regex: todoFilter },
			});

			if (todo) {
				res.json({
					todo: todo,
				});
			} else {
				res.status(404).json({
					error: "TODO NOT FOUND",
				});
			}
		} else {
			res.status(400).json({
				error: "TODO ID NOT FOUND IN QUERY",
			});
		}
	} catch (error) {
		res.status(500).json({
			error: "BAD TODO ID",
		});
	}
});

router.post("/delete", async (req, res) => {
	const todoId = req.query.id;
	await Todo.findByIdAndDelete(todoId);
	if (todoId) {
		res.json({
			message: "Todo deleted successfully",
		});
		return;
	}
	res.status(400).json({
		error: "TODO ID NOT FOUND IN QUERY",
	});
});

router.post("/update", async (req, res) => {
	const todoSchema = zod.object({
		title: zod.string(),
		desc: zod.string(),
		assocDate: zod.string(),
	});
	const todoId = req.query.id;
	const currentTimeStamp = new Date();
	if (todoSchema.safeParse(req.body).success) {
		if (todoId) {
			const todo = req.body;
			todo.timestamp = currentTimeStamp;
			await Todo.findByIdAndUpdate(todoId, todo);
			res.json({
				message: "Todo updated successfully",
			});
			return;
		}
		res.status(400).json({
			error: "TODO ID NOT FOUND IN QUERY",
		});
		return;
	}
	res.status(400).json({
		error: "INVAILD BODY FORMAT",
	});
});

module.exports = router;
