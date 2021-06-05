import React from 'react';
import { HiDocumentDownload } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaEnvelope,
  FaLinkedin,
} from 'react-icons/fa';

function Hero() {
  return (
    <div className="hero">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-4 py-10 md:py-0 md:h-screen">
        <div className="flex justify-center items-center md:items-start flex-col">
          <div className="bg-gradient-to-tr from-pink-500 to-yellow-500 p-1 rounded-full lg:rounded-lg">
            <div className="bg-white p-1 rounded-full lg:rounded-lg">
              <img
                className="w-24 h-24 md:w-32 md:h-32 lg:w-72 lg:h-72 rounded-full object-cover lg:rounded-lg"
                src="/ebnsina.jpeg"
                alt="ebnsina"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center md:items-start flex-col">
          <h1 className="text-2xl md:text-3xl lg:text-6xl">I'm Ebn Sina</h1>
          <p className="text-md mt-2 text-center">
            Full Stack Developer &middot; JavaScript Evangelist &middot;
            Instructor
          </p>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 my-8 text-sm md:text-md">
            <a
              className="bg-gradient-to-r from-cyan-400 to-blue-500 focus:from-pink-500 hover:from-pink-500 hover:to-yellow-500 px-8 p-3 rounded-lg inline-block"
              href="#/"
            >
              Available for Work
            </a>
            <a
              className="bg-gray-800 px-8 p-3 rounded-lg inline-flex items-center"
              href="/EbnSina.pdf"
              target="_blank"
            >
              <HiDocumentDownload className="mr-2" />
              Download CV
            </a>
          </div>

          <ul className="flex space-x-6">
            <li>
              <a href="https://www.facebook.com/ebnsina.dev" target="_blank">
                <FaFacebook size={20} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/ebns1na" target="_blank">
                <FaTwitter size={20} />
              </a>
            </li>
            <li>
              <a href="https://github.com/ebnsina" target="_blank">
                <FaGithub size={20} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ebn-sina" target="_blank">
                <FaLinkedin size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UC9Fr3dOzOdboqPl_YJrpmOw"
                target="_blank"
              >
                <FaYoutube size={20} />
              </a>
            </li>

            <li>
              <a href="mailto:ebnsina.me@gmail.com" target="_blank">
                <FaEnvelope size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;
