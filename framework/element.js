import { h } from "snabbdom/h";

// extract initial value with a template key, some other will appear next ;)
const initialState = {
  template: "",
  on: {},
};

const createReducer = (args) => (acc, curr, index) => {
  const currentArg = args[index];

  /**
   * Here, we define the behavior of an event node and this
   * is where the type is important :D
   */
  if (currentArg && currentArg.type === "event") {
    return {
      ...acc,
      on: {
        click: currentArg.click,
      },
    };
  }

  return {
    ...acc,
    template: acc.template + curr + (args[index] || ""),
  };
};

const createElement =
  (tagName) =>
    (strings, ...args) => {
      const { template, on } = strings.reduce(createReducer(args), initialState);

      return {
        type: "element",
        template: h(tagName, { on }, template),
      };
    };

export const div = createElement("div");
export const p = createElement("p");
