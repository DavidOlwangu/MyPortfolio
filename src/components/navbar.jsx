import React from "react";

export default function NavBar(props) {
    const { title, links, bgColor = "bg-blue-600", textColor = "text-white", pageheader } = props;
    
    return (
        <nav className={`fixed top-0 left-0 w-full items-center ${bgColor} ${textColor} p-4 shadow-md z-50 flex justify-between items-center`}>

            {/* Logo */}
            <div className="text-2xl font-bold">MyPortfolio</div>
            
            <div>
                <h1>{title}</h1>
            </div>
            <h1>{pageheader}</h1>
            <ul className="flex space-x-18 text-lg">
                {links && links.map((link, index) => (
                    <li key={index} className="hover:underline">
                        <a href={link.path}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
