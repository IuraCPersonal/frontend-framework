import { createComponent } from "../../framework";
import { div } from "../../framework/element";
import { onClick } from "../../framework/event";

const methods = {
  increase: (state) => ({ ...state, count: state.count + 1 }),
};

const initialState = { count: 1 };

const template = ({ count, methods }) =>
  div`${onClick(() => {
    methods.increase();
  })} Counter: ${count}`;

export const Counter = createComponent({ template, methods, initialState });
