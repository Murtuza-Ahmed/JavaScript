import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Todo = {
    done: boolean,
    text: string
}
const initialState: Todo[] = []

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const todoObject: Todo = { done: false, text: action.payload }
            state.push(todoObject);
        },
        doneTodo: (state, action: PayloadAction<number>) => {
            state[action.payload].done = !state[action.payload].done;
        }
    }
});

export const { addTodo, doneTodo } = todoSlice.actions;
export default todoSlice.reducer;