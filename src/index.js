import { init } from "../framework/index.js";
import { Counter } from "./components/counter.js";

const count = 10;

init("#app", Counter({ count }));
