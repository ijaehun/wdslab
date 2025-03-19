'use client';

import React, { useState } from 'react';
import GlobalSidebar from './GlobalSidebar';
import { LayoutProps } from '@/types/layout';

const GlobalLayout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <GlobalSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className={`p-4 ${sidebarOpen ? 'ml-64' : ''} transition-all duration-300`}>
        <header className="bg-white dark:bg-gray-800 shadow rounded-lg mb-4 p-4 flex items-center">
          {!sidebarOpen && (
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mr-4"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
            </button>
          )}
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">페이지 제목</h1>
        </header>
        <main className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default GlobalLayout;