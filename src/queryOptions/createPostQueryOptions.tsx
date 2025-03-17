import { queryOptions } from "@tanstack/react-query";

export function createPostQueryOptions() {
  return queryOptions({
    queryKey: ["posts"],
    queryFn: getPosts,
    enabled: true,
  });
}

const getPosts = async (): Promise<Post[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  return await response.json();
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
