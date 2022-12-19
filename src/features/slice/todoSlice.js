import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoData: [],
  singleTodoData: ""
};

const todoSlice = createSlice({
  name: "createTodo",
  initialState,
  reducers: {
    // WE CAN DESTRUCTURE THE ACTION LIKE {payload}
    createTodoPost: (state, action) => {
      // return {
      //   ...state,
      //   todoData: [action.payload,...state.todoData]
      // };
      state.todoData = [action.payload, ...state.todoData];
    },
    deleteTodoData: (state, action) => {
      // return {
      //   ...state,
      //   todoData: [...state.todoData].filter(
      //     (item, index) => item.id !== action.payload
      //   )
      // };
      state.todoData = [...state.todoData].filter(
        (item, index) => item.id !== action.payload
      );
    },
    doneTodoPost: (state, action) => {
      // return {
      //   ...state,
      //   todoData: [...state.todoData].map((item, index) =>
      //     item.id === action.payload.id
      //       ? { ...item, complete: !action.payload.complete }
      //       : item
      //   )
      // }
      state.todoData = [...state.todoData].map((item, index) =>
        item.id === action.payload.id
          ? { ...item, complete: !action.payload.complete }
          : item
      );
    },
    updateTodoData: (state, action) => {
      return {
        ...state,
        singleTodoData: [...state.todoData].find(
          (item, index) => item.id === action.payload.id
        ),
        todoData: [...state.todoData]?.map((item, index) =>
          item.id === action.payload.id
            ? (item = {
                id: action.payload.id,
                title: action.payload.title,
                complete: false
              })
            : { ...item }
        )
      };
      // state.singleTodoData:[...state.todoData].find((item,index)=>item.id === action.payload.id)),
      //       state.todoData =[...state.todoData].map((item,index)=>
      //       item.id === action.payload.id?{item={id:action.payload.id,title:action.payload.title,complete:false}}:{...item})
    }
  }
});

export const {
  createTodoPost,
  deleteTodoData,
  doneTodoPost,
  updateTodoData
} = todoSlice.actions;
export default todoSlice.reducer;
