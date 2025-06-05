"use client";

import Link from "next/link";
import React from "react";
import { format } from "date-fns";
import Image from "next/image";
import { Button } from "./ui/button";

type Props = {
  slug: string;
  title: string;
  date: string;
  subtitle: string;
};

const PostPreview = ({ slug, title, date, subtitle }: Props) => {
  const [isHover, setIsHover] = React.useState(false);
  const formattedDate = format(new Date(date), "MMMM dd, yyyy");

  return (
    <div>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="lg:h-[250px] md:h-[350px] h-[200px] relative w-full rounded-sm hover:-translate-y-4 transition-all duration-300 ease-in-out"
      >
        <Link href={`/articles/${slug}`}>
          <div className="absolute inset-0">
            <Image
              src={`/thumbnails/${slug}.jpeg`}
              className="object-cover w-full h-full rounded-sm z-0"
              alt="thumbnail"
              layout="fill"
            />
          </div>
          {isHover && (
            <div className="absolute bottom-4 right-4">
              <Button className="z-20 bg-blue-500 hover:bg-blue-500 rounded-full group">
                <p className="text-white mr-1">READ MORE</p>
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 9 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 ease-out"
                >
                  <path
                    d="M8.49966 1.01851C8.50988 0.742553 8.29446 0.510563 8.01851 0.500342L3.52159 0.33379C3.24564 0.32357 3.01365 0.538989 3.00343 0.814942C2.99321 1.09089 3.20862 1.32288 3.48458 1.33311L7.48184 1.48115L7.33379 5.47841C7.32357 5.75436 7.53899 5.98635 7.81494 5.99657C8.09089 6.0068 8.32288 5.79138 8.3331 5.51542L8.49966 1.01851ZM1.34023 7.8664L8.34023 1.3664L7.65977 0.633603L0.659774 7.1336L1.34023 7.8664Z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </Button>
            </div>
          )}
        </Link>
      </div>

      <h3 className="text-xs font-medium text-[#4f576c] dark:text-gray-400 pt-3">
        {formattedDate}
      </h3>

      <Link href={`/articles/${slug}`} className="hover:underline">
        <h2 className="font-bold text-lg">{title}</h2>
      </Link>
      <h3 className="text-xs line-clamp-2">{subtitle}</h3>
    </div>
  );
};

export default PostPreview;
