import React, { useState } from 'react';
import NavBar from './NavBar';

export default function Home() {
  const [count, setCount] = useState(0);

  const navLinks = [
    { text: "Home", path: "/home" },
    { text: "Projects", path: "/projects" },
    { text: "Contact", path: "/contact" },
    { text: "Services", path: "/services" },
    { text: "About", path: "/about" },
  ];

  return (
    <>
      <NavBar links={navLinks} />
    {/*Main container*/}
    <div className="w-full min-h-screen bg-gray-200 flex items-center justify-center p-8">
      {/*Flex container for content*/}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/*Left section text*/}
        <div className="md:w-1/1 text-center md:text-left">
          <h1 className="text-6xl font-bold text-gray-800">
            Welcome to My Portfolio
          </h1>
          
          <p className="text-lg text-gray-800 max-w-lg mt-4">
            I am David, a passionate software developer, l love coding and building amazing projects.
          </p>
        </div>
        
        {/*Right section image*/}
        <div className="md:w-1/4 flex justify-center">
          <img src="../images/mypassport.png"
            alt="Profile"
            className="rounded-full w-36 h-36 mt-8 shadow-lg"
          />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Projects
        </button>
      </div>
    </div>
    </>
  );
}