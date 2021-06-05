import React from 'react';

function Footer() {
  return (
    <footer className="py-5">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
        <p>&copy; Ebn Sina - {new Date().getFullYear()}</p>
        <p>That's all folks. Thanks for scrolling.</p>
      </div>
    </footer>
  );
}

export default Footer;
