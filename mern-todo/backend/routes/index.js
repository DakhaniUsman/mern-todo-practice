import { Router } from "express";
import TodoRoutes from "./todo.route.js";

const AllRoutes = Router();

AllRoutes.use("/todos", TodoRoutes)

export default AllRoutes;