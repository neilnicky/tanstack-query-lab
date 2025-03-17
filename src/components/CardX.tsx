import { useQuery } from "@tanstack/react-query";
import { createPostQueryOptions } from "../queryOptions/createPostQueryOptions";
import { createUsersQueryOptions } from "../queryOptions/createUsersQueryOptions";

export default function CardX() {
  const { data: users } = useQuery(createUsersQueryOptions());

  const randomId = Math.floor(Math.random() * users?.length);

  const { data: posts, isPending } = useQuery({
    ...createPostQueryOptions(randomId),
    enabled: !!users,
  });

  return (
    <div className="p-4 border-blue-500 border-2">
      <h1 className="text-blue-500 text-5xl mb-2">CardX</h1>
      {isPending ? "Loading..." : JSON.stringify(posts)}
    </div>
  );
}
