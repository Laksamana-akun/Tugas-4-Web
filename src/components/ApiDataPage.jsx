import React, { useState, useEffect } from 'react';

export default function ApiDataPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fungsi untuk mengambil data dari API eksternal
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Gagal terhubung ke server API.');
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Daftar Mitra / Pengguna (Data API Eksternal)</h1>

      {/* 1. Kondisi Loading */}
      {loading && (
        <div className="text-center py-10 bg-white shadow rounded-lg border border-gray-200">
          <p className="text-blue-600 font-medium animate-pulse">Sedang memuat data dari server...</p>
        </div>
      )}

      {/* 2. Kondisi Error & Tombol Coba Lagi */}
      {error && (
        <div className="bg-red-50 border border-red-200 p-6 rounded-lg text-center space-y-4">
          <p className="text-red-600 font-semibold">Terjadi Kesalahan: {error}</p>
          <button 
            onClick={fetchData}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
          >
            Coba Lagi
          </button>
        </div>
      )}

      {/* 3. Kondisi Success (Render List dengan .map()) */}
      {!loading && !error && (
        <div className="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
          <ul className="divide-y divide-gray-200">
            {data.map((user) => (
              <li key={user.id} className="p-4 hover:bg-gray-50 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email} - {user.phone}</p>
                </div>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                  {user.company.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}