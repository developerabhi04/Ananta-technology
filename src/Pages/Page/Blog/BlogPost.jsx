import { useParams, Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaRegCalendarAlt } from "react-icons/fa";

import imgTailwind from '../../../assets/blog/featured-blog-post.webp';
import imgNodeSec from '../../../assets/blog/nodejs_security.jpg';
import imgNextDeploy from '../../../assets/blog/images.jfif';
import imgGraphQL from '../../../assets/blog/Banner-3.png';
import imgWebpack from '../../../assets/blog/hq720.jpg';
import imgDocker from '../../../assets/blog/Docker-Image-Creation.png';


const posts = [
  {
    id: 1,
    title: "10 Tailwind CSS Tricks You Didn’t Know",
    date: "April 12, 2025",
    img: imgTailwind,
    content: `
**Introduction**
Tailwind CSS has exploded in popularity, but many powerful utilities remain underused.

**Key Tricks**
1. \`bg-clip-text\` for gradient text.
2. \`line-clamp\` plugin for truncating blocks.
3. \`aspect-w/h\` for aspect ratio control.

**Conclusion**
By mastering these, your designs will be much more efficient and flexible.
`,
  },
  {
    id: 2,
    title: "Node.js Security Best Practices",
    date: "March 28, 2025",
    img: imgNodeSec,
    content: `
**Overview**
Node.js apps face unique security challenges. Here are the top practices.

**Best Practices**
- Validate all user input to prevent injection.
- Use \`helmet\` middleware to set HTTP headers.
- Keep dependencies up to date via \`npm audit\`.

**Next Steps**
Integrate automated scans into your CI pipeline.
`,
  },
  {
    id: 3,
    title: "Deploying Next.js on Vercel",
    date: "February 19, 2025",
    img: imgNextDeploy,
    content: `
**Why Vercel?**
Vercel offers instant static & serverless deployments for Next.js.

**Steps**
1. Install \`vercel\` CLI: \`npm i -g vercel\`.
2. Run \`vercel\` in your project root.
3. Configure environment variables in dashboard.

**Tips**
Use preview deployments for each PR.
`,
  },
  {
    id: 4,
    title: "GraphQL vs REST: When to Use Which",
    date: "January 05, 2025",
    img: imgGraphQL,
    content: `
**REST**
- Stable and simple for CRUD.
- Use HTTP verbs: GET, POST, PUT, DELETE.

**GraphQL**
- Fetch multiple resources in one request.
- Strongly-typed schema.

**When to Choose**
- Use REST for simple CRUD apps.
- Use GraphQL for complex data relationships.
`,
  },
  {
    id: 5,
    title: "Webpack Performance Optimization",
    date: "December 15, 2024",
    img: imgWebpack,
    content: `
**Bundle Size**
- Use \`SplitChunksPlugin\`.
- Enable tree-shaking with \`sideEffects\`.

**Build Speed**
- Use \`thread-loader\`.
- Cache with \`cacheDirectory\`.

**Analysis**
Use \`webpack-bundle-analyzer\` to inspect.
`,
  },
  {
    id: 6,
    title: "Containerizing Node Apps with Docker",
    date: "November 30, 2024",
    img: imgDocker,
    content: `
**Dockerfile Basics**
\`\`\`dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
\`\`\`

**Multi-stage**
Use builder pattern to reduce final image size.

**Deployment**
Push to Docker Hub and run with \`docker run\`.
`,
  },
];




const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === Number(id));



 
  // if (!post) {
  //   return (
  //     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-700">
  //       <h2 className="text-2xl mb-4">Post not found</h2>
  //       <button
  //         onClick={() => navigate("/blog")}
  //         className="flex items-center space-x-2 text-blue-600 hover:underline"
  //       >
  //         <FaArrowLeft /> <span>Back to Blog</span>
  //       </button>
  //     </div>
  //   );
  // }

  // pick three other posts as “related”
  const related = posts.filter(p => p.id !== post.id).slice(0,3);

  return (
    <section
      className="bg-gradient-to-r from-[#0e3468] to-[#3a195b] text-white py-7"
    >
    <div className="bg-gradient-to-r from-[#0e3468] to-[#3a195b] text-white py-20">
      {/* Hero */}
      <header className="relative h-[630px] overflow-hidden">
        <img
          src={post.img}
          alt={post.title}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-6 text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center mt-2 text-gray-200 space-x-2">
            <FaRegCalendarAlt /> <time>{post.date}</time>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="prose prose-lg prose-invert max-w-3xl mx-auto py-16 px-6">
        {post.content
          .trim()
          .split("\n\n")
          .map((para, idx) => <p key={idx}>{para}</p>)
        }
      </main>

      {/* Related Posts */}
      <section className="max-w-3xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6">You Might Also Like</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map(r => (
            <Link
              key={r.id}
              to={`/blog/${r.id}`}
              className="block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={r.img}
                alt={r.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{r.title}</h3>
                <time className="block text-xs text-gray-500">{r.date}</time>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-3xl mx-auto px-6 pb-16">
        <button
          onClick={() => navigate("/blog")}
          className="inline-flex items-center space-x-2 text-blue-600 hover:underline"
        >
          <FaArrowLeft /><span>Back to Blog</span>
        </button>
      </div>
    </div>
    </section>
  );
};

export default BlogPost;
