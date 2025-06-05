"use client";

import { format } from "date-fns";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type Props = {
  date: string;
  title: string;
  subtitle: string;
};

const BlogHeader = ({ date, title, subtitle }: Props) => {
  return (
    <div>
      <Breadcrumb className="">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="dark:text-gray-400">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/articles" className="dark:text-gray-400">
              Posts
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="py-5 flex items-start gap-3">
        <div>
          <p className="text-lg text-[#4f576c] dark:text-gray-400">GCC</p>
          <p className="text-sm text-[#4f576c] dark:text-gray-400">
            {format(new Date(date), "MMMM dd, yyyy")}
          </p>
        </div>
      </div>
      <div>
        <h1 className="lg:text-6xl text-3xl font-bold pt-3">{title}</h1>
        <h3 className="text-[#636c85] dark:text-gray-400 mt-2">{subtitle}</h3>
      </div>
    </div>
  );
};

export default BlogHeader;
