"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full flex justify-between items-center z-50 py-4 px-4 md:px-16 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md" : ""
        }`}
    >
      <Link href="/" className="hidden lg:block">
        <Image src="/images/gcc-logo.png" alt="Logo" width={250} height={100} />
      </Link>
      <Link href="/" className="lg:hidden">
        <Image src="/images/gcc-logo.png" alt="Logo" width={200} height={100} />
      </Link>
      <div className="hidden lg:flex items-center space-x-6 font-medium">
        <Link
          href="/articles"
          className="hover:underline text-sm font-bold text-primary"
        >
          Articles
        </Link>
        <section className="grid place-content-center">
          <Link href={`https://gcc-gp.vercel.app/contactus`} target="_blank">
            <button className="group text-sm flex h-12 items-center gap-2 rounded-full bg-[#d1d3d5] pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-[#9fa1a2] hover:pl-2 hover:text-primary active:bg-neutral-700 cursor-pointer">
              <span className="rounded-full bg-primary p-1 text-sm transition-colors duration-300 group-hover:bg-neutral-primary">
                <ArrowRight className="text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-white group-active:-rotate-45" />
              </span>
              <span>Contact Us</span>
            </button>
          </Link>
        </section>
      </div>
    </nav>
  );
}

export default Header;
