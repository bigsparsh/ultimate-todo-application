import { RecoilRoot } from "recoil";
import "./index.css";
import HomePage from "./pages/HomePage";
const App = () => {
	return (
		<RecoilRoot>
			<h1 className="text-red-500">THis is my application</h1>
			<HomePage />
		</RecoilRoot>
	);
};
export default App;
