
import { sayHello } from "@/graphql/resolvers/mutations/say-hello";


describe("Hello Mutation", () => {
  it("Should call say hello mutation with name input", () => {
    jest.mock('../../mongoose/task_type.ts', ()=> ({
      create: jest.fn(({taskName, priority}) => ({ taskName, priority}))
    }))
    expect(sayHello({}, { name: "hello" })).toBeDefined();
  });
  
});