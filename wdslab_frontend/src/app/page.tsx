'use client';
import { useState, useEffect } from 'react';
import api from '../services/api';

export default function Home() {
  const [message, setMessage] = useState('Loading...');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 끝에 슬래시(/)가 없는 URL 호출
        const response = await api.get('/test/');
        setMessage(response.data.message);
      } catch (err) {
        setError('Failed to connect to the backend');
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-4">Next.js + Django + PostgreSQL</h1>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p className="text-2xl">Backend says: {message}</p>
        )}
      </div>
    </main>
  );
}