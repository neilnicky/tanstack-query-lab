import { queryOptions } from "@tanstack/react-query";

export function createPostQueryOptions(randomId: number) {
  return queryOptions({
    queryKey: ["posts"],
    queryFn: getPosts,
    enabled: true,
  });
}

const getPosts = async (randomId: number): Promise<Post[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts${randomId}`);
  return await response.json();
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
