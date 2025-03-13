import React from "react";

export default function NavBar(props) {
    const { title, links, bgColor = "bg-blue-600", textColor = "text-white", pageheader } = props;
    return (
        <nav className={`flex justify-between items-center ${bgColor} ${textColor} p-4 shadow-md`}>
            {/* Logo */}
            <div className="text-2xl font-bold">Logo</div>
            
            <div>
                <h1>{title}</h1>
            </div>
            <h1>{pageheader}</h1>
            <ul className="flex space-x-6 text-lg">
                {links && links.map((link, index) => (
                    <li key={index} className="hover:underline">
                        <a href={link.path}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
