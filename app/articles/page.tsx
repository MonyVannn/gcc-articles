import PostPreview from "@/components/PostPreview";
import { Button } from "@/components/ui/button";
import getPostsMetaData from "@/utils/getArticlesMetaData";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Posts",
};

const POSTS_PER_PAGE = 12;

function getPaginationRange(current: number, total: number, delta = 1) {
  const range: (number | "...")[] = [];

  const left = Math.max(2, current - delta);
  const right = Math.min(total - 1, current + delta);

  const hasLeftEllipsis = left > 2;
  const hasRightEllipsis = right < total - 1;

  range.push(1);

  if (hasLeftEllipsis) {
    range.push("...");
  }

  for (let i = left; i <= right; i++) {
    range.push(i);
  }

  if (hasRightEllipsis) {
    range.push("...");
  }

  if (total > 1) {
    range.push(total);
  }

  return range;
}

async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const pageValue = params.page;
  const page = parseInt(
    Array.isArray(pageValue) ? pageValue[0] : pageValue || "1",
    10
  );
  const allPosts = getPostsMetaData();

  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const selectedPosts = allPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const isInvalidPage = page < 1 || page > totalPages;

  return (
    <div className="lg:px-20 md:px-10 px-5 pb-20 pt-32">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Button size="icon" variant={"ghost"} className="cursor-pointer">
            <ArrowLeft />
          </Button>
        </Link>
        <div className="flex items-center justify-between w-full">
          <h2 className="font-bold text-2xl py-5">All Articles </h2>
          <span className="font-semibold text-sm">
            Page {page} ({selectedPosts.length} of {totalPosts} articles)
          </span>
        </div>
      </div>

      {/* Article List */}
      <div className="lg:grid grid-cols-3 gap-10 lg:space-y-0 space-y-10">
        {!isInvalidPage && selectedPosts.length > 0 ? (
          selectedPosts.map((post) => <PostPreview key={post.slug} {...post} />)
        ) : (
          <p className="text-center col-span-3 text-muted-foreground text-lg">
            No articles found for this page.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-end mt-20 gap-2 flex-wrap items-center">
          {/* Previous */}
          <Button
            size="sm"
            variant="outline"
            className="hover:cursor-pointer"
            disabled={page <= 1}
            asChild
          >
            <Link href={`/articles?page=${page - 1}`} aria-disabled={page <= 1}>
              <ChevronLeft className="w-4 h-4" />
            </Link>
          </Button>

          {/* Page Numbers */}
          {getPaginationRange(page, totalPages, 1).map((pageItem, index) => {
            if (pageItem === "...") {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="px-2 text-muted-foreground"
                >
                  ...
                </span>
              );
            }

            const isActive = pageItem === page;
            return (
              <Link key={pageItem} href={`/articles?page=${pageItem}`}>
                <Button
                  size={"sm"}
                  variant={isActive ? "default" : "ghost"}
                  className={`hover:cursor-pointer font-semibold ${
                    isActive && "bg-gray-300 hover:bg-gray-200"
                  }`}
                >
                  {pageItem}
                </Button>
              </Link>
            );
          })}

          {/* Next */}
          <Button
            size="sm"
            variant="outline"
            className="hover:cursor-pointer"
            disabled={page >= totalPages}
            asChild
          >
            <Link
              href={`/articles?page=${page + 1}`}
              aria-disabled={page >= totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}

export default ArticlesPage;
