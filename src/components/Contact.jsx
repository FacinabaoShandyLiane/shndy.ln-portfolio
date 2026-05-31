function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-5xl font-bold mb-8">Contact Me</h2>

        <p className="text-gray-400 text-lg mb-12">
          Have a project, collaboration, or opportunity? Feel free to reach out.
        </p>

        <div className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-white/50 border border-white/60 rounded-2xl px-6 py-4 outline-none focus:border-[#B57EDC] backdrop-blur-md placeholder:text-[#7B6D8D] text-[#3B2A4A]"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-white/50 border border-white/60 rounded-2xl px-6 py-4 outline-none focus:border-[#B57EDC] backdrop-blur-md placeholder:text-[#7B6D8D] text-[#3B2A4A]"
          />

          <textarea
            placeholder="Your Message"
            rows="6"
            className="w-full bg-white/50 border border-white/60 rounded-2xl px-6 py-4 outline-none focus:border-[#B57EDC] backdrop-blur-md placeholder:text-[#7B6D8D] text-[#3B2A4A] resize-none"
          ></textarea>

          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
