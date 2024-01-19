import { useRef, useState } from "react";
const API_KEY = "AIzaSyByNdIJ2UPr6DKa3UYSbjPf5UJKXbaRy_A";
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });
import TodoMini from "../components/TodoMini";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { aiText, todos } from "../atoms";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
	const setAiText = useSetRecoilState(aiText);
	const navigate = useNavigate();
	const todoList = useRecoilValue(todos());
	const title = useRef();
	const desc = useRef();
	const assocDate = useRef();

	var aiTimeout;
	const aiCheck = async () => {
		setAiText(<i className="fa-solid fa-spinner animate-spin" />);
		clearTimeout(aiTimeout);
		aiTimeout = setTimeout(async () => {
			if (title.current.value.length > 7) {
				const result = await model.generateContent(
					`Make a positive comment about this todo "${title.current.value}", answer in 3 line text only without breaklines`
				);

				setAiText(result.response.text());
			}
		}, 1000);
	};

	const createTodo = () => {
		axios.post("http://localhost:3000/todo/create", {
			title: title.current.value,
			desc: desc.current.value,
			assocDate: assocDate.current.value,
		});
		title.current.value = null;
		desc.current.value = null;
		assocDate.current.value = null;
	};

	return (
		<div className="w-full">
			<div className="flex text-4xl p-3 justify-between items-center">
				<h1 className="text-emerald-800">Create Todo</h1>
				<i
					onClick={createTodo}
					className="fa-solid fa-plus py-2 px-3 text-2xl cursor-pointer bg-emerald-900 text-emerald-100 rounded-xl hover:bg-emerald-950"
				/>
			</div>
			<div className="form bg-emerald-950/10 rounded-xl flex flex-col gap-2 text-xl px-10 py-5">
				<label htmlFor="title">Title</label>
				<input
					type="text"
					ref={title}
					onChange={aiCheck}
					id="title"
					className=" rounded-lg px-4 py-1 font-sans bg-emerald-50 ring-1 ring-emerald-200"
				/>
				<label htmlFor="desc">Description</label>
				<textarea
					id="desc"
					cols="30"
					rows="5"
					ref={desc}
					className=" rounded-lg px-4 py-1 font-sans bg-emerald-50 ring-1 ring-emerald-200"
				></textarea>
				<label htmlFor="assocDate">Asscociated Date:</label>
				<input
					type="date"
					id="assocDate"
					ref={assocDate}
					className=" rounded-lg px-4 py-1 font-sans bg-emerald-50 ring-1 ring-emerald-200"
				/>
			</div>
			<div className="flex text-4xl p-3 justify-between items-center mt-3">
				<h1 className="text-emerald-800">Your Todos</h1>
				<i
					onClick={() => {
						navigate("/todo-view");
					}}
					className="fa-solid fa-caret-right py-2 px-5 text-2xl cursor-pointer bg-emerald-900 text-emerald-100 rounded-xl hover:bg-emerald-950"
				/>
			</div>
			<div className="todos flex flex-col gap-3">
				{todoList.data.todos.map((ele, index) =>
					index <= 2 ? (
						<TodoMini
							title={ele.title}
							desc={ele.desc}
							assocDate={ele.assocDate}
							id={ele._id}
							key={ele._id}
						/>
					) : null
				)}
			</div>
		</div>
	);
};

export default HomePage;
