import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes, Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const BlogsPage = lazy(() => import("./components/BlogsPage"));
const Services = lazy(() => import("./pages/services/Services"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const BlogDetails = lazy(() => import("./pages/blogs/BlogDetails"));
const CreateBlog = lazy(() => import("./pages/blogs/BlogsForm"));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <Loader />
  </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

// Layout component with error boundary
const Layout = () => {
  return (
    <ErrorBoundary>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-neutral-50 to-white">
        <Navbar />
        <main className="flex-grow pt-16 lg:pt-19">
          <Suspense fallback={<PageLoader />}>
            <Outlet /> {/* This renders the child routes */}
          </Suspense>
        </main>
        <Footer />

        {/* Toast notifications container */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </ErrorBoundary>
  );
};

// 404 Not Found Component
const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
    <h1 className="mb-4 text-6xl font-bold md:text-8xl text-primary-600">
      404
    </h1>
    <h2 className="mb-4 text-2xl font-semibold md:text-3xl text-neutral-800">
      Page Not Found
    </h2>
    <p className="max-w-md mb-8 text-neutral-600">
      The page you're looking for doesn't exist or has been moved.
    </p>
    <a
      href="/"
      className="px-6 py-3 text-white transition-all duration-300 transform rounded-lg bg-primary-600 hover:bg-primary-700 hover:-translate-y-1 hover:shadow-lg"
    >
      Go Back Home
    </a>
  </div>
);

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="blogs/:id" element={<BlogDetails />} />
          <Route path="create-blog" element={<CreateBlog />} />
          
          {/* 404 Route - Catch all unmatched routes */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}