
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Home } from 'lucide-react';
import DoodleSparkle from '@/components/icons/DoodleSparkle';

const PostCallPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-memotag-purple-soft via-memotag-blue-sky/30 to-white p-6 text-center animate-fade-in">
      <DoodleSparkle className="absolute top-10 left-10 w-12 h-12 text-memotag-purple-primary opacity-50 transform rotate-12 animate-pulse-subtle" />
      <DoodleSparkle className="absolute bottom-10 right-10 w-16 h-16 text-memotag-blue-sky opacity-60 transform -rotate-12 animate-pulse-subtle animation-delay-300" />
      
      <div className="max-w-lg p-8 bg-white/70 backdrop-blur-md shadow-2xl rounded-xl glassmorphic animate-scale-in">
        <CheckCircle className="w-20 h-20 text-memotag-purple-primary mx-auto mb-6 animate-scale-in animation-delay-200" />
        <h1 className="text-3xl md:text-4xl font-bold text-memotag-purple-tertiary mb-3">
          Thanks for joining!
        </h1>
        <p className="text-lg text-memotag-purple-secondary mb-8">
          Happy talking to you! We hope you had a great session.
        </p>
        <Button
          onClick={() => navigate('/dashboard')}
          className="bg-memotag-purple-primary hover:bg-memotag-purple-secondary text-white py-3 px-8 text-lg animate-fade-in animation-delay-500"
        >
          <Home className="w-5 h-5 mr-2" />
          Back to Home
        </Button>
      </div>
      <p className="mt-12 text-sm text-memotag-purple-secondary/80">
        Memotag - Cherish every moment.
      </p>
    </div>
  );
};

export default PostCallPage;
