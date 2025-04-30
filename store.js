// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: {}, // key: task id, value: task node with prev/next
  head: null,
  tail: null,
  current: null,
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const id = Date.now().toString();
      const newTask = {
        id,
        text: action.payload,
        completed: false,
        prev: state.tail,
        next: null,
      };

      state.list[id] = newTask;

      if (state.tail) {
        state.list[state.tail].next = id;
      }

      if (!state.head) {
        state.head = id;
        state.current = id;
      }

      state.tail = id;
    },

    toggleTask: (state) => {
      const current = state.list[state.current];
      if (current) current.completed = !current.completed;
    },

    deleteTask: (state) => {
      const currentId = state.current;
      if (!currentId) return;

      const { prev, next } = state.list[currentId];

      if (prev) state.list[prev].next = next;
      else state.head = next;

      if (next) state.list[next].prev = prev;
      else state.tail = prev;

      delete state.list[currentId];
      state.current = next || prev || null;
    },

    nextTask: (state) => {
      const next = state.list[state.current]?.next;
      if (next) state.current = next;
    },

    prevTask: (state) => {
      const prev = state.list[state.current]?.prev;
      if (prev) state.current = prev;
    },
  },
});

export const { addTask, toggleTask, deleteTask, nextTask, prevTask } = taskSlice.actions;

export const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
  },
});
