const API_KEY = "AIzaSyByNdIJ2UPr6DKa3UYSbjPf5UJKXbaRy_A";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { aiText } from "../atoms";
import axios from "axios";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const TodoFull = ({ title, desc, assocDate, id, timestamp, update }) => {
	const currentTodo = useRef();
	const aiTextR = useSetRecoilState(aiText);
	const aiThing = async () => {
		aiTextR(<i className="fa-solid fa-spinner animate-spin" />);

		const result = await model.generateContent(
			`Make a positive comment about this todo "${title}", answer in 3 line text only without breaklines`
		);
		aiTextR(result.response.text());
	};
	const deleteTodo = async () => {
		await axios.post(`http://localhost:3000/todo/delete?id=${id}`);
		update();
	};
	return (
		<form
			className="w-full flex gap-5 bg-emerald-950/10 rounded-xl items-center focus:ring-4 ring-emerald-950 outline-none"
			tabIndex="0"
			onFocus={aiThing}
		>
			<i className="fa-solid rounded-xl text-5xl fa-check aspect-square grid place-items-center bg-gradient-to-tr from-emerald-900 to-emerald-700 text-emerald-100 h-full" />
			<div className="text grow px-3 py-3">
				<h1 className="text-2xl leading-7">{title}</h1>
				<p className="text-lg font-sans leading-5">{desc}</p>
				<p className="text-lg leading-5 mb-2">{assocDate}</p>
				<p className="text-sm opacity-75 leading-4">
					This todo was made at {timestamp}
				</p>
				<p className="text-sm opacity-75 leading-4">Todo ID: {id}</p>
			</div>
			<div className="buttons flex flex-col gap-3 pr-3">
				<button
					type="submit"
					className="text-xl text-white p-2 rounded-lg bg-emerald-800"
					onClick={deleteTodo}
				>
					<i className="fa-solid fa-trash" />
				</button>
				<button className="text-xl text-white p-2 rounded-lg bg-emerald-800">
					<i className="fa-solid fa-pen" />
				</button>
			</div>
		</form>
	);
};
export default TodoFull;
