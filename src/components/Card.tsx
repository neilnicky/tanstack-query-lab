import { useSuspenseQueries } from "@tanstack/react-query";
import { createPostQueryOptions } from "../queryOptions/createPostQueryOptions";
import { createTodoQueryOptions } from "../queryOptions/createTodoQueryOptions";
import { createUsersQueryOptions } from "../queryOptions/createUsersQueryOptions";

export default function Card() {
  const [{ data }, result2, result3] = useSuspenseQueries({
    queries: [
      createPostQueryOptions(),
      createUsersQueryOptions(),
      createTodoQueryOptions(),
    ],
  });
  return (
    <div className="p-4 border-blue-500 border-2">
      <h1 className="text-blue-500 text-5xl mb-2">CARD</h1>
      {JSON.stringify(data?.slice(0, 5))}
    </div>
  );
}
