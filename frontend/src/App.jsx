import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import TablePage from './components/TablePage';
import FormPage from './components/FormPage';
import ApiDataPage from './components/ApiDataPage'; // 1. Import komponen API
import Footer from './components/Footer';

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');

  // Mengambil data dari localStorage saat aplikasi pertama kali dimuat
  const [dataTable, setDataTable] = useState(() => {
    const savedData = localStorage.getItem('padel_data');
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      return [
        { id: 1, name: 'Lapangan Padel A', category: 'Indoor', status: 'Tersedia' },
        { id: 2, name: 'Lapangan Padel B', category: 'Outdoor', status: 'Disewa' },
        { id: 3, name: 'Lapangan Padel C', category: 'Indoor', status: 'Tersedia' },
      ];
    }
  });

  useEffect(() => {
    localStorage.setItem('padel_data', JSON.stringify(dataTable));
  }, [dataTable]);

  const handleAddData = (newData) => {
    const newEntry = {
      id: Date.now(),
      name: newData.name,
      category: newData.category,
      status: 'Tersedia'
    };
    setDataTable([...dataTable, newEntry]);
    setActivePage('table');
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col justify-between">
      <Navbar setActivePage={setActivePage} />

      <main className="max-w-7xl mx-auto py-6 px-4 flex-grow w-full">
        {activePage === 'dashboard' && <Dashboard />}
        {activePage === 'table' && <TablePage dataTable={dataTable} />}
        {activePage === 'form' && <FormPage onAddData={handleAddData} />}
        
        {/* 2. Kondisi untuk menampilkan halaman API Data */}
        {activePage === 'api' && <ApiDataPage />}
      </main>

      <Footer />
    </div>
  );
}