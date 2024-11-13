import mongoose,  { Schema, SchemaTypes, model } from "mongoose";

const taskSchema = new Schema({
    taskName: { type: String, required: true },
    priority: { type: Number, required: true },
    isDone: { type: Boolean, default: false },
},  
    { timestamps: true }
)

const Task = model("task", taskSchema)

export default Task;