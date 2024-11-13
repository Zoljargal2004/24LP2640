import { getAllTasks } from "@/graphql/resolvers/queries/getAllTasks";

jest.mock("../../mongoose/task_type", () => ({
  find: jest.fn().mockResolvedValue([{
    taskName:"asdsadasd"
  }]),
}));

describe("Gets all the tasks", () => {
  it("This query fetches all active tasks.", async () => {
    const task = await getAllTasks()
    
    expect(task).toHaveLength(1)
  });
});
                                      