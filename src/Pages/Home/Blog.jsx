import { motion } from "framer-motion";
import imgTailwind from "../../assets/blog/featured-blog-post.webp";
import imgNodeSec from "../../assets/blog/nodejs_security.jpg";
import imgNextDeploy from "../../assets/blog/images.jfif";
import imgGraphQL from "../../assets/blog/Banner-3.png";
import imgWebpack from "../../assets/blog/hq720.jpg";

const posts = [
  {
    id: 1,
    title: "10 Tailwind CSS Tricks You Didn’t Know",
    img: imgTailwind,
    date: "April 12, 2025",
    excerpt:
      "Level up your styling game with these powerful but little-known Tailwind utilities.",
  },
  {
    id: 2,
    title: "Node.js Security Best Practices",
    img: imgNodeSec,
    date: "March 28, 2025",
    excerpt:
      "Keep your server rock solid—learn how to lock down your Node.js apps.",
  },
  {
    id: 3,
    title: "Deploying Next.js on Vercel",
    img: imgNextDeploy,
    date: "February 19, 2025",
    excerpt:
      "A step-by-step guide to painless Next.js deployments with Vercel.",
  },
  {
    id: 4,
    title: "GraphQL vs REST: When to Use Which",
    img: imgGraphQL,
    date: "January 05, 2025",
    excerpt:
      "Compare these two popular API paradigms and choose wisely for your project.",
  },
  {
    id: 5,
    title: "Webpack Performance Optimization",
    img: imgWebpack,
    date: "December 15, 2024",
    excerpt:
      "Speed up your builds and bundles with these advanced Webpack tips.",
  },
];

const Blog = () => (
  <section className=" relative bg-gradient-to-r from-[#0e3468] to-[#3a195b] text-white py-32 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 text-center mb-12">
      <motion.h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
        Our <span className="text-[#1ea7c9]">From Our Blog</span>
      </motion.h2>

      <p className="text-gray-300 mt-2">
        Insights, tutorials, and best practices from our team.
      </p>
    </div>
    <div className="max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, idx) => (
        <motion.article
          key={post.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
        >
          <div className="overflow-hidden">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-48 object-cover transform hover:scale-105 transition-transform"
            />
          </div>
          <div className="p-6">
            <time className="text-sm text-gray-400">{post.date}</time>
            <h3 className="mt-2 text-xl font-semibold text-gray-800">
              {post.title}
            </h3>
            <p className="mt-2 text-gray-600">{post.excerpt}</p>
            <a
              href={`/blog/${post.id}`}
              className="inline-block mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              Read more →
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Blog;
