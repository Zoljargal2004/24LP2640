import Task from "@/mongoose/task_type";

export const addTask = async (_: unknown, { taskName, isDone = false,priority  }: { taskName: string, isDone?:boolean, priority: number }) => {
    return await Task.create({taskName, isDone, priority});
  };