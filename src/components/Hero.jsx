import { motion } from "framer-motion"

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl"
    >

        <p className="text-gray-400 text-lg mb-4 tracking-widest uppercase">
          Frontend Developer
        </p>

        <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6">
          
          Hi, I'm{" "}
          
          <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Shandy
          </span>

        </h1>

        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          I create modern, responsive, and visually engaging
          web experiences using React and Tailwind CSS.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">

          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300">
            View Projects
          </button>

          <button className="border border-gray-700 px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300">
            Contact Me
          </button>

        </div>

      </motion.div>

    </section>
  )
}

export default Hero