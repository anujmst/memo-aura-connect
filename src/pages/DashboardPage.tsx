
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MoodDropdown from '@/components/MoodDropdown';
import NextCallCard from '@/components/NextCallCard';
import JoinCallCard from '@/components/JoinCallCard';
import DoodleSparkle from '@/components/icons/DoodleSparkle';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle'; // Import ThemeToggle

const NEXT_CALL_END_TIME_KEY = 'nextCallEndTime';

const DashboardPage = () => {
  const userName = "User"; // Placeholder, fetch from auth state later
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(NEXT_CALL_END_TIME_KEY);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-memotag-purple-soft via-memotag-blue-sky/20 to-white dark:from-slate-900 dark:via-memotag-purple-tertiary/30 dark:to-slate-800 p-4 md:p-8 animate-fade-in">
      <header className="mb-8">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <DoodleSparkle className="w-8 h-8 text-memotag-purple-primary" />
            <h1 className="text-2xl font-bold text-memotag-purple-tertiary dark:text-memotag-purple-light">Memotag Dashboard</h1>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <p className="text-memotag-purple-secondary dark:text-memotag-purple-soft hidden sm:block">Welcome, {userName}!</p>
            <ThemeToggle /> 
            <Button 
              variant="ghost" 
              onClick={handleLogout} 
              className="text-memotag-purple-secondary dark:text-memotag-purple-light hover:text-memotag-purple-primary dark:hover:text-primary p-2"
              aria-label="Logout"
            >
              <LogOut className="w-5 h-5 md:mr-1" /> 
              <span className="hidden md:inline">Logout</span>
            </Button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto flex-grow">
        <div className="relative mb-8">
          <MoodDropdown />
          <DoodleSparkle className="w-6 h-6 text-memotag-blue-sky/70 dark:text-memotag-blue-sky/50 absolute -top-3 -right-3 transform rotate-12" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative">
          <NextCallCard />
          <JoinCallCard />
          <DoodleSparkle className="w-10 h-10 text-memotag-purple-light/60 dark:text-memotag-purple-light/40 absolute -bottom-5 -left-5 transform -rotate-45" />
        </div>
      </main>
      
      <footer className="text-center py-8 text-memotag-purple-secondary/70 dark:text-memotag-purple-light/70 relative">
        Keep track of your moments with Memotag.
        <DoodleSparkle className="w-5 h-5 text-memotag-purple-primary/50 dark:text-memotag-purple-primary/30 absolute bottom-6 right-1/4 transform rotate-45" />
        <DoodleSparkle className="w-4 h-4 text-memotag-blue-sky/40 dark:text-memotag-blue-sky/20 absolute top-4 left-1/4 transform -rotate-12" />
      </footer>
    </div>
  );
};

export default DashboardPage;
