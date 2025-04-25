import Todo from "../models/todo.model.js";

export const GetTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    if (todos){
        res.json({success : true , message : todos})
    }
  } catch (error) {
    console.log(error);
    res.send("Error while fetching todos.")
  }
};
export const AddTodo = async (req,res) => {
    const newTodo = new Todo({
        text : req.body.text
    })
    try {
        const todoAdded = await newTodo.save();
        if (todoAdded){
            res.json({success : true , message : "Todo Added"});
            console.log(todoAdded,"todoAdded")
        } 
    } catch (error) {
        console.log(error);
        res.json({success : false , message : "Failed to Add Todo"});
    }
    console.log(newTodo,"newTodo")
};
export const DeleteTodo = async (req,res) => {
    try {
        const todoDeleted = await Todo.findByIdAndDelete(req.params.id);
        if (todoDeleted){
            res.json({success : true , message : "Todo Deleted"});
            console.log(todoDeleted,"todoDeleted")
        }
    } catch (error) {
        res.json({success : false , message : "Failed to delete Todo"});
    }   
    
};
export const UpdateTodo = async(req,res) => {
    try {
        const todoUpdated = await Todo.findByIdAndUpdate(req.params.id, req.body, {new : true});
        if(todoUpdated){
            res.json({success : true , message : "Todo Updated"});
            console.log(todoUpdated,"todoUpdated")
        }
    } catch (error) {
        res.json({success : false , message : "Failed to Update Todo"});
    }
};
