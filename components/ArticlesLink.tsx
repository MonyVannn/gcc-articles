"use client";

import Link from "next/link";
import React, { useState } from "react";

const ArticlesLink = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
      <Link
        href="/articles"
        className="relative font-bold text-sm text-primary"
      >
        Articles
        <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-[2px] origin-left scale-x-0 rounded-full bg-black transition-transform duration-300 ease-out"
        />
      </Link>
    </div>
  );
};

export default ArticlesLink;
