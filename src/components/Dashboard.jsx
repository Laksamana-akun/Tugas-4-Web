import React from 'react';

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Dashboard Utama</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
          <h3 className="text-gray-500 text-sm font-medium">Total Lapangan / Item</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
          <h3 className="text-gray-500 text-sm font-medium">Pengguna Aktif</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">1,245</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
          <h3 className="text-gray-500 text-sm font-medium">Transaksi Bulan Ini</h3>
          <p className="text-3xl font-bold text-purple-600 mt-2">Rp 45.2jt</p>
        </div>
      </div>
    </div>
  );
}