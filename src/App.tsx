import { useQuery } from "@tanstack/react-query";
import "./App.css";
import { Loader } from "lucide-react";

function App() {
  const { data, isPending, refetch, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  if (error) {
    alert("Something went wrong");
  }

  return (
    <>
      <div>{isPending ? <Loader /> : JSON.stringify(data?.slice(0, 20))}</div>
      <button onClick={() => refetch()}>refetch</button>
    </>
  );
}

const getTodos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch("http://jsonplaceholder.typicode.com/todos");
  return await response.json();
};

export default App;
