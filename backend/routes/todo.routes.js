import { Router } from "express";
import Todo from "../models/todo.model.js";

const router = Router();

router.get("/", async(req, res) => {
  try {
    const todos = await Todo.find();
    res.send("todos fethced ");
  } catch (error) {
    res.json({ success: false, message: "Error while fetching todos" });
  }
});

