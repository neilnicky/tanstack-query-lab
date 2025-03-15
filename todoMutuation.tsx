Here's a mutationOptions function for creating a new Todo using React Query's mutation:

import { mutationOptions } from "@tanstack/react-query";

export function createTodoMutationOptions() {
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
        throw new Error("Failed to create Todo");
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

This mutation function sends a POST request to create a new Todo and can be used with useMutation(). Let me know if you need further modifications!

