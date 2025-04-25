import { Router } from "express";
import { AddTodo, DeleteTodo, GetTodos, UpdateTodo } from "../controllers/todo.controller.js";

const TodoRoutes = Router();

TodoRoutes.get("/get-todos",GetTodos)
TodoRoutes.post("/add-todo",AddTodo)
TodoRoutes.post("/delete-todo/:id",DeleteTodo)
TodoRoutes.patch("/update-todo/:id",UpdateTodo)

export default TodoRoutes;