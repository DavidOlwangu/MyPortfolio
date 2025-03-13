import React, { useState } from 'react';
import NavBar from './NavBar';

export default function Home() {
  const [count, setCount] = useState(0);

  const navLinks = [
    { text: "Home", path: "/home" },
    { text: "About", path: "/about" },
    { text: "Contact", path: "/contact" },
    { text: "Portfolio", path: "/portfolio" },
    { text: "Services", path: "/services" },
    { text: "Blog", path: "/blog" },
    { text: "Login", path: "/login" },
    { text: "Sign up", path: "/signup" }
  ];

  return (
    <>
      <NavBar
        title="My Portfolio"
        links={navLinks}
      />
      <div className="w-full h-full bg-gray-200">
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-8 gap-6">
          <h1 className="text-5xl font-bold text-gray-800">Welcome to My Portfolio</h1>
          
          <p className="text-lg text-gray-600 max-w-lg">
            Hi, I'm David, a passionate software developer who loves coding and building amazing projects.
          </p>
          
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-full w-36 h-36 mt-8 shadow-lg"
          />
          
          <button className="mt-6 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            View My Work
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center mt-4">
        <p>You clicked {count} times</p>
        <button className="mt-2 p-2 bg-blue-600 text-white rounded" onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </>
  );
}


