import React from 'react';

const SKILLS = [
  {
    id: 1,
    image: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
  },
  {
    id: 2,
    image: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
  },
  {
    id: 3,
    image: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
  },
  {
    id: 4,
    image: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
  },
  {
    id: 5,
    image: 'https://cdn.worldvectorlogo.com/logos/deno-2.svg',
  },
  {
    id: 6,
    image: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
  },
  {
    id: 7,
    image: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg',
  },
  {
    id: 8,
    image: 'https://cdn.worldvectorlogo.com/logos/docker.svg',
  },
  {
    id: 9,
    image: 'https://cdn.worldvectorlogo.com/logos/kubernets.svg',
  },
  {
    id: 10,
    image: 'https://cdn.worldvectorlogo.com/logos/electron-1.svg',
  },
];

function About() {
  return (
    <div
      id="about"
      className="bg-gradient-to-brs from-pink-500 to-rose-500 py-20"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <p className="leading-loose">
            Hello, I'm AHNM Ebn Sina. A Full Stack Developer in Bangladesh. I'm
            a self taught programmer. I did my study in Laboratory Medicine but
            I found myself I love to code, then I switch my career in
            programming. I love my daily work. My main skill is JavaScript. I'm
            a Full Stack JavaScript Developer. I build Web Applications, Cross
            Platform Mobile Application and Desktop Applications.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {SKILLS.map((skill) => (
            <div key={skill.id}>
              <img
                className="rounded-lg"
                src={skill.image}
                alt=""
                width={40}
                height={40}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
