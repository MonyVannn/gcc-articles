import fs from "fs";
import matter from "gray-matter";

export interface PostMetaData {
  title: string;
  date: string;
  subtitle: string;
  tag: string[];
  slug: string;
  github_url?: string;
}

const getPostsMetaData = (): PostMetaData[] => {
  const folder = "./articles";
  const files = fs.readdirSync(folder);
  const markdown = files.filter((file) => file.endsWith(".md"));

  const posts = markdown.map((file) => {
    const content = fs.readFileSync(`${folder}/${file}`, "utf-8");
    const matterResult = matter(content);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      tag: matterResult.data.tags,
      slug: file.replace(".md", ""),
      github_url: matterResult.data.github_url,
    };
  });

  // Sort posts by date in descending order
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
};

export default getPostsMetaData;
