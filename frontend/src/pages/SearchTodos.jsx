import { useRef, useState } from "react";
import TodoMini from "../components/TodoMini";
import axios from "axios";

const SearchTodos = () => {
	const todoSearch = useRef();
	const [todo, setTodo] = useState([
		<h1 className="px-5 py-3 rounded-xl bg-emerald-950/10 font-sans text-2xl grid place-items-center">
			Enter a valid ID above to search for the TODO
		</h1>,
	]);
	var timeout;
	const search = () => {
		setTodo([
			<h1 className="px-5 py-3 rounded-xl bg-emerald-950/10 text-emerald-500 text-xl font-bold font-sans grid place-items-center">
				<i className="fa-solid fa-circle-notch animate-spin" />
			</h1>,
		]);
		clearTimeout(timeout);
		timeout = setTimeout(async () => {
			await axios
				.post(
					`http://localhost:3000/todo/getspecific?filter=${todoSearch.current.value}`
				)
				.then((res) => {
					const td = res.data.todo;
					setTodo(td);
				});
		}, 2000);
	};
	return (
		<div className="p-5 w-full ">
			<h1 className="text-4xl text-emerald-900">Search Todos</h1>
			<input
				type="text"
				ref={todoSearch}
				onChange={search}
				className="mb-5 w-full px-5 py-2 text-xl rounded-lg bg-emerald-50 mt-3 outline-none focus:ring-4 font-sans ring-1 ring-emerald-500"
			/>
			<div className="todos flex flex-col gap-3">
				{todo.map((ele) => (
					<TodoMini
						title={ele.title}
						desc={ele.desc}
						assocDate={ele.assocDate}
						timestamp={ele.timestamp}
						id={ele._id}
						key={ele._id}
					/>
				))}
			</div>
		</div>
	);
};
export default SearchTodos;
