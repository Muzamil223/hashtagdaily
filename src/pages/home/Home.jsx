import Hero from "../../components/Hero";
import Features from "../../components/Features";
import BlogHeader from "../../components/BlogHeader";
import FeaturedBlogs from "../../components/FeaturedBlogs";

const Home = () => {
  return (
    <div>
      <BlogHeader />
      <Features title="Inspire and Discover" />
      <Hero />
      <div className="padding-x">
        <Features title="Featured Blogs" />
        <FeaturedBlogs />
      </div>
    </div>
  );
};

export default Home;
