import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useState } from "react";
import "./App.css";

function App() {
  const [on, setOn] = useState(false);
  const { data, isPending } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
    enabled: on,
  });

  return (
    <>
      <div>{isPending ? <Loader /> : JSON.stringify(data?.slice(0, 20))}</div>
      <button onClick={() => setOn(!on)}>Toggle</button>
    </>
  );
}

const getTodos = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${1}`
  );
  return await response.json();
};

export default App;
