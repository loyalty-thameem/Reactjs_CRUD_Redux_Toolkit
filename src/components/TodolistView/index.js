import React from "react";
import { Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodoData,
  doneTodoPost,
  updateTodoData
} from "../../features/slice/todoSlice";

export function TodolistView() {
  const todoListData = useSelector((state) => state.todoData);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodoData(id));
  };
  const handleUpdate = (todo) => {
    dispatch(updateTodoData(todo));
  };
  const handleDone = (todo) => {
    dispatch(doneTodoPost(todo));
  };

  return (
    <>
      {todoListData?.map((item, index) => (
        <Container key={index}>
          <p
            style={
              item.complete
                ? { textDecorationLine: "line-through" }
                : { textDecorationLine: "" }
            }
          >
            {item.title}
          </p>
          <Button
            variant="success"
            className="h-25 mx-2 mb-1"
            onClick={() => handleDone(item)}
          >
            {item.complete ? "Undone" : "Done"}
          </Button>
          <Button
            variant="info"
            className="h-25 mx-2 mb-1"
            onClick={() => handleUpdate(item)}
          >
            Update
          </Button>
          <Button
            variant="warning"
            className="h-25 mb-1"
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </Button>
        </Container>
      ))}
    </>
  );
}
