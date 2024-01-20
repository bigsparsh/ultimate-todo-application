import { NavLink, Outlet } from "react-router-dom";
import { aiText } from "../atoms";
import { useRecoilValue } from "recoil";

const MainComp = () => {
	const aiTextR = useRecoilValue(aiText);
	return (
		<div className="h-screen gap-5 w-screen flex flex-col font-serif bg-gradient-to-b from-emerald-950 to-emerald-900 text-emerald-50">
			<div className=" relative grid place-items-center mt-10 mb-5">
				<div className="backline absolute h-5 w-[450px] bg-emerald-50 rounded-full"></div>
				<div className="text-5xl z-50 w-fit py-5 rounded-3xl px-7 text-emerald-950 bg-emerald-50 relative">
					<div className="top-left rounded-br-3xl h-7 absolute aspect-square shadow-[7px_7px_0_rgb(236_253_245)] top-[7.5px] left-[-26px]"></div>
					<div className="top-left rounded-tr-3xl h-7 absolute aspect-square shadow-[7px_-7px_0_rgb(236_253_245)] bottom-[7.5px] left-[-26px]"></div>
					<div className="top-left rounded-bl-3xl h-7 absolute aspect-square shadow-[-7px_7px_0_rgb(236_253_245)] top-[7.5px] right-[-26px]"></div>
					<div className="top-left rounded-tl-3xl h-7 absolute aspect-square shadow-[-7px_-7px_0_rgb(236_253_245)] bottom-[7.5px] right-[-26px]"></div>
					Ultimate Todo
				</div>
			</div>
			<div className=" grow flex gap-5 px-10 mb-10">
				<div className="main-area font-sans tracking-tight font-light p-10 text-4xl gap-3 flex flex-col basis-3/12 ring-1 ring-emerald-700 rounded-xl bg-emerald-900/50 h-full">
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? "italic font-bold" : null)}
					>
						<div className="flex gap-5 items-center justify-start">
							<i className="fa-solid fa-home text-3xl" />
							<p>Home Page</p>
						</div>
					</NavLink>
					<NavLink
						to="/todo-view"
						className={({ isActive }) => (isActive ? "italic font-bold" : null)}
					>
						<div className="flex gap-5 items-center justify-start">
							<i className="fa-solid fa-eye text-3xl" />
							<p>View Todos</p>
						</div>
					</NavLink>
					<NavLink
						to="/todo-suggestion"
						className={({ isActive }) => (isActive ? "italic font-bold" : null)}
					>
						<div className="flex gap-5 items-center justify-start">
							<i className="fa-solid fa-pen text-3xl" />
							<p>Todo Suggestions</p>
						</div>
					</NavLink>
					<NavLink
						to="/todo-search"
						className={({ isActive }) => (isActive ? "italic font-bold" : null)}
					>
						<div className="flex gap-5 items-center justify-start">
							<i className="fa-solid fa-magnifying-glass text-3xl" />
							<p>Todo Search</p>
						</div>
					</NavLink>
				</div>
				<div className="out-area flex basis-7/12 rounded-xl bg-emerald-50/90 h-full p-5 text-emerald-950">
					<Outlet />
				</div>
				<div className="ai-area flex basis-2/12 rounded-xl bg-emerald-50/90 h-fit p-5 text-emerald-950">
					<div className="text-3xl tracking-tight flex flex-col gap-3 justify-center">
						<h1>Gemini Says</h1>
						<p className="text-lg font-sans tracking-normal">{aiTextR}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default MainComp;
