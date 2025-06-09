import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Globe, Heart } from "lucide-react";
import getPostsMetaData from "@/utils/getArticlesMetaData";
import PostPreview from "@/components/PostPreview";
import Image from "next/image";

const recentVideoLinks = [
  "https://www.youtube.com/embed/DyqtIKB6HnU",
  "https://www.youtube.com/embed/YYqrWYdbe10",
  "https://www.youtube.com/embed/6kWMDmHDxXc",
];

export default function Home() {
  const postsMetaData = getPostsMetaData();
  const recentArticles = postsMetaData.slice(0, 3);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-50/30 to-purple-50/30 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600 font-medium">
              <Building2 className="w-4 h-4" />
              Diversified Business Group
            </div>

            {/* Main Heading */}
            <div className="space-y-6 flex flex-col items-center justify-center">
              <Image
                src="/images/gcc-logo.png"
                alt="logo"
                width={500}
                height={500}
              />
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                A diversified conglomerate spanning finance, healthcare, real
                estate, hospitality, and global markets.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Link
                  href="https://gcc-gp.vercel.app"
                  target="_blank"
                  className="inline-flex items-center gap-2"
                >
                  Our Companies
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Link
                href="/articles"
                className="border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-8 py-1 text-lg font-medium rounded-xl hover:bg-gray-50 transition-all duration-200"
              >
                Latest Articles
              </Link>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-12">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-gray-600" />
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  Multiple Industries
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-gray-600" />
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  Global Presence
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-gray-600" />
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  Community Impact
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Updates Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Latest news and developments from across our business divisions
            </p>
          </div>

          <div className="md:grid grid-cols-3 gap-8 space-y-8 ">
            {recentArticles.map((post) => (
              <PostPreview key={post.slug} {...post} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              variant="outline"
              asChild
              className="border-2 border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-medium rounded-xl transition-all duration-200"
            >
              <Link href="/articles">View All Articles</Link>
            </Button>
          </div>
        </div>
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recent Videos
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Latest videos from across our business divisions
              </p>
            </div>

            <div className="md:grid grid-cols-3 gap-8 space-y-8 ">
              {recentVideoLinks.map((post, idx) => (
                <iframe key={idx} width="" height="300px" src={post}></iframe>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button
                variant="outline"
                asChild
                className="border-2 border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-medium rounded-xl transition-all duration-200"
              >
                <Link href="https://www.youtube.com/@gcc3090">
                  View All Videos
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
