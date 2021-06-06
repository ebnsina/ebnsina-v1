import React from 'react';
import Card from '../ui/Card';

const SERVICES = [
  {
    id: 1,
    title: 'Web Design & Development',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, adipisci.',
    btnText: 'Know More',
    fromColor: 'hover:from-cyan-400',
    toColor: 'hover:to-blue-400',
  },
  {
    id: 2,
    title: 'Mobile Application Development',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, adipisci.',
    btnText: 'Know More',
    fromColor: 'hover:from-pink-400',
    toColor: 'hover:to-rose-400',
  },
  {
    id: 3,
    title: 'Desktop Application Development',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, adipisci.',
    btnText: 'Know More',
    fromColor: 'hover:from-green-400',
    toColor: 'hover:to-cyan-400',
  },
];

function Service() {
  return (
    <div id="service" className="py-4 md:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-2xl font-semibold mb-3">Expert In</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {SERVICES.map((service) => (
            <Card
              className={`${service.fromColor} ${service.toColor}`}
              key={service.id}
              title={service.title}
              description={service.description}
              btnText={service.btnText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
