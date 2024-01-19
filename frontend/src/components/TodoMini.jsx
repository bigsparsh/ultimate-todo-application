const TodoMini = ({ title, desc, assocDate, id }) => {
	return (
		<div className="w-full py-3 px-5 flex gap-5 bg-emerald-950/10 rounded-xl items-center">
			<i className="fa-solid fa-check text-2xl" />
			<div className="text">
				<h1 className="text-lg">{title}</h1>
				<p className="text-sm font-sans">{desc}</p>
			</div>
		</div>
	);
};
export default TodoMini;
