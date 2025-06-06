import fs from "fs";
import matter from "gray-matter";
import path from "path";

const getPostContent = (slug: string) => {
  const dir = path.join(process.cwd(), "public", "articles");
  const files = `${dir}/${slug}.md`;
  const content = fs.readFileSync(files, "utf-8");
  const matterResult = matter(content);

  return matterResult;
};

export default getPostContent;
