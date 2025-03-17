"use client";

import { getUser } from "@/server/user";
import { useQuery } from "@tanstack/react-query";

interface User {
  id: number;
  name: string;
}

export default function UserCard() {
  const query = useQuery({ queryKey: ["users"], queryFn: getUser });

  if (query.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {query.data?.map((user: User) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </>
  );
}
