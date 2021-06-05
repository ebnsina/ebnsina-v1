import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const PORTFOLIO = [
  {
    id: 1,
    title: 'Planet Nine',
    description:
      'Studio, Publisher & Media Solutions. Digital Asset Creation at scale, working for the best agencies, publishers and brands. Dynamic ads, social video and all rich media.',
    url: 'https://planetnine.vercel.app',
    image:
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/fbanijhrol4-annie-spratt-776x951.jpg',
  },
  {
    id: 2,
    title: 'Light Castle',
    description:
      'LightCastle Partners - Business Consulting Firm in Bangladesh. LightCastle creates data-driven opportunities for growth and lasting impact for development partners, corporations, startups and SMEs.',
    url: 'https://lcbd.vercel.app',
    image:
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/2rm8p0rkxiw-marius-masalar-776x582.jpg',
  },
  {
    id: 3,
    title: 'BYLCx',
    description:
      'Build Your Future. Take a course from BYLCx and learn in-demand skills. BYLCx provides online learning to equip young people with leadership skills, and enable them to have high impact in public, private, and civil sectors.',
    url: 'https://x.bylc.org',
    image:
      'https://images.unsplash.com/photo-1622838650122-51b277788e80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
  },
  {
    id: 4,
    title: 'Roomzn',
    description:
      'Roomzn: Roommate Finder, Flatmates &amp; Roommates. Find great places & people to share a home.',
    url: 'https://www.roomzn.com',
    image:
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/hdyo6rr3kqk-scott-webb-1172x780.jpg',
  },
  {
    id: 5,
    title: 'Defence Homes',
    description:
      'Defence Homes Ltd. is a real estate company with strong presence in Bangladesh real estate market. It comes with 10-years old legacy of Defence group. A Real Estate Company of Bangladesh owned and organized by a group of people of Bangladesh defence.',
    url: ' http://defencehomes.com',
    image:
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/xohlruw4k8-christelle-bourgeois-776x758.jpg',
  },
];

function Portfolio() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-2xl font-semibold mb-3">Showcase</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PORTFOLIO.map((portfolio) => (
            <div
              key={portfolio.id}
              style={{
                backgroundImage: `url(${portfolio.image})`,
              }}
              className="portfolio-card relative table h-80 rounded-2xl object-cover object-center bg-center"
            >
              <div className="table-cell align-middle w-full p-3 text-center bg-cyan-400 rounded-2xl transition">
                <h3 className="text-2xl font-semibold">{portfolio.title}</h3>
                <p className="text-sm my-3">{portfolio.description}</p>
                <a
                  className="flex justify-center items-center bg-gray-800 w-10 h-10 rounded-full mx-auto transition hover:shadow-lg"
                  href={portfolio.url}
                  target="_blank"
                >
                  <BsArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>

        <a
          className="flex justify-center items-center mx-auto bg-gray-800 shadow-lg transition hover:bg-cyan-400 rounded-lg max-w-xs mt-10 px-8 py-3"
          href="https://github.com/ebnsina?tab=repositories"
          target="_blank"
        >
          See More
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
