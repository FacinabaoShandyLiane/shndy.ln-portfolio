import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";

// FIGMA
import wheel1 from "../assets/figma/wheel1.png";
import wheel2 from "../assets/figma/wheel2.png";
import wheel3 from "../assets/figma/wheel3.png";
import wheel4 from "../assets/figma/wheel4.png";

import task1 from "../assets/figma/task1.png";
import task2 from "../assets/figma/task2.png";
import task3 from "../assets/figma/task3.png";
import task4 from "../assets/figma/task4.png";

// DEV PROJECT LOGOS
import maristaPayLogo from "../assets/logos/maristapay-logo.png";
import marisTrackLogo from "../assets/logos/maristrack-logo.png";
import recipeFinderLogo from "../assets/logos/recipe-finder.png";
import taskFlowLogo from "../assets/logos/taskflow.png";

// LOGOS
import internationalizationLogo from "../assets/logos/internationalization-logo.png";
import nexusLogo from "../assets/logos/nexus.png";
import qapsLogo from "../assets/logos/quaps-logo.png";
import tatakLogo from "../assets/logos/tatak-logo.png";
import verdantLogo from "../assets/logos/verdant.png";
import vortexLogo from "../assets/logos/vortex.png";

// PUBMATS
import donation from "../assets/pubmats/donation.png";
import flightTicket from "../assets/pubmats/flight-ticket.png";
import ipDesign1 from "../assets/pubmats/ip-design-1.png";
import ipDesign2 from "../assets/pubmats/ip-design-2.png";
import ipDesign3 from "../assets/pubmats/ip-design-3.png";
import milkyBoba from "../assets/pubmats/milky-boba.png";
import tonysPizzeria from "../assets/pubmats/tonys-pizzeria.png";
function Projects() {
  const [selectedImages, setSelectedImages] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const devProjects = [
    {
      title: "MarisTrack",
      image: marisTrackLogo,
      role: "Front-end Developer • UI/UX Designer • QA Tester",
      description:
        "A web-based attendance monitoring system developed during my internship for Notre Dame of Marbel University's NSTP program. I collaborated with the team to design the user interface in Figma, developed responsive front-end pages using HTML, CSS, JavaScript, and Tailwind CSS, and performed usability testing and documentation to improve the overall user experience.",
      tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Figma"],
      link: "https://maristrack-ojt.vercel.app",
    },

    {
      title: "MaristaPay",
      image: maristaPayLogo,
      role: "Front-end Developer • UI/UX Designer • QA Tester",
      description:
        "A payment management system developed during my internship for the DSA Office of Notre Dame of Marbel University. I collaborated on the UI design in Figma, developed responsive front-end interfaces using HTML, CSS, JavaScript, and Tailwind CSS, and assisted with usability testing and documentation to support efficient payment monitoring.",
      tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Figma"],
      link: "https://maristapay-ojt.vercel.app",
    },

    {
      title: "Recipe Finder",
      image: recipeFinderLogo,
      role: "Academic Project • Flutter Developer",
      description:
        "A Flutter application developed as part of a mobile application development course. The project was built by following project requirements and implementing features such as recipe browsing and category-based navigation while strengthening my Flutter and Dart development skills.",
      tech: ["Flutter", "Dart"],
      link: "https://recipefindproject.netlify.app",
    },

    {
      title: "TaskFlow",
      image: taskFlowLogo,
      role: "Academic Project • Front-end Developer • UI/UX Designer",
      description:
        "A collaborative final course project designed to help users organize tasks, track progress, and improve productivity. The portfolio version is a redesigned demonstration that showcases my front-end development and UI/UX design skills.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://taskflow-project1.netlify.app",
    },
  ];

  const logoCollection = [
    { name: "Internationalization", image: internationalizationLogo },
    { name: "MaristaPay", image: maristaPayLogo },
    { name: "MarisTrack", image: marisTrackLogo },
    { name: "Nexus", image: nexusLogo },
    { name: "QAPS", image: qapsLogo },
    { name: "Recipe Finder", image: recipeFinderLogo },
    { name: "TaskFlow", image: taskFlowLogo },
    { name: "Tatak", image: tatakLogo },
    { name: "Verdant", image: verdantLogo },
    { name: "Vortex", image: vortexLogo },
  ];
  const figmaProjects = [
    {
      title: "WheelBorrow",
      role: "UI/UX Designer",
      description:
        "A UI/UX prototype designed in Figma for a car rental platform that simplifies vehicle booking through an intuitive interface, user-friendly navigation, and a seamless reservation experience.",
      images: [wheel1, wheel2, wheel3, wheel4],
      tech: ["Figma", "Wireframing", "Prototyping", "UI/UX Design"],
      link: "https://www.figma.com/proto/cGiLsyAUHBW5w2RsaRXZlq/WheelBorrows?node-id=60-335&t=BQJd7Yv2eUfPGfbk-1",
    },

    {
      title: "TaskMinder",
      role: "UI/UX Designer",
      description:
        "Designed a productivity and task management application prototype in Figma that helps users organize tasks, manage schedules, and improve daily productivity through a clean and intuitive interface.",
      images: [task1, task2, task3, task4],
      tech: ["Figma", "Wireframing", "Prototyping", "UI/UX Design"],
      link: "https://www.figma.com/proto/0tbQ4QFKcKNG7XSRNg5pQC/TimeMinder?node-id=0-1&t=b7h0BtoHKLsLIgMk-1",
    },
  ];

  const pubmats = [
    { title: "Donation", image: donation },
    { title: "Flight Ticket", image: flightTicket },
    { title: "IP Design 1", image: ipDesign1 },
    { title: "IP Design 2", image: ipDesign2 },
    { title: "IP Design 3", image: ipDesign3 },
    { title: "Milky Boba", image: milkyBoba },
    { title: "Tony's Pizzeria", image: tonysPizzeria },
  ];
  const openGallery = (images, startIndex = 0) => {
    setSelectedImages(images);
    setCurrentImage(startIndex);
  };

  const closeGallery = () => {
    setSelectedImages(null);
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === selectedImages.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? selectedImages.length - 1 : prev - 1,
    );
  };
  return (
    <section
      id="projects"
      className="min-h-screen px-6 pt-36 pb-28 bg-[#F8F3FF] relative overflow-hidden"
    >
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#DCC6F2] opacity-40 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#C8A2C8] opacity-30 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Heading */}

        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-[#2E1F3E] mb-6">
            Portfolio
          </h2>
          <p className="mt-4 text-[#6E4C8F] text-xl">
            Software Development • UI/UX • Branding • Graphic Design
          </p>
          <p className="text-[#5C5470] max-w-2xl mx-auto leading-relaxed">
            A curated portfolio showcasing software development, UI/UX design,
            branding, and graphic design projects completed through academic
            work, internship experience, and personal learning.
          </p>
        </div>

        {/* DEVELOPMENT PROJECTS */}

        <div className="mb-24">
          <div className="flex items-center gap-5 mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-[#2E1F3E] whitespace-nowrap">
              Featured Software Projects
            </h3>

            <div className="w-full h-[2px] bg-gradient-to-r from-[#DCC6F2] to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devProjects.map((project, index) => (
              <div
                key={index}
                className="
group
bg-white/40
backdrop-blur-xl
border-2
border-[#DCC6F2]
rounded-[2rem]
overflow-hidden
hover:border-[#B57EDC]
hover:-translate-y-3
hover:shadow-2xl
transition-all
duration-300
"
              >
                {/* Image Placeholder */}

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[220px] object-contain p-2 bg-white"
                />

                {/* Content */}

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[#2E1F3E]">
                    {project.title}
                  </h3>

                  <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#F1E6FA] text-[#6E4C8F] text-xs font-semibold">
                    {project.role}
                  </span>

                  <p className="text-[#5C5470] text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}

                  <div className="flex gap-3 flex-wrap mb-6">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-[#EADCF8] text-[#6E4C8F] text-sm border border-white/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 rounded-full bg-[#111111] text-white text-sm hover:scale-105 transition duration-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FIGMA PROJECTS */}

        <div className="mb-24">
          <div className="flex items-center gap-5 mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-[#2E1F3E] whitespace-nowrap">
              UI/UX Design Projects
            </h3>

            <div className="w-full h-[2px] bg-gradient-to-r from-[#DCC6F2] to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {figmaProjects.map((project, index) => (
              <div
                key={index}
                className="
group
bg-white/40
backdrop-blur-xl
border-2
border-[#DCC6F2]
rounded-[2rem]
overflow-hidden
hover:border-[#B57EDC]
hover:-translate-y-3
hover:shadow-2xl
transition-all
duration-300
"
              >
                <Swiper modules={[Navigation]} navigation className="h-[220px]">
                  {project.images.map((image, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={image}
                        alt={project.title}
                        className="w-full h-[220px] object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[#2E1F3E]">
                    {project.title}
                  </h3>

                  <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#F1E6FA] text-[#6E4C8F] text-xs font-semibold">
                    {project.role}
                  </span>

                  <p className="text-[#5C5470] text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex gap-3 flex-wrap mb-6">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-[#EADCF8] text-[#6E4C8F] text-sm border border-white/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => openGallery(project.images)}
                      className="px-5 py-2 rounded-full bg-[#6E4C8F] text-white text-sm hover:scale-105 transition duration-300"
                    >
                      Preview
                    </button>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-full bg-[#111111] text-white text-sm hover:scale-105 transition duration-300"
                    >
                      View Prototype
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LOGO COLLECTION */}

        <div className="mb-24">
          <div className="flex items-center gap-5 mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-[#2E1F3E] whitespace-nowrap">
              Brand Identity Design
            </h3>

            <div className="w-full h-[2px] bg-gradient-to-r from-[#DCC6F2] to-transparent"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {logoCollection.map((logo, index) => (
              <div
                key={index}
                onClick={() =>
                  openGallery(
                    logoCollection.map((item) => item.image),
                    index,
                  )
                }
                className="
cursor-pointer
bg-white/40
backdrop-blur-xl
border-2
border-[#DCC6F2]
rounded-[2rem]
p-5
hover:-translate-y-3
hover:border-[#B57EDC]
transition-all
duration-300
"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="w-full aspect-square object-contain"
                />

                <p className="text-center mt-3 text-sm font-medium text-[#2E1F3E]">
                  {logo.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PUBLICATION MATERIALS */}

        <div>
          <div className="flex items-center gap-5 mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-[#2E1F3E] whitespace-nowrap">
              Marketing & Publication Designs
            </h3>

            <div className="w-full h-[2px] bg-gradient-to-r from-[#DCC6F2] to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pubmats.map((pubmat, index) => (
              <div
                key={index}
                onClick={() =>
                  openGallery(
                    pubmats.map((item) => item.image),
                    index,
                  )
                }
                className="
cursor-pointer
bg-white/40
backdrop-blur-xl
border-2
border-[#DCC6F2]
rounded-[2rem]
p-4
hover:-translate-y-3
hover:border-[#B57EDC]
transition-all
duration-300
"
              >
                <img
                  src={pubmat.image}
                  alt={pubmat.title}
                  className="w-full h-[320px] object-cover rounded-xl"
                />

                <p className="text-center mt-3 font-medium text-[#2E1F3E]">
                  {pubmat.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedImages && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeGallery}
              className="absolute -top-12 right-0 text-white text-3xl"
            >
              ×
            </button>

            <img
              src={selectedImages[currentImage]}
              alt="Preview"
              className="w-full max-h-[80vh] object-contain rounded-2xl bg-white"
            />

            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={prevImage}
                className="bg-white px-4 py-2 rounded-full"
              >
                ← Previous
              </button>

              <button
                onClick={nextImage}
                className="bg-white px-4 py-2 rounded-full"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
