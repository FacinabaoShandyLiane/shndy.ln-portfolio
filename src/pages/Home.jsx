import profile from "../assets/profile.png";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="min-h-screen bg-[#F8F3FF] relative overflow-hidden px-6 flex items-center">
      {/* Background Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#DCC6F2] opacity-40 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#C8A2C8] opacity-30 blur-[120px] rounded-full"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-20 items-center pt-28">
        {/* LEFT SIDE */}
        <div className="text-center md:text-left">
          <p className="text-[#000000] text-5xl mb-2 tracking-wide font-semibold">
            Hello,
          </p>

          <h1 className="text-4xl md:text-[3.5rem] font-bold leading-[1.05] mb-6 whitespace-nowrap">
            <span className="text-black">I'm </span>
            <span className="text-[#563075]">Shandy Liane Facinabao</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Tech-Savvy Virtual Assistant",
              2000,
              "Quality Assurance Tester",
              2000,
              "UI/UX Designer",
              2000,
              "Front-end Developer",
              2000,
            ]}
            wrapper="div"
            speed={60}
            repeat={Infinity}
            className="text-[#6E4C8F] text-xl md:text-2xl font-semibold mb-8"
          />

          <p className="text-[#5C5470] italic text-base md:text-lg leading-relaxed max-w-xl mb-10">
            IT Graduate passionate about administrative support, quality
            assurance, UI/UX design, and modern web development.
          </p>

          {/* Buttons */}
          <div className="flex gap-5 justify-center md:justify-start flex-wrap">
            <Link
              to="/projects"
              className="px-8 py-4 rounded-full bg-[#111111] text-white font-medium hover:scale-105 transition duration-300 shadow-xl"
            >
              View Projects
            </Link>

            <Link
              to="/about"
              className="px-8 py-4 rounded-full border border-[#B57EDC] text-[#6E4C8F] font-medium hover:bg-[#B57EDC] hover:text-white transition duration-300"
            >
              About Me
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
          <div className="relative group animate-[float_6s_ease-in-out_infinite]">
            <div className="absolute inset-0 bg-[#DCC6F2]/50 blur-[90px] rounded-[3rem] scale-110"></div>

            <div className="absolute -inset-4 rounded-[3rem] border border-[#DCC6F2] animate-[spin_12s_linear_infinite]"></div>

            <div className="absolute -inset-6 rounded-[3rem] border border-[#B57EDC]/50 animate-[spinReverse_18s_linear_infinite]"></div>

            <div className="relative z-10 overflow-hidden rounded-[3rem] transition duration-500 group-hover:-translate-y-3 group-hover:scale-105">
              <img
                src={profile}
                alt="Shandy"
                className="w-[280px] md:w-[370px] object-cover rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
