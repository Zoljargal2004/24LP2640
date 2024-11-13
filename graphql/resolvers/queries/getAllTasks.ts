import Task from "@/mongoose/task_type"

export const getAllTasks = async() => {
    return await Task.find()
}