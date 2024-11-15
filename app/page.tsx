"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = ["Home", "Projects", "Contact"];
  const projects = ["Project1", "Project2", "Project3"];

  const handleScroll = () => {
    const currentSection = sections.find((section) => {
      const element = document.getElementById(section.toLowerCase());

      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight / 2;
      }
      return false;
    });
    if (currentSection) setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar sections={sections} />
      {/* Home Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">KYLE LEE</h1>
            <h2 className="text-2xl text-gray-600 mb-8">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              I build exceptional and accesible digital experience for the web.
              Focused on creating intuitive and performant applications.
            </p>
            <div className="flex justify-center space-x-6">
              <Link href={"https://github.com"} target="blank" rel="">
                <Github className="w-6 h-6 hover:text-blue-600 transition-colors" />
              </Link>
              <Link href={"https://linkedin.com"} target="blank" rel="">
                <Linkedin className="w-6 h-6 hover:text-blue-600 transition-colors" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="md:w-3/4 lg:w-full mx-auto bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200"
              >
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project}</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of the project and the tech stacks used.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                        React
                      </span>
                      <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                        Node.js
                      </span>
                      <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                        Supabase
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Get in touch with me!
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <form className="mx-auto space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 fucos:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="px-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 fucos:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-md hoer:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
