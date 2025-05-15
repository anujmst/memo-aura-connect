
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PhoneCall, Heart } from 'lucide-react';

const JoinCallCard = () => {
  const navigate = useNavigate();

  return (
    <Card className="w-full relative overflow-hidden animate-float animation-delay-200 group hover:scale-[1.02] transition-transform ease-bounce duration-300 border-memotag-blue-sky shadow-md hover:shadow-xl bg-gradient-to-br from-white/90 to-memotag-blue-sky/20">
      <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-memotag-blue-bright/10 rounded-full blur-2xl animate-pulse-slow animation-delay-1000"></div>
      <div className="absolute -left-12 -top-12 w-40 h-40 bg-memotag-blue-sky/10 rounded-full blur-2xl animate-pulse-slow animation-delay-3000"></div>
      
      <div className="absolute top-2 right-2 flex space-x-1">
        <span className="w-2 h-2 bg-memotag-blue-bright rounded-full animate-ping-small animation-delay-100"></span>
        <span className="w-2 h-2 bg-memotag-blue-bright rounded-full animate-ping-small animation-delay-300"></span>
        <span className="w-2 h-2 bg-memotag-blue-bright rounded-full animate-ping-small animation-delay-500"></span>
      </div>
      
      <CardHeader className="relative z-10">
        <CardTitle className="flex items-center text-memotag-blue-ocean text-2xl">
          <PhoneCall className="w-6 h-6 mr-3 text-memotag-blue-bright animate-wiggle" />
          <span className="relative">
            Instant Connection
            <Heart className="absolute -top-4 -right-6 w-4 h-4 text-red-400 animate-bounce-gentle animation-delay-500" />
          </span>
        </CardTitle>
        <CardDescription className="text-memotag-blue-ocean/80 text-lg">Ready to talk now?</CardDescription>
      </CardHeader>
      
      <CardContent className="text-center pb-8 relative z-10">
        <div className="space-y-6">
          <p className="text-xl mb-4 text-memotag-blue-ocean/90 animate-fade-in animation-delay-100">
            Join a call immediately and connect with someone special!
          </p>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-memotag-blue-sky via-memotag-blue-bright to-memotag-blue-ocean blur-md opacity-70 group-hover:opacity-100 transition-opacity rounded-lg transform -rotate-1 scale-[1.02] animate-pulse-subtle"></div>
            <Button 
              onClick={() => navigate('/call')} 
              className="relative w-full md:w-auto px-10 py-6 text-xl font-medium bg-gradient-to-r from-memotag-blue-bright to-memotag-blue-ocean hover:from-memotag-blue-ocean hover:to-memotag-blue-bright text-white shadow-lg hover:shadow-xl transform transition-all duration-300 ease-bounce hover:-translate-y-1 rounded-lg"
            >
              <PhoneCall className="w-6 h-6 mr-2 animate-bounce-gentle" />
              <span className="relative">
                Call Now
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/70 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </span>
            </Button>
          </div>
          
          <div className="flex justify-center space-x-4 mt-4 animate-fade-in animation-delay-700">
            <span className="h-1.5 w-1.5 bg-memotag-blue-sky rounded-full"></span>
            <span className="h-1.5 w-1.5 bg-memotag-blue-bright rounded-full"></span>
            <span className="h-1.5 w-1.5 bg-memotag-blue-ocean rounded-full"></span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JoinCallCard;
