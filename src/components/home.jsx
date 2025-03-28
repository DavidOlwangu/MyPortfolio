import NavBar from './NavBar.jsx';

export default function Home() {
  const navLinks = [
    { text: "Home", path: "#home" },
    { text: "About", path: "#about" },
    { text: "Services", path: "#services" },
    { text: "Projects", path: "#projects" },
  ];

  return (
    <>
      <NavBar links={navLinks} />

      {/* Main Welcome Section */}
      <div id="home" className="w-full min-h-[70vh] bg-gray-100 flex items-center justify-center p-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Section Text */}
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-5xl font-bold text-gray-800">Welcome to My Portfolio</h1>
            <p className="text-lg text-gray-900 mt-3">
              Software Developer | IT Support Specialist
            </p>
          </div>
          
          {/* Right Section Image */}
          <div className="md:w-1/3 flex justify-center">
            <img 
              src="../images/mypassport.png" 
              alt="Profile"
              className="rounded-full w-36 h-36 shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div id="about" className="w-full bg-white py-12 px-6 md:px-12 flex justify-center">
        <div className="max-w-none bg-gray-100 p-8 md:p-12 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">About Me</h1>
          <p className="text-gray-700 leading-relaxed">
            I hold a BSc. in Information Science but later transitioned into the IT field due to my passion for technology. 
            I was honored to receive a Google scholarship in IT Support through Coursera, where I gained foundational 
            knowledge in operating systems, troubleshooting, networking, PC security, systems administration, and 
            information infrastructure.
          </p>
          <p className="text-gray-700 mt-3 leading-relaxed">
            Currently, I am training in building projects using React.js, Vite, JavaScript, and React Native (Expo) 
            through another scholarship program, SKIES KIEP. My focus is on developing scalable applications, improving 
            problem-solving skills, and gaining hands-on experience in front-end and mobile development.
          </p>
          <p className="text-gray-700 mt-3 leading-relaxed">
            I am dedicated to continuous learning and exploring new technologies to become a skilled software developer. 
            Through my journey, I aim to develop innovative solutions, collaborate with like-minded individuals, and 
            contribute to the ever-evolving tech industry.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="container mx-auto py-12 px-6 md:px-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Technical Article Writing */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Technical Article Writing</h2>
            <p className="text-gray-600">
              I create well-researched, engaging, and informative technical content on software development, IT infrastructure, cybersecurity, and emerging tech trends.
            </p>
          </div>

          {/* IT Support */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">IT Support</h2>
            <p className="text-gray-600">
              I provide troubleshooting and network maintenance to ensure smooth operation of computer systems with enhanced security.
            </p>
          </div>

          {/* Software Development */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Software Development</h2>
            <p className="text-gray-600">
              I develop scalable and efficient software solutions using React.js, React Native (Expo), Vite, and JavaScript, focusing on performance and user experience.
            </p>
          </div>

          {/* Web Design */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Web Design</h2>
            <p className="text-gray-600">
              I design and develop modern, responsive websites using React.js, HTML, CSS, and Tailwind CSS, ensuring seamless navigation and aesthetic appeal.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
