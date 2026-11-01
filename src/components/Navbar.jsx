import React, { useState } from 'react';

export default function Navbar({ setActivePage }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold text-xl">AppPadelPro</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <button onClick={() => setActivePage('dashboard')} className="hover:bg-blue-700 px-3 py-2 rounded-md">Dashboard</button>
            <button onClick={() => setActivePage('table')} className="hover:bg-blue-700 px-3 py-2 rounded-md">Daftar Data</button>
            <button onClick={() => setActivePage('form')} className="hover:bg-blue-700 px-3 py-2 rounded-md">Form Tambah</button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-700">
          <button onClick={() => { setActivePage('dashboard'); setIsOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md hover:bg-blue-800">Dashboard</button>
          <button onClick={() => { setActivePage('table'); setIsOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md hover:bg-blue-800">Daftar Data</button>
          <button onClick={() => { setActivePage('form'); setIsOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md hover:bg-blue-800">Form Tambah</button>
        </div>
      )}
    </nav>
  );
}