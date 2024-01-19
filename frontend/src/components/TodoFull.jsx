const TodoFull = ({ title, desc, assocDate, id, timestamp }) => {
	return (
		<div
			className="w-full flex gap-5 bg-emerald-950/10 rounded-xl items-center focus:ring-4 ring-emerald-950 outline-none"
			tabIndex="0"
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
		</div>
	);
};
export default TodoFull;
