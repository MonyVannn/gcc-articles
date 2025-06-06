import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const gccURL = process.env.GCC_URL
  return (
    <footer className="py-12 text-gray-600 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section: Logo and Contact Information */}
          <div className="mb-8 md:mb-0 space-y-4 text-sm lg:text-base">
            <Image
              src="/images/gcc-logo.png"
              alt="Logo"
              width={250}
              height={100}
            />
            <div className="flex items-center space-x-2 pt-10">
              <MapPin className="h-5 w-5" />
              <span className="max-w-lg">
                Guangdong Investment Tower 21/Floor, 148 Connaught Rd Central,
                Sheung Wan, Hong Kong
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>+852 530 13176</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>info@example.com</span>
            </div>
          </div>

          {/* Right Section: Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
            {/* About Us */}
            <div>
              <h3 className="font-semibold lg:text-lg mb-4 text-gray-900">
                About Us
              </h3>
              <ul className="space-y-2 text-sm lg:text-base">
                <li>
                  <Link href={`${gccURL}/about`} target="_blank" className="hover:underline">
                    About GC City
                  </Link>
                </li>
                <li>
                  <Link href={`${gccURL}/board`} target="_blank" className="hover:underline">
                    Chairman Message <br /> & Board of Directors
                  </Link>
                </li>
              </ul>
            </div>

            {/* Groups */}
            <div>
              <h3 className="font-semibold lg:text-lg mb-4 text-gray-900">
                Groups Business
              </h3>
              <ul className="space-y-2 text-sm lg:text-base">
                <li>
                  <Link href={`https://cm2h.com/`} target="_blank" className="hover:underline">
                    Cambodia My 2nd Home
                  </Link>
                </li>
                <li>
                  <Link href={`${gccURL}/nadi`} target="_blank" className="hover:underline">
                    Nadi by GC City
                  </Link>
                </li>
                <li>
                  <Link href={`https://gcc-gp.com/en/gc-orussey-market/`} target="_blank" className="hover:underline">
                    GC Orussey
                  </Link>
                </li>
                <li>
                  <Link href={`${gccURL}/media`} target="_blank" className="hover:underline">
                    GC Media
                  </Link>
                </li>
              </ul>
            </div>

            {/* Brands & Information */}
            <div>
              <h3 className="font-semibold lg:text-lg mb-4 text-gray-900">
                Oversea Branches
              </h3>
              <ul className="space-y-2 text-sm lg:text-base">
                <li>
                  <Link href={`${gccURL}/hongkong`} target="_blank" className="hover:underline">
                    GC Hong Kong
                  </Link>
                </li>
                <li>
                  <Link href={`${gccURL}/japan`} target="_blank" className="hover:underline">
                    GC Japan
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center text-sm lg:text-base">
          <p>
            &copy; {new Date().getFullYear()} Golden Cambodia Century. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
