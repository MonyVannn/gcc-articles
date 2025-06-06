import getPostsMetaData from "@/utils/getArticlesMetaData";

export async function GET() {
  const postsData = getPostsMetaData();

  return new Response(JSON.stringify(postsData), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
