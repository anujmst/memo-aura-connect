
import React from 'react';
import MoodDropdown from '@/components/MoodDropdown';
import NextCallCard from '@/components/NextCallCard';
import JoinCallCard from '@/components/JoinCallCard';
import DoodleSparkle from '@/components/icons/DoodleSparkle';

const DashboardPage = () => {
  const userName = "User"; // Placeholder, fetch from auth state later

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-memotag-purple-soft via-memotag-blue-sky/20 to-white p-4 md:p-8 animate-fade-in">
      <header className="mb-8">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <DoodleSparkle className="w-8 h-8 text-memotag-purple-primary" />
            <h1 className="text-2xl font-bold text-memotag-purple-tertiary">Memotag Dashboard</h1>
          </div>
          <p className="text-memotag-purple-secondary">Welcome, {userName}!</p>
        </div>
      </header>
      
      <main className="container mx-auto flex-grow">
        <div className="mb-8">
          <MoodDropdown />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <NextCallCard />
          <JoinCallCard />
        </div>
      </main>
      
      <footer className="text-center py-8 text-memotag-purple-secondary/70">
        Keep track of your moments with Memotag.
      </footer>
    </div>
  );
};

export default DashboardPage;
