import { queryOptions } from "@tanstack/react-query";

export function createTodoQueryOptions(on: boolean) {
  return queryOptions({
    queryKey: ["todos"],
    queryFn: getTodos,
    enabled: on
  });
}

const getTodos = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${1}`
  );
  return await response.json();
};
