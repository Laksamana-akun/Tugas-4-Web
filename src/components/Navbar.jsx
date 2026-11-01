import React from 'react';

export default function Navbar({ setActivePage }) {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="font-bold text-xl tracking-wide">PadelPro Manager</span>
        
        <div className="space-x-2 flex">
          <button 
            onClick={() => setActivePage('dashboard')}
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
          >
            Dashboard
          </button>
          <button 
            onClick={() => setActivePage('table')}
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
          >
            Daftar Lapangan
          </button>
          <button 
            onClick={() => setActivePage('form')}
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
          >
            Tambah Lapangan
          </button>
          {/* Tombol menu baru untuk Tugas 7 */}
          <button 
            onClick={() => setActivePage('api')}
            className="px-3 py-2 rounded-md text-sm font-medium bg-blue-700 hover:bg-blue-800 transition"
          >
            Data Mitra (API)
          </button>
        </div>
      </div>
    </nav>
  );
}