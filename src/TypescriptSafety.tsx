import { useSuspenseQuery } from "@tanstack/react-query";
import "./App.css";
import { createTodoQueryOptions } from "./queryOptions/createTodoQueryOptions";

function Type() {
  const { data } = useSuspenseQuery(createTodoQueryOptions(true));

  return (
    <>
      <div>{data[0]?.title}</div>
    </>
  );
}

export default Type;