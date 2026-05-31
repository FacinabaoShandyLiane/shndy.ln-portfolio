function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-5xl">
        <h2 className="text-5xl font-bold mb-10 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-400 leading-relaxed text-lg">
              I'm a frontend developer passionate about creating clean, modern,
              and responsive web experiences. I enjoy building interfaces using
              React and Tailwind CSS.
            </p>

            <p className="text-gray-500 leading-relaxed text-lg mt-6">
              Currently, I'm improving my skills in frontend development, UI/UX
              design, and modern web technologies.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#F3E8FF]/60 backdrop-blur-md p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-2">React</h3>

              <p className="text-gray-400">Frontend Library</p>
            </div>

            <div className="bg-[#F3E8FF]/60 backdrop-blur-md p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-2">Tailwind</h3>

              <p className="text-gray-400">CSS Framework</p>
            </div>

            <div className="bg-[#F3E8FF]/60 backdrop-blur-md p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-2">JavaScript</h3>

              <p className="text-gray-400">Programming Language</p>
            </div>

            <div className="bg-[#F3E8FF]/60 backdrop-blur-md p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-2">UI/UX</h3>

              <p className="text-gray-400">Design Thinking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
