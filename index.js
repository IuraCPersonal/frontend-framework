import { init } from "./framework";
import { Counter } from "./src/counter.js";

const count = 0;

init("#app", Counter({ count }));
