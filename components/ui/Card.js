import React from 'react';

function Card({ title, description, btnText, className }) {
  return (
    <div
      className={`card bg-gray-800 px-6 py-14 md:px-10 md:py-16 rounded-t-md rounded-bl-md transition-all bg-gradient-to-br ${className}`}
    >
      <h3 className="text-xl lg:text-3xl font-semibold">{title}</h3>
      <p className="my-4 text-sm md:text-base">{description}</p>
      <a href="#/" className="inline-block text-white transition">
        {btnText}
      </a>
    </div>
  );
}

export default Card;
