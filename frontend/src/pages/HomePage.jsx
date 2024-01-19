import { useRef } from "react";
import TodoMini from "../components/TodoMini";
import axios from "axios";

const HomePage = () => {
	const title = useRef();
	const desc = useRef();
	const assocDate = useRef();

	const createTodo = () => {
		axios.post("http://localhost:3000/todo/create", {
			title: title.current.value,
			desc: desc.current.value,
			assocDate: assocDate.current.value,
		});
	};

	return (
		<div className="w-full">
			<div className="flex text-5xl p-3 justify-between items-center">
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
			<div className="flex text-5xl p-3 justify-between items-center mt-3">
				<h1 className="text-emerald-800">Your Todos</h1>
				<i className="fa-solid fa-caret-right py-2 px-5 text-2xl cursor-pointer bg-emerald-900 text-emerald-100 rounded-xl hover:bg-emerald-950" />
			</div>
			<div className="todos">
				<TodoMini />
			</div>
		</div>
	);
};

export default HomePage;
