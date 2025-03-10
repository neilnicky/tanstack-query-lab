import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useState } from "react";
import "./App.css";
import { createTodoQueryOptions } from "./queryOptions/createTodoQueryOptions";

function Type() {
  const [on, setOn] = useState(false);
  const { data, isPending } = useQuery(createTodoQueryOptions(on));

  return (
    <>
      <div>{isPending ? <Loader /> : JSON.stringify(data?.slice(0, 20))}</div>
      <button onClick={() => setOn(!on)}>Toggle</button>
    </>
  );
}

export default Type;
