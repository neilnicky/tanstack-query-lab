"use client";

import { getUser } from "@/client/user";
import { createUser } from "@/server/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface User {
  id: number;
  name: string;
}

export default function UserCard() {
  const query = useQuery({ queryKey: ["users"], queryFn: getUser });
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  if (query.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <button
        className="border-2 rounded-full px-2"
        onClick={() => mutation.mutate({ id: 1, name: "John Doe" })}
      >
        Create User
      </button>
      {query.data?.map((user: User) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
}
