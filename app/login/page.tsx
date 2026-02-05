'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Kirim password ke API untuk dicek
    const res = await fetch('/api/auth', {
      method: 'POST',
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push('/admin'); // Redirect ke admin jika sukses
    } else {
      alert('Password Salah!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md">
        <h1 className="text-xl font-bold mb-4 text-black">Login Admin</h1>
        <input
          type="password"
          placeholder="Password..."
          className="border p-2 w-full mb-4 text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-black text-white px-4 py-2 w-full rounded">
          Masuk
        </button>
      </form>
    </div>
  );
}