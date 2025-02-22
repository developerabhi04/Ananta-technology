import project1 from "../../assets/Projects/project1.png";
import project2 from "../../assets/Projects/project2.png";
import project3 from "../../assets/Projects/project3.png";
import project4 from "../../assets/Projects/project7.png";
import project5 from "../../assets/Projects/project8.png";
import project6 from "../../assets/Projects/project9.png";

const projects = [
  {
    id: 1,
    title: "AgroSpace Solution",
    description:
      "Analytics platform with integrated robust AI model powered by a sophisticated algorithm with narrative visual effects.",
    image: project1,
    tags: ["AWS", "React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    webapp: "https://my.agrospace.io/",
  },
  {
    id: 2,
    title: "Empowering Marine",
    description:
      "A robust and user-centric web portal designed to streamline marine and offshore operations, enhancing efficiency and connectivity for industry professionals.",
    image: project2,
    tags: ["AWS", "React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    webapp: "https://ecommerce-website-frontend.vercel.app/",
  },
  {
    id: 3,
    title: "E-Commerce Website",
    description:
      "An elegant e-commerce platform offering premium wellness and care products for men and women, blending style with self-care.",
    image: project3,
    tags: ["Redis", "AWS", "React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    webapp: "https://quantumasync.onrender.com/",
  },
  {
    id: 4,
    title: "E-Commerce Website",
    description:
      "An elegant e-commerce platform offering premium wellness and care products for men and women, blending style with self-care.",
    image: project4,
    tags: ["Redis", "AWS", "React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    webapp: "https://quantumasync.onrender.com/",
  },
  {
    id: 5,
    title: "E-Commerce Website",
    description:
      "An elegant e-commerce platform offering premium wellness and care products for men and women, blending style with self-care.",
    image: project5,
    tags: ["Redis", "AWS", "React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    webapp: "https://quantumasync.onrender.com/",
  },
  {
    id: 6,
    title: "E-Commerce Website",
    description:
      "An elegant e-commerce platform offering premium wellness and care products for men and women, blending style with self-care.",
    image: project6,
    tags: ["Redis", "AWS", "React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    webapp: "https://quantumasync.onrender.com/",
  },
];

const Projects = () => {
  return (
    <section className="relative z-10 bg-gradient-to-r from-[#241533] to-[#0c0120] py-20 px-6 sm:px-16 text-white">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Our <span className="text-[#915EFF]">Projects</span>
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-4xl mx-auto">
          Explore some of our featured projects where we transformed ideas into impactful digital solutions. Our portfolio reflects our expertise in delivering innovative, scalable, and user-centric applications.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 bg-opacity-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-[#915EFF] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-800 px-3 py-1 rounded-full text-xs hover:bg-[#915EFF] transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[#915EFF] hover:text-white transition-all duration-300 underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;