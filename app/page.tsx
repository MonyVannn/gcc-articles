import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Markdown from "react-markdown";
import MarkdownRenderer from "@/utils/markdownRenderer";
import React from "react";
import getPostsMetaData from "@/utils/getArticlesMetaData";

export default function Home() {
  const data = getPostsMetaData();
  console.log(data);
  return <div className="inner-container">hello</div>;
}
