"use client"

import { useState } from 'react';


export default function Pricing() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col mx-auto px-2 py-4">
      <h1 className="text-4xl text-red-400">Pricing</h1>

      <div className="relative inline-block">
        <button
          onClick={toggleMenu}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700"
        >
          Click me!
        </button>

        {isOpen && (
          <div className="absolute z-10 top-full left-0 bg-white border border-gray-300 py-2 rounded shadow-lg">
            <ul>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                    Option 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Option 2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Option 3
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
