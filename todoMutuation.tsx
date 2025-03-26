import { mutationOptions } from "@tanstack/react-query";

export function getCreateTodoMutation() {
  return mutationOptions({
    mutationFn: async (newTodo: Omit<Todo, "id">): Promise<Todo> => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });

      if (!response.ok) {
        throw new Error("Error: Unable to create Todo");
      }

      return await response.json();
    },
  });
}

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
