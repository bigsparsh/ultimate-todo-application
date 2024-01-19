import { useRecoilValue } from "recoil";
import { pageAtom } from "../atoms";

const HomePage = () => {
	const currentPage = useRecoilValue(pageAtom);
	return <h1>{currentPage}</h1>;
};

export default HomePage;
