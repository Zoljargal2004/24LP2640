import { updateTask } from "@/graphql/resolvers/mutations/updateTask";

jest.mock("../../mongoose/task_type.ts", () => ({
  findByIdAndUpdate: jest.fn((taskId, { taskName, priority, isDone,  }) => ({
      taskName,
      priority,
      isDone,
      taskId
    })),
  }));
  
describe("update Task", () => {
  it("This mutation updates an existing task's details using its taskId.", async () => {
    
    const mockUpdatedTask = {
      taskId: "67321efd6f4380e874c5230b",
      taskName: "IDK what to write",
      priority: 10,
      isDone: true,
    };
    const task = await updateTask({}, mockUpdatedTask);
    console.log("task       ",task)
    expect(task).toEqual(mockUpdatedTask);
  });
});
