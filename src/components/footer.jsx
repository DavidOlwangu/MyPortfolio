const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-8 mt-0">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Grid layout for sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Contact Section */}
          <div id="Contact">
            <h3 className="text-xl font-bold mb-2">Contact Me</h3>
            <p className="text-gray-400">
              Email:{" "}
              <a
                href="mailto:olwangu97@gmail.com"
                className="hover:text-blue-400"
              >
                olwangu97@gmail.com
              </a>
            </p>
            <p className="text-gray-400">
              Phone:{" "}
              <a href="tel:+254746963838" className="hover:text-blue-400">
                +254746 963 838
              </a>
            </p>
            <p className="text-gray-400">Location: Mombasa, Kenya</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-2">Follow Me</h3>
            <ul className="text-gray-400">
              <li>
                <a
                  href="https://www.facebook.com/david.olwangu.1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/david-olwangu-57a536199/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-xl font-bold mb-2">Skills</h3>
            <ul className="text-gray-400">
              <li>HTML5 & CSS3</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>React Native</li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-6">
          <p className="text-sm italic text-gray-400">
            &copy; 2025 Dave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
