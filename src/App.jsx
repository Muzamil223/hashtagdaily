import { Outlet, Route, Routes } from "react-router-dom";
import { About, Blogs, Contact, Footer, Home, Navbar, Services } from "./index";
import BlogDetails from "./pages/blogs/BlogDetails";
import CreateBlog from "./pages/blogs/BlogsForm";
import SearchResults from "./pages/home/SearchResult";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="search" element={<SearchResults />} />{" "}
        {/* Add the search route */}
      </Route>
    </Routes>
  );
}
