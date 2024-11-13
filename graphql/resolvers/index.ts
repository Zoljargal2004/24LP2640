import { addTask } from "./mutations/addTask";
import { sayHello } from "./mutations/say-hello";
import { updateTask } from "./mutations/updateTask";
import { getAllTasks } from "./queries/getAllTasks";
import { getDoneTasksLists } from "./queries/getDoneTask";
import { helloQuery } from "./queries/hello-query";

export const resolvers = {
  Query: {
    helloQuery,
    getDoneTasksLists,
    getAllTasks
  },
  Mutation: {
    sayHello,
    addTask,
    updateTask
  },
};
