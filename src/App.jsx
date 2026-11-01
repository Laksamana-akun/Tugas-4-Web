import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import TablePage from './components/TablePage';
import FormPage from './components/FormPage';

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');

  // Mengambil data dari localStorage saat aplikasi pertama kali dimuat
  const [dataTable, setDataTable] = useState(() => {
    const savedData = localStorage.getItem('padel_data');
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      // Data awal jika localStorage masih kosong
      return [
        { id: 1, name: 'Lapangan Padel A', category: 'Indoor', status: 'Tersedia' },
        { id: 2, name: 'Lapangan Padel B', category: 'Outdoor', status: 'Disewa' },
        { id: 3, name: 'Lapangan Padel C', category: 'Indoor', status: 'Tersedia' },
      ];
    }
  });

  // Menyimpan data ke localStorage setiap kali ada perubahan pada dataTable
  useEffect(() => {
    localStorage.setItem('padel_data', JSON.stringify(dataTable));
  }, [dataTable]);

  // Fungsi untuk menambahkan data baru dari form
  const handleAddData = (newData) => {
    const newEntry = {
      id: Date.now(), // Menggunakan timestamp agar ID unik
      name: newData.name,
      category: newData.category,
      status: 'Tersedia'
    };
    setDataTable([...dataTable, newEntry]);
    setActivePage('table'); // Otomatis pindah ke halaman tabel setelah disimpan
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Navbar setActivePage={setActivePage} />

      <main className="max-w-7xl mx-auto py-6 px-4">
        {activePage === 'dashboard' && <Dashboard />}
        {activePage === 'table' && <TablePage dataTable={dataTable} />}
        {activePage === 'form' && <FormPage onAddData={handleAddData} />}
      </main>
    </div>
  );
}