const API_KEY = "AIzaSyByNdIJ2UPr6DKa3UYSbjPf5UJKXbaRy_A";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { aiText } from "../atoms";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const TodoFull = ({ title, desc, assocDate, id, timestamp, update }) => {
	const [edit, setEdit] = useState(false);

	const titleHtml = useRef();
	const descHtml = useRef();
	const assocDateHtml = useRef();

	// Generate AI comment on the todo
	const aiTextR = useSetRecoilState(aiText);
	const aiThing = async () => {
		if (!edit) {
			aiTextR(<i className="fa-solid fa-spinner animate-spin" />);

			const result = await model.generateContent(
				`Make a positive comment about this todo "${title}", answer in 3 line text only without breaklines`
			);
			aiTextR(result.response.text());
		}
	};
	// Deleting the todo
	const deleteTodo = async () => {
		await axios.post(`http://localhost:3000/todo/delete?id=${id}`);
		update();
	};
	// Updating the todo
	const updateTodo = async () => {
		await axios.post(`http://localhost:3000/todo/update?id=${id}`, {
			title: titleHtml.current.value,
			desc: descHtml.current.value,
			assocDate: assocDateHtml.current.value,
		});
		setEdit(false);
	};
	return (
		<form
			className="w-full flex gap-5 bg-emerald-950/10 rounded-xl items-center focus:ring-4 ring-emerald-950 outline-none"
			tabIndex="0"
			onFocus={aiThing}
			onSubmit={() => {
				edit ? updateTodo() : null;
			}}
		>
			<i className="fa-solid rounded-xl text-5xl fa-check aspect-square grid place-items-center bg-gradient-to-tr from-emerald-900 to-emerald-700 text-emerald-100 h-full" />
			<div className="text grow px-3 py-3 flex flex-col">
				{!edit ? (
					<>
						<h1 className="text-2xl leading-7">{title}</h1>
						<p className="text-lg font-sans leading-5">{desc}</p>
						<p className="text-lg leading-5 mb-2">{assocDate}</p>
					</>
				) : (
					<>
						<input
							type="text"
							className="text-2xl leading-7 ring-1 ring-emerald-900 rounded-lg px-3 py-1"
							contentEditable
							ref={titleHtml}
							defaultValue={title}
						/>

						<input
							type="text"
							className="text-lg font-sans leading-5 ring-1 ring-emerald-900 rounded-lg px-3 py-1"
							contentEditable
							ref={descHtml}
							defaultValue={desc}
						/>

						<input
							type="date"
							className="text-lg leading-5 mb-2 ring-1 ring-emerald-900 rounded-lg px-3 py-1"
							contentEditable
							ref={assocDateHtml}
							defaultValue={assocDate}
						/>
					</>
				)}
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
				{edit ? (
					<button
						type="submit"
						className="text-xl text-white p-2 rounded-lg bg-emerald-800"
					>
						<i className="fa-solid fa-pen" />
					</button>
				) : (
					<div
						className="text-xl text-white p-2 rounded-lg bg-emerald-800 cursor-pointer"
						onClick={() => {
							setEdit((c) => !c);
						}}
					>
						<i className="fa-solid fa-pen" />
					</div>
				)}
			</div>
		</form>
	);
};
export default TodoFull;
