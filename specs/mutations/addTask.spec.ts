import { addTask } from "@/graphql/resolvers/mutations/addTask";

jest.mock("../../mongoose/task_type.ts", () => ({
  create: jest.fn(({ taskName, priority }) => ({ taskName, priority })),
}));

describe("Adds Task", () => {
  it("This mutation creates a new todo task.", async () => {
    
    const task =await addTask({}, { taskName: "Kino uzeh", priority: 2 })  

    console.log("task:     ",task)
     expect(task).toHaveProperty("taskName", "Kino uzeh");
  });
});
