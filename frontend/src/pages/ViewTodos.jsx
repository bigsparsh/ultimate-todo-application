import { useRecoilValue, useSetRecoilState } from "recoil";
import { aiText, todos } from "../atoms";
import TodoFull from "../components/TodoFull";
import { useState } from "react";

const ViewTodos = () => {
	const todoList = useRecoilValue(todos());
	const [getUpdate, setUpdate] = useState(false);
	const update = () => {
		setUpdate((c) => !c);
	};
	return (
		<div className="p-5 w-full">
			<h1 className="text-4xl text-emerald-900">Your Todos</h1>
			<div className="todos py-5 flex flex-col gap-3 px-2 overflow-auto h-[700px]">
				{todoList.data.todos.map((ele) => (
					<TodoFull
						title={ele.title}
						desc={ele.desc}
						assocDate={ele.assocDate}
						timestamp={ele.timestamp}
						id={ele._id}
						key={ele._id}
						update={update}
					/>
				))}
			</div>
		</div>
	);
};

export default ViewTodos;
