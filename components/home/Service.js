import React from 'react';
import Card from '../ui/Card';

const SERVICES = [
  {
    id: 1,
    title: 'Web Design & Development',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, adipisci.',
    btnText: 'Know More',
    fromColor: 'cyan',
    toColor: 'blue',
  },
  {
    id: 2,
    title: 'Mobile Application Development',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, adipisci.',
    btnText: 'Know More',
    fromColor: 'pink',
    toColor: 'rose',
  },
  {
    id: 3,
    title: 'Desktop Application Development',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, adipisci.',
    btnText: 'Know More',
    fromColor: 'green',
    toColor: 'cyan',
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
              className={`hover:from-${service.fromColor}-400 hover:to-${service.toColor}-400`}
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
