import Task from "@/mongoose/task_type";
import { Console } from "console";

export const updateTask  = async (_ : unknown, {taskId, taskName, priority, isDone}: {taskId : string, taskName:string, priority: number, isDone: boolean}) => {
    console.log(taskId, taskName, priority, isDone)
    return await Task.findByIdAndUpdate(taskId, {taskName, priority, isDone}, { new: true, omitUndefined: true } )
}