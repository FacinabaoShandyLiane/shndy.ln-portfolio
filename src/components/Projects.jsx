import { motion } from "framer-motion";

function Projects() {
  const developmentProjects = [
    {
      title: "MarisTrack",
      description:
        "A web-based attendance monitoring system developed during my internship for Notre Dame of Marbel University's NSTP program. I contributed to developing responsive interfaces, conducting usability testing, and improving the overall user experience through quality assurance and documentation.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tech: ["React", "Tailwind"],
    },

    {
      title: "MaristaPay",
      description:
        "A payment management system developed during my internship for the DSA Office of Notre Dame of Marbel University. I assisted in designing user-friendly interfaces, implementing responsive pages, and supporting system testing to streamline payment monitoring and record management.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      tech: ["React", "Tailwind", "Vite"],
    },

    {
      title: "Recipe App",
      description:
        "A mobile application developed using Flutter that allows users to browse recipes, discover meal ideas, and explore food categories through an intuitive and user-friendly interface.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
      tech: ["Flutter", "Dart"],
    },

    {
      title: "Task Manager",
      description:
        "A web-based task management application designed to help users organize daily activities, monitor progress, and improve personal productivity through a clean and responsive interface.",
      image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29",
      tech: ["JavaScript", "HTML", "CSS"],
    },
  ];

  const figmaProjects = [
    {
      title: "WheelBorrow",
      description:
        "A bicycle borrowing and management application prototype designed in Figma.",
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
      tech: ["Figma", "UI Design", "UX Design"],
      link: "https://www.figma.com/design/cGiLsyAUHBW5w2RsaRXZlq/WheelBorrows?node-id=0-1",
    },

    {
      title: "TimeMinder",
      description:
        "A productivity and scheduling application prototype designed in Figma.",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
      tech: ["Figma", "UI Design", "UX Design"],
      link: "https://www.figma.com/design/0tbQ4QFKcKNG7XSRNg5pQC/TimeMinder?node-id=0-1",
    },
  ];

  const graphicDesigns = [
    {
      title: "Logo Collection",
      description:
        "Various logo designs created for academic, organizational, and personal projects.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d",
    },

    {
      title: "Publication Materials",
      description:
        "Canva-based publication materials, posters, promotional graphics, and social media content.",
      image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">Projects</h2>

        {/* Development Projects */}
        <h3 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-3">
          Development Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {developmentProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/50 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:scale-[1.02] transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex gap-3 flex-wrap">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#EADCF8] text-[#5E3B7E] px-4 py-2 rounded-full text-sm border border-white/50 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* UI/UX Design */}
        <h3 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-3">
          UI/UX Design Works
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {figmaProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/50 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:scale-[1.02] transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex gap-3 flex-wrap mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#EADCF8] text-[#5E3B7E] px-4 py-2 rounded-full text-sm border border-white/50 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-black px-5 py-3 rounded-full font-semibold hover:scale-105 transition"
                >
                  View Design
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Graphic Design */}
        <h3 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-3">
          Graphic Design Works
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {graphicDesigns.map((design, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/50 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:scale-[1.02] transition duration-300"
            >
              <img
                src={design.image}
                alt={design.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4">{design.title}</h3>

                <p className="text-gray-400 leading-relaxed">
                  {design.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
