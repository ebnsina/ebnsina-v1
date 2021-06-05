import React from 'react';

function CTA() {
  return (
    <div id="contact" className="py-6 md:py-24">
      <div className="container mx-auto md:max-w-md lg:max-w-2xl px-4 md:px-8 lg:px-16 py-8 md:py-16 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg text-center shadow-lg">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          Have any project in mind? Say Hello at
        </h3>

        <a
          href="mailto:ebnsina.dev@gmail.com"
          className="inline-flex hover:underline"
        >
          ebnsina.dev@gmail.com
        </a>
      </div>
    </div>
  );
}

export default CTA;
