import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="mt-32 border-t border-[#D8BFD8] bg-[#EADCF8]/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-12">
        {/* Left */}

        <div>
          <h2 className="text-2xl font-bold text-[#5E3B7E] mb-4">
            Shandy Liane
          </h2>

          <p className="text-[#5C5470] leading-relaxed">
            An Information Technology graduate passionate about front-end
            development, quality assurance, UI/UX design, and creating
            user-centered digital experiences.
          </p>
        </div>

        {/* Middle */}

        <div>
          <h3 className="text-xl font-semibold text-[#5E3B7E] mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">
            <Link
              to="/"
              className="hover:text-[#B57EDC] transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="hover:text-[#B57EDC] transition duration-300"
            >
              About
            </Link>

            <Link
              to="/projects"
              className="hover:text-[#B57EDC] transition duration-300"
            >
              Projects
            </Link>

            <Link
              to="/contact"
              className="hover:text-[#B57EDC] transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Right */}

        <div>
          <h3 className="text-xl font-semibold text-[#5E3B7E] mb-4">Connect</h3>

          <div className="flex gap-4">
            {/* GitHub */}

            <a
              href="https://github.com/FacinabaoShandyLiane"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6E4C8F] text-2xl hover:text-[#B57EDC] hover:scale-110 hover:-translate-y-1 transition duration-300"
            >
              <FaGithub />
            </a>

            {/* Facebook */}

            <a
              href="https://www.facebook.com/ShandyLiane"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6E4C8F] text-2xl hover:text-[#B57EDC] hover:scale-110 hover:-translate-y-1 transition duration-300"
            >
              <FaFacebookF />
            </a>

            {/* Instagram */}

            <a
              href="https://www.instagram.com/shnd._.ln?igsh=MTAwcWc1NDh0d244NQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6E4C8F] text-2xl hover:text-[#B57EDC] hover:scale-110 hover:-translate-y-1 transition duration-300"
            >
              <FaInstagram />
            </a>

            {/* Email */}

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=slfacinabao@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6E4C8F] text-2xl hover:text-[#B57EDC] hover:scale-110 hover:-translate-y-1 transition duration-300"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t border-[#D8BFD8] text-center py-6 text-[#7B6D8D]">
        © 2026 Shandy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
