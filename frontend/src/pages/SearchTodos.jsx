import { useRef, useState } from "react";
import TodoMini from "../components/TodoMini";
import axios from "axios";

const SearchTodos = () => {
	const todoSearch = useRef();
	const [todo, setTodo] = useState(
		<h1 className="px-5 py-3 rounded-xl bg-emerald-950/10 font-sans text-2xl grid place-items-center">
			Enter a valid ID above to search for the TODO
		</h1>
	);
	var timeout;
	const search = () => {
		if (todoSearch.current.value.length == 24) {
			clearTimeout(timeout);
			timeout = setTimeout(async () => {
				await axios
					.post(
						`http://localhost:3000/todo/getspecific?id=${todoSearch.current.value}`
					)
					.then((res) => {
						const td = res.data.todo;
						setTodo(
							<TodoMini
								title={td.title}
								desc={td.desc}
								assocDate={td.assocDate}
								id={td._id}
								key={td._id}
							/>
						);
					})
					.catch((err) => {
						setTodo(
							<h1 className="px-5 py-3 rounded-xl bg-emerald-950/10 text-red-500 text-xl font-bold font-sans grid place-items-center">
								Give Valid ID
							</h1>
						);
					});
			}, 2000);
		}
	};
	var todos = {};
	return (
		<div className="p-5 w-full">
			<h1 className="text-4xl text-emerald-900">Search Todos</h1>
			<input
				type="text"
				ref={todoSearch}
				onChange={search}
				className="mb-5 w-full px-5 py-2 text-xl rounded-lg bg-emerald-50 mt-3 outline-none focus:ring-4 font-sans ring-1 ring-emerald-500"
			/>
			{todo}
		</div>
	);
};
export default SearchTodos;
