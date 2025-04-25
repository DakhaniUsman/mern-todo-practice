import mongoose from "mongoose";
import Todo from "../models/todo.model.js";
import Todo from "../models/todo.model.js";

export const GetTodos = (req, res) => {
  try {
    const todos = Todo.find();
    res.json(todos);
  } catch (error) {
    res.json({ sucess: false, message: "Error while fetching todos" });
  }
};

export const AddTodos = (req, res) => {
  const todo = new Todo({
    text: req.body.text,
  });
  try {
    const newTodo = todo.save();
    res.json({success : true , message : newTodo});
  } catch (error) {
    res.json({ sucess: false, message: "Error while fetching todos" })
  }
};
