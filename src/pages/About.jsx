import profile from "../assets/profile.png";

function About() {
  const cards = [
    {
      title: "Web Development",
      description:
        "Develop responsive, user-friendly web applications using modern technologies while focusing on performance, accessibility, and intuitive user experiences.",
    },
    {
      title: "Quality Assurance & Documentation",
      description:
        "Conduct usability testing, document system issues, prepare reports, and collaborate with teams to improve software quality and user satisfaction.",
    },
    {
      title: "Administrative & Technical Support",
      description:
        "Organize project documentation, manage digital files, perform data entry, and support efficient workflows with strong attention to detail.",
    },
  ];

  const skillCategories = [
    {
      title: "Administrative Skills",
      icon: "📋",
      skills: [
        "Documentation",
        "Data Entry",
        "Internet Research",
        "File Management",
        "Microsoft Office",
        "Google Workspace",
      ],
    },
    {
      title: "Quality Assurance",
      icon: "🧪",
      skills: [
        "Usability Testing",
        "Bug Reporting",
        "Test Case Execution",
        "System Documentation",
      ],
    },
    {
      title: "Development",
      icon: "💻",
      skills: ["HTML", "CSS", "JavaScript", "React", "Flutter", "Firebase"],
    },
    {
      title: "Design",
      icon: "🎨",
      skills: ["Figma", "Canva", "UI/UX Design", "Wireframing", "Prototyping"],
    },
    {
      title: "Professional Skills",
      icon: "🤝",
      skills: [
        "Communication",
        "Organization",
        "Attention to Detail",
        "Problem Solving",
        "Teamwork",
        "Adaptability",
      ],
    },
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
              Turning Ideas into Organized, User-Centered Solutions
            </h3>

            <p className="text-[#5C5470] text-lg leading-relaxed">
              I am an Information Technology graduate with experience in
              front-end development, quality assurance testing, and
              documentation gained through academic projects and my internship.
              I enjoy building digital solutions that are both functional and
              easy to use while maintaining attention to detail.
            </p>

            <p className="text-[#5C5470] text-lg leading-relaxed mt-6">
              During my internship, I collaborated with teams to test web-based
              systems, document system improvements, assist in UI/UX design, and
              support the development of user-friendly applications. These
              experiences strengthened my communication, organization, and
              problem-solving skills.
            </p>

            <p className="text-[#5C5470] text-lg leading-relaxed mt-6">
              I am passionate about continuous learning and enjoy combining
              technical knowledge with creativity and organization. Whether
              contributing to software development, quality assurance, or
              administrative support, I strive to deliver reliable work and
              meaningful results.
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

        {/* Skills & Tools */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-[#2E1F3E]">
              Skills & Expertise
            </h3>

            <p className="text-[#5C5470] mt-4 max-w-3xl mx-auto text-lg">
              My skills combine technical development, quality assurance,
              administrative support, and creative design, strengthened through
              academic projects and hands-on internship experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Administrative */}
            <div>
              <h4 className="text-2xl font-semibold text-[#6E4C8F] mb-5">
                📋 Administrative Skills
              </h4>

              <div className="flex flex-wrap gap-3">
                {[
                  "Documentation",
                  "Data Entry",
                  "Internet Research",
                  "File Management",
                  "Microsoft Office",
                  "Google Workspace",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-[#EADCF8] text-[#6E4C8F] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* Quality Assurance */}
            <div>
              <h4 className="text-2xl font-semibold text-[#6E4C8F] mb-5">
                🧪 Quality Assurance
              </h4>

              <div className="flex flex-wrap gap-3">
                {[
                  "Usability Testing",
                  "Bug Reporting",
                  "Test Case Execution",
                  "System Documentation",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-[#EADCF8] text-[#6E4C8F] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Development */}
            <div>
              <h4 className="text-2xl font-semibold text-[#6E4C8F] mb-5">
                💻 Development
              </h4>

              <div className="flex flex-wrap gap-3">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Flutter",
                  "Firebase",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-[#EADCF8] text-[#6E4C8F] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Design */}
            <div>
              <h4 className="text-2xl font-semibold text-[#6E4C8F] mb-5">
                🎨 Design
              </h4>

              <div className="flex flex-wrap gap-3">
                {[
                  "Figma",
                  "Canva",
                  "UI/UX Design",
                  "Wireframing",
                  "Prototyping",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-[#EADCF8] text-[#6E4C8F] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Professional */}
            <div>
              <h4 className="text-2xl font-semibold text-[#6E4C8F] mb-5">
                🤝 Professional
              </h4>

              <div className="flex flex-wrap gap-3">
                {[
                  "Communication",
                  "Organization",
                  "Attention to Detail",
                  "Problem Solving",
                  "Teamwork",
                  "Adaptability",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-[#EADCF8] text-[#6E4C8F] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
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
              UI/UX Designs
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-6xl md:text-7xl font-bold text-[#6E4C8F]">
              17+
            </h3>
            <p className="mt-3 text-[#5C5470] uppercase tracking-wider text-sm">
              Creative Designs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
