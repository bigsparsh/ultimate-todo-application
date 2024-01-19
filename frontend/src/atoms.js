import { atom, atomFamily, selectorFamily } from "recoil";
import axios from "axios";
export const pageAtom = atom({
	key: "pageAtom",
	default: "HomePage",
});
export const todos = atomFamily({
	key: "todoAtomFamily",
	default: selectorFamily({
		key: "todoSelectorFamily",
		get:
			() =>
			async ({ get }) => {
				const todos = axios.get("http://localhost:3000/todo/getall");
				return todos;
			},
	}),
});
export const aiText = atom({
	key: "aiTextAtom",
	default: "",
});
