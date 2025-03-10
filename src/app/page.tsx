import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useState } from "react";


export default function Home() {
 const [id, setId] = useState(1);
  const { data, isPending, error } = useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodos(id),
  });

  if (error) {
    alert("Something went wrong");
  }

  return (
    <>
      <div>{isPending ? <Loader /> : JSON.stringify(data?.slice(0, 20))}</div>
      <button onClick={() => setId((prev) => prev + 1)}>Increment ID</button>
    </>
  );
}

const getTodos = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  return await response.json();
};
