import Task from "@/mongoose/task_type"

export const getDoneTasksLists = async () => {
    return await Task.find({isDone : true})
}