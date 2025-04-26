import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Images
import imgTailwind from "../../assets/blog/featured-blog-post.webp";
import imgNodeSec from "../../assets/blog/nodejs_security.jpg";
import imgNextDeploy from "../../assets/blog/images.jfif";
import imgGraphQL from "../../assets/blog/Banner-3.png";
import imgWebpack from "../../assets/blog/hq720.jpg";
import imgDocker from "../../assets/blog/Docker-Image-Creation.png";

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
  {
    id: 6,
    title: "Containerizing Node Apps with Docker",
    img: imgDocker,
    date: "November 30, 2024",
    excerpt:
      "Containerize your Node.js applications with Docker for consistent deployments.",
  },
];

const Blog = () => {
  const canvasRef = useRef(null);
  const [featured, ...rest] = posts;
  const secondary = rest.slice(0, 3);
  const remaining = rest.slice(3);

  // ——— pulsating ripple background ———
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let circles = [];
    const CIRCLE_COUNT = 4;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const maxDim = Math.hypot(canvas.width, canvas.height);
      circles = Array.from({ length: CIRCLE_COUNT }, (_, i) => ({
        radius: (maxDim / CIRCLE_COUNT) * i,
        speed: (maxDim / CIRCLE_COUNT) * 0.005,
        alpha: 0.2,
        max: maxDim,
      }));
    }

    function draw() {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;

      circles.forEach(c => {
        c.radius += c.speed;
        if (c.radius > c.max) c.radius = 0;
        c.alpha = 0.2 * (1 - c.radius / c.max);

        ctx.beginPath();
        ctx.arc(cx, cy, c.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(30,167,201,${c.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    resize();
    draw();
    return () => window.removeEventListener("resize", resize);
  }, []);
  // ——— end ripple setup ———

  return (
    <section
      id="blog"
      className="relative bg-gradient-to-r from-[#0e3468] to-[#3a195b] text-white py-32 overflow-hidden"
    >
      {/* ripple canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-extrabold">
            From Our <span className="text-cyan-400">Blog</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Insights, tutorials, and best practices from our engineering and design teams.
          </p>
        </motion.div>

        {/* Featured & Secondary */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Featured */}
          <motion.article
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <img src={featured.img} alt={featured.title} className="w-full h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white max-w-lg">
              <time className="text-sm text-gray-300">{featured.date}</time>
              <h3 className="mt-2 text-3xl font-bold">{featured.title}</h3>
              <p className="mt-2 text-gray-200">{featured.excerpt}</p>
              <Link
                to={`/blog/${featured.id}`}
                className="inline-block mt-4 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
              >
                Read full article →
              </Link>
            </div>
          </motion.article>

          {/* Secondary */}
          <div className="grid grid-cols-1 gap-8">
            {secondary.map((post, idx) => (
              <motion.article
                key={post.id}
                className="relative rounded-2xl overflow-hidden shadow-xl"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ delay: (idx + 1) * 0.1 }}
              >
                <img src={post.img} alt={post.title} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-4 left-4 text-white">
                  <time className="text-xs text-gray-300">{post.date}</time>
                  <h4 className="mt-1 text-xl font-semibold">{post.title}</h4>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-block mt-2 text-sm text-cyan-400 hover:text-cyan-300"
                  >
                    Continue reading →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Remaining Posts */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {remaining.map((post, idx) => (
            <motion.article
              key={post.id}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ delay: (idx + 1) * 0.1 }}
            >
              <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <time className="text-xs text-gray-400">{post.date}</time>
                <h5 className="mt-2 text-lg font-semibold">{post.title}</h5>
                <p className="mt-1 text-gray-300 text-sm">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-block mt-4 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  Read more →
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter CTA (commented) */}
      </div>
    </section>
  );
};

export default Blog;
