import profile from "../assets/profile.png";

function Shandy() {
  const funFacts = [
    "Loves aesthetic UI designs ✨",
    "Frontend developer with creativity",
    "Enjoys turning ideas into interactive websites",
    "Probably redesigning something at 2AM 😭",
  ];

  return (
    <div className="min-h-screen bg-[#F8F3FF] flex items-center justify-center px-6 py-32 relative overflow-hidden">
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-[#E6D5F7] rounded-full blur-[150px] opacity-60"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C8A2C8] rounded-full blur-[150px] opacity-40"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}

        <div>
          <p className="uppercase tracking-[0.3em] text-[#8E6BAE] mb-4 font-semibold">
            Nice to meet you ✨
          </p>

          <h1 className="text-6xl md:text-8xl font-black text-[#3B2A4A] leading-tight mb-6">
            I'm
            <span className="block text-[#B57EDC]">Shandy</span>
          </h1>

          <p className="text-[#5C5470] text-lg leading-relaxed mb-10 max-w-xl">
            A frontend developer who enjoys building soft, interactive, and
            visually engaging web experiences. I love mixing creativity and code
            to make websites feel more alive and personal.
          </p>

          {/* Cute Cards */}

          <div className="grid sm:grid-cols-2 gap-4">
            {funFacts.map((fact, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-md border border-white/50 rounded-3xl p-5 text-[#5E3B7E] shadow-lg hover:scale-105 hover:-translate-y-1 transition duration-300"
              >
                {fact}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}

        <div className="flex justify-center">
          <div className="relative group">
            {/* Glow */}

            <div className="absolute inset-0 bg-[#C8A2C8] blur-[100px] opacity-40 rounded-full"></div>

            {/* Floating Shapes */}

            <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-white/70 backdrop-blur-md"></div>

            <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-3xl rotate-12 bg-[#E6D5F7]"></div>

            {/* Image */}

            <img
              src={profile}
              alt="Shandy"
              className="relative z-10 w-[320px] md:w-[430px] rounded-[3rem] border-4 border-white shadow-2xl transition duration-500 group-hover:scale-110 group-hover:rotate-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shandy;
