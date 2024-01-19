import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import MainComp from "./components/MainComp";
import ViewTodos from "./pages/ViewTodos";
import SearchTodos from "./pages/SearchTodos";
const App = () => {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<Routes>
					<Route element={<MainComp />}>
						<Route path="/" element={<HomePage />} />
						<Route path="/todo-search" element={<SearchTodos />} />
						<Route path="/todo-view" element={<ViewTodos />} />
						<Route
							path="*"
							element={<h1>What you talking about? There is nothing here</h1>}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</RecoilRoot>
	);
};
export default App;
