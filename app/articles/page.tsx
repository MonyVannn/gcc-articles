import PostPreview from "@/components/PostPreview";
import { Button } from "@/components/ui/button";
import getPostsMetaData from "@/utils/getArticlesMetaData";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Posts",
};

function ArticlesPage() {
  const postsMetaData = getPostsMetaData();

  return (
    <div className="lg:px-20 md:px-10 px-5 pb-20 pt-32">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Button size="icon" variant={"ghost"} className="cursor-pointer">
            <ArrowLeft />
          </Button>
        </Link>
        <h2 className="font-bold text-2xl py-5">All Articles</h2>
      </div>
      <div className="lg:grid grid-cols-3 gap-10 lg:space-y-0 space-y-10">
        {postsMetaData.map((post) => (
          <PostPreview key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}

export default ArticlesPage;
