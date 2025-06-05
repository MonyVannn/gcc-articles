import getPostsMetaData from "@/utils/getArticlesMetaData";
import getPostContent from "@/utils/getPostContent";
import Markdown from "markdown-to-jsx";
import { Metadata } from "next";

export const generateStaticParams = async () => {
  const postsMetaData = getPostsMetaData();
  return postsMetaData.map((post) => ({
    slug: post.slug,
  }));
};

export const generateMetadata = async (props: any): Promise<Metadata> => {
  const params = await props.params;
  const postContent = getPostContent(params.slug);
  return {
    title: postContent.data.title,
  };
};

// Custom wrapper component for markdown content
const MarkdownWrapper = ({ children }: any) => {
  return <div className="dark:text-white">{children}</div>;
};

// Custom component for rendering headings
const Heading = ({ children, ...props }: any) => {
  const id = props.id;
  return (
    <h3 id={id} className="dark:text-inherit">
      {children}
    </h3>
  );
};

// Custom component for rendering links
const Strong = ({ children, ...props }: any) => {
  return (
    <strong {...props} className="dark:text-inherit">
      {children}
    </strong>
  );
};

async function ArticlePage(props: any) {
  const postContent = getPostContent((await props.params).slug);
  return (
    <div className="lg:px-20 md:px-10 px-5 py-20 flex flex-col items-center justify-center">
      <div className="lg:grid grid-cols-6 gap-x-10">
        <div className="col-span-5">
          {/* <div> */}
          {/*   <BlogHeader */}
          {/*     date={postContent.data.date} */}
          {/*     title={postContent.data.title} */}
          {/*     subtitle={postContent.data.subtitle} */}
          {/*     github={postContent.data.github_url} */}
          {/*   /> */}
          {/* </div> */}
          <div className="dark:text-inherit">
            <article className="md:prose-base lg:prose-lg prose-sm prose prose-pink md:max-w-none">
              <Markdown
                options={{
                  wrapper: MarkdownWrapper,
                  overrides: {
                    h1: { component: Heading },
                    h2: { component: Heading },
                    h3: { component: Heading },
                    h4: { component: Heading },
                    h5: { component: Heading },
                    h6: { component: Heading },
                    strong: { component: Strong },
                  },
                }}
              >
                {postContent.content}
              </Markdown>
            </article>
          </div>
        </div>
        {/* <ContentTable /> */}
      </div>
    </div>
  );
}

export default ArticlePage;
