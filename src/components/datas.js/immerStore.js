import { create } from "zustand";
import { produce } from "immer";
const useTodoStore = create((set) => ({
  todos: {
    "82471c5f-4207-4b1d-abcb-b98547e01a3e": {
      id: "82471c5f-4207-4b1d-abcb-b98547e01a3e",
      title: "Learn Zustand",
      done: false,
    },
    "354ee16c-bfdd-44d3-afa9-e93679bda367": {
      id: "354ee16c-bfdd-44d3-afa9-e93679bda367",
      title: "Learn Vite",
      done: false,
    },
    "771c85c5-46ea-4a11-8fed-36cc2c7be344": {
      id: "771c85c5-46ea-4a11-8fed-36cc2c7be344",
      title: "Learn Tanstack",
      done: false,
    },
    "363a4bac-083f-47f7-a0a2-aeeee153a99c": {
      id: "363a4bac-083f-47f7-a0a2-aeeee153a99c",
      title: "Learn async await",
      done: false,
    },
  },
  updateTodoTitle: (todoId, newTitle) =>
    set(
      produce((state) => {
        console.log(state)
        state.todos[todoId].title = newTitle;
      })
    ),
  toggleTodoDone: (todoId) =>
    set(
      produce((state) => {
        state.todos[todoId].done = !state.todos[todoId].done;
      })
    ),

  items: [
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
  ],
  addItem: (newItem) =>
    set(
      produce((state) => {
        state.items.push(newItem);
      })
    ),
  updateItemText: (itemId, newText) =>
    set(
      produce((state) => {
        const itemIndex = state.items.findIndex((item) => {
          return item.id === itemId;
        }
        );
        if (itemIndex !== -1) {
          state.items[itemIndex].text = newText;
        }
      })
    ),
  removeItem: (itemId) =>
    set(
      produce((state) => {
        state.items = state.items.filter((item) => item.id !== itemId);
      })
    ),
    list:[1,2,3,4],
    setList:(itemIndex)=>{
        set((state)=>{
            state.list[itemIndex]=99
        })
    }
}));

export default useTodoStore;
