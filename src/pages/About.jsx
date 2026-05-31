import profile from "../assets/profile.png";

function About() {
  const cards = [
    {
      title: "Frontend Development",
      description:
        "Building responsive and interactive web applications using React, Vite, Tailwind CSS, JavaScript, and Flutter.",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive interfaces and interactive prototypes focused on usability, accessibility, and visual consistency.",
    },
    {
      title: "Project Experience",
      description:
        "Developed real-world academic and organizational systems including MarisTrack and MaristaPay during internship experience.",
    },
  ];

  const technologies = [
    "React",
    "Vite",
    "Tailwind CSS",
    "JavaScript",
    "Flutter",
    "Dart",
    "Figma",
    "Canva",
    "Draw.io",
    "Git",
    "GitHub",
    "Firebase",
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-[#F8F3FF] relative overflow-hidden px-6 pt-36 pb-28"
    >
      {/* Background Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#DCC6F2] opacity-40 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#C8A2C8] opacity-30 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-[#2E1F3E]">
            About Me
          </h2>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Profile */}
          <div className="flex justify-center order-1 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-[#DCC6F2] blur-[100px] opacity-40 rounded-full"></div>

              <div className="relative p-4 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/40 shadow-2xl">
                <img
                  src={profile}
                  alt="Shandy"
                  className="w-[260px] md:w-[340px] rounded-[1.8rem] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="order-2 lg:order-2">
            <h3 className="text-3xl md:text-4xl font-bold text-[#6E4C8F] mb-6">
              Passionate About Creating Meaningful Digital Experiences
            </h3>

            <p className="text-[#5C5470] text-lg leading-relaxed">
              I am a fresh graduate with a passion for frontend development and
              UI/UX design. I enjoy creating aesthetic, interactive, and
              user-friendly digital experiences that combine creativity with
              functionality.
            </p>

            <p className="text-[#5C5470] text-lg leading-relaxed mt-6">
              Through academic projects, design work, and internship experience,
              I have developed skills in building modern web applications and
              intuitive interfaces that solve real-world problems.
            </p>

            <p className="text-[#5C5470] text-lg leading-relaxed mt-6">
              My goal is to create digital solutions that are not only visually
              appealing but also meaningful, accessible, and user-centered.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                bg-white/40
                backdrop-blur-xl
                border-2
                border-[#B57EDC]
                rounded-[2rem]
                p-8
                shadow-lg
                hover:-translate-y-3
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              <h3 className="text-xl font-semibold text-[#6E4C8F] mb-4">
                {card.title}
              </h3>

              <p className="text-[#5C5470] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center text-[#2E1F3E] mb-10">
            Tools & Technologies
          </h3>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {technologies.map((tool) => (
              <span
                key={tool}
                className="
                  px-5
                  py-3
                  rounded-full
                  bg-[#EADCF8]
                  text-[#6E4C8F]
                  font-medium
                  hover:scale-105
                  transition
                  duration-300
                "
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-6xl md:text-7xl font-bold text-[#6E4C8F]">
              6+
            </h3>
            <p className="mt-3 text-[#5C5470] uppercase tracking-wider text-sm">
              Projects
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-6xl md:text-7xl font-bold text-[#6E4C8F]">2</h3>
            <p className="mt-3 text-[#5C5470] uppercase tracking-wider text-sm">
              UI/UX Prototypes
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-6xl md:text-7xl font-bold text-[#6E4C8F]">
              17+
            </h3>
            <p className="mt-3 text-[#5C5470] uppercase tracking-wider text-sm">
              Design Works
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
