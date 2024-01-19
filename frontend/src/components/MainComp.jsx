import { NavLink, Outlet } from "react-router-dom";

const MainComp = () => {
	return (
		<div className="h-screen gap-5 w-screen flex flex-col font-serif bg-gradient-to-b from-emerald-950 to-emerald-900 py-4 text-emerald-50">
			<div className=" relative grid place-items-center">
				<div className="backline absolute h-5 w-[450px] bg-emerald-50 rounded-full"></div>
				<div className="text-5xl z-50 w-fit py-5 rounded-3xl px-7 text-emerald-950 bg-emerald-50 relative">
					<div className="top-left rounded-br-3xl h-7 absolute aspect-square shadow-[7px_7px_0_rgb(236_253_245)] top-[7.5px] left-[-26px]"></div>
					<div className="top-left rounded-tr-3xl h-7 absolute aspect-square shadow-[7px_-7px_0_rgb(236_253_245)] bottom-[7.5px] left-[-26px]"></div>
					<div className="top-left rounded-bl-3xl h-7 absolute aspect-square shadow-[-7px_7px_0_rgb(236_253_245)] top-[7.5px] right-[-26px]"></div>
					<div className="top-left rounded-tl-3xl h-7 absolute aspect-square shadow-[-7px_-7px_0_rgb(236_253_245)] bottom-[7.5px] right-[-26px]"></div>
					Ultimate Todo
				</div>
			</div>
			<div className=" grow flex gap-5 p-10 ">
				<div className="main-area p-10 text-4xl gap-3 flex flex-col basis-3/12 ring-1 ring-emerald-700 rounded-xl bg-emerald-900/50 h-full">
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? "italic underline" : null)}
					>
						Home Page
					</NavLink>
					<NavLink
						to="/todo-view"
						className={({ isActive }) => (isActive ? "italic underline" : null)}
					>
						View Todos
					</NavLink>
					<NavLink
						to="/todo-suggestion"
						className={({ isActive }) => (isActive ? "italic underline" : null)}
					>
						Todo Suggestions
					</NavLink>
					<NavLink
						to="/to"
						className={({ isActive }) => (isActive ? "italic underline" : null)}
					>
						HomePage
					</NavLink>
				</div>
				<div className="out-area flex basis-7/12 rounded-xl bg-emerald-50/90 h-full p-5 text-emerald-950">
					<Outlet />
				</div>
				<div className="ai-area flex basis-2/12 rounded-xl bg-emerald-50/90 h-fit">
					dsf
				</div>
			</div>
		</div>
	);
};
export default MainComp;
