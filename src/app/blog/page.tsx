import { getPageMetadata } from "@/utils/metadata";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/blog/Hero";
import FeaturedPosts from "@/components/blog/FeaturedPosts";
import FilterBar from "@/components/blog/FilterBar";
import BlogGrid from "@/components/blog/BlogGrid";
import Pagination from "@/components/blog/Pagination";
import Tags from "@/components/blog/Tags";
import Authors from "@/components/blog/Authors";
import Resources from "@/components/blog/Resources";
import FooterCta from "@/components/blog/FooterCta";

export const metadata = getPageMetadata("/blog");

type PageProps = {
  searchParams: Promise<{ category?: string; q?: string }>;
};

export default async function BlogPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const active = sp.category ?? "all";
  const showFeatured = active === "all";

  return (
    <>
      <Navbar />
      <Hero />
      {showFeatured && <FeaturedPosts />}
      <FilterBar active={active} />
      <BlogGrid active={active} />
      <Pagination />
      <Tags />
      <Authors />
      <Resources />
      <FooterCta />
      <Footer />
    </>
  );
}
