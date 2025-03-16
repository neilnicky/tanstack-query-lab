import { useSuspenseQuery } from "@tanstack/react-query";
import { createTodoQueryOptions } from "../queryOptions/createTodoQueryOptions";

export default function Card() {
  const { data } = useSuspenseQuery(createTodoQueryOptions(true));
  return (
    <div className="p-4 border-blue-500 border-2">
      <h1 className="text-blue-500 text-5xl mb-2">CARD</h1>
      {JSON.stringify(data?.slice(0, 10))}
    </div>
  );
}
