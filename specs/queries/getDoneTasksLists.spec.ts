import { getDoneTasksLists } from "@/graphql/resolvers/queries/getDoneTask";
jest.mock("../../mongoose/task_type", () => ({
  find: jest.fn().mockResolvedValue([
    { taskName: "Task 1", isDone: true, priority: 1 },
    { taskName: "Task 2", isDone: true, priority: 2 },
  ]),
}));

describe("This query retrieves all tasks that have been marked as done.", () => {
  it("should ensure all tasks have isDone set to true", async () => {
    const tasks = await getDoneTasksLists();


    tasks.forEach(task => {
      expect(task).toHaveProperty('isDone', true);
    });
  });
});
