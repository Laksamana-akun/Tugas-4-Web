import React, { useState } from 'react';

export default function FormPage({ onAddData }) {
  const [formData, setFormData] = useState({ 
    name: '', 
    category: 'Indoor', 
    price: '' 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) {
      alert('Nama lapangan harus diisi!');
      return;
    }
    
    // Memanggil fungsi dari App.jsx untuk menyimpan data baru
    if (onAddData) {
      onAddData(formData);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Form Tambah Lapangan Baru</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow p-6 rounded-lg border border-gray-200 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nama Lapangan</label>
          <input 
            type="text" 
            required
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="Contoh: Lapangan Padel D"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Kategori</label>
          <select 
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
          >
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Harga per Jam (Rp)</label>
          <input 
            type="number" 
            required
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.price}
            onChange={(e) => setFormData({...formData, price: e.target.value})}
            placeholder="Contoh: 150000"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Simpan Data
        </button>
      </form>
    </div>
  );
}