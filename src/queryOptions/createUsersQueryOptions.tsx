import { queryOptions } from "@tanstack/react-query";

export function createUsersQueryOptions(on: boolean) {
  return queryOptions({
    queryKey: ["users"],
    queryFn: getUsers,
    enabled: on,
  });
}

const getUsers = async (): Promise<User[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  return await response.json();
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};
