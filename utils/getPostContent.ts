import fs from "fs";
import matter from "gray-matter";

const getPostContent = (slug: string) => {
  const folder = "./articles";
  const files = `${folder}/${slug}.md`;
  const content = fs.readFileSync(files, "utf-8");
  const matterResult = matter(content);

  return matterResult;
};

export default getPostContent;
