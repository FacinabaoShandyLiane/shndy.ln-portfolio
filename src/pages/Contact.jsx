import { useState } from "react";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("slfacinabao@gmail.com");

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <section className="min-h-screen bg-[#F8F3FF] px-6 pt-36 pb-28 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#DCC6F2] opacity-40 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#C8A2C8] opacity-30 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#2E1F3E] leading-tight mb-6">
            Let's Work Together
          </h1>

          <p className="text-[#5C5470] leading-relaxed text-lg max-w-xl mb-10">
            I'm currently open to entry-level opportunities in Front-end
            Development, Quality Assurance, IT Support, and Technical Virtual
            Assistance. Whether you're looking for a team member, have a project
            in mind, or simply want to connect, I'd be happy to hear from you.
          </p>

          <div className="mb-10">
            <h3 className="text-xl font-semibold text-[#2E1F3E] mb-4">
              Open To
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "Front-end Development",
                "Quality Assurance",
                "IT Support",
                "Virtual Assistance",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-[#EADCF8] text-[#6E4C8F] font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-10">
            <button
              type="button"
              onClick={copyEmail}
              className="w-14 h-14 rounded-2xl bg-white/40 backdrop-blur-xl border-2 border-[#DCC6F2] flex items-center justify-center text-[#6E4C8F] text-2xl hover:bg-[#B57EDC] hover:text-white hover:-translate-y-1 transition duration-300 shadow-lg"
            >
              <MdEmail />
            </button>

            <a
              href="https://www.facebook.com/ShandyLiane"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl bg-white/40 backdrop-blur-xl border-2 border-[#DCC6F2] flex items-center justify-center text-[#6E4C8F] text-xl hover:bg-[#B57EDC] hover:text-white hover:-translate-y-1 transition duration-300 shadow-lg"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/shnd._.ln?igsh=MTAwcWc1NDh0d244NQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl bg-white/40 backdrop-blur-xl border-2 border-[#DCC6F2] flex items-center justify-center text-[#6E4C8F] text-xl hover:bg-[#B57EDC] hover:text-white hover:-translate-y-1 transition duration-300 shadow-lg"
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com/FacinabaoShandyLiane"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl bg-white/40 backdrop-blur-xl border-2 border-[#DCC6F2] flex items-center justify-center text-[#6E4C8F] text-xl hover:bg-[#B57EDC] hover:text-white hover:-translate-y-1 transition duration-300 shadow-lg"
            >
              <FaGithub />
            </a>
          </div>
          <div className="mt-6 h-8">
            {copied ? (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DCFCE7] text-[#15803D] text-sm font-medium">
                ✓ Email copied!
              </span>
            ) : (
              <p className="text-[#7A6E8C] text-sm">
                I usually respond within 24–48 hours.
              </p>
            )}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#DCC6F2]/40 blur-[90px] rounded-[3rem]"></div>

          <div className="relative bg-white/40 backdrop-blur-xl border-2 border-[#DCC6F2] rounded-[2rem] p-8 shadow-2xl">
            <form
              action="https://formspree.io/f/mjglpnea"
              method="POST"
              className="space-y-6"
            >
              <input
                required
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full px-5 py-4 rounded-xl bg-white/60 border border-white/50 outline-none focus:ring-2 focus:ring-[#B57EDC] text-[#2E1F3E] placeholder:text-[#7A6E8C]"
              />

              <input
                required
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 rounded-xl bg-white/60 border border-white/50 outline-none focus:ring-2 focus:ring-[#B57EDC] text-[#2E1F3E] placeholder:text-[#7A6E8C]"
              />
              <input
                required
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-5 py-4 rounded-xl bg-white/60 border border-white/50 outline-none focus:ring-2 focus:ring-[#B57EDC] text-[#2E1F3E] placeholder:text-[#7A6E8C]"
              />
              <textarea
                required
                name="message"
                rows="5"
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-5 py-4 rounded-xl bg-white/60 border border-white/50 outline-none focus:ring-2 focus:ring-[#B57EDC] text-[#2E1F3E] placeholder:text-[#7A6E8C] resize-none"
              ></textarea>

              <button
                type="submit"
                className="
                  w-full
                  py-4
                  rounded-xl
                  bg-[#6E4C8F]
                  text-white
                  font-medium
                  hover:bg-[#5A3C78]
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                  shadow-xl
                "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
