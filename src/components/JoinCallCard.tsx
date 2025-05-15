
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PhoneCall, Heart } from 'lucide-react';

const JoinCallCard = () => {
  const navigate = useNavigate();

  return (
    <Card className="w-full relative overflow-hidden group hover:scale-[1.02] transition-transform ease-bounce duration-300 bg-white/70 backdrop-blur-md border border-memotag-blue-sky/30 shadow-lg hover:shadow-xl"> {/* Removed animate-float, simplified background */}
      <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-memotag-blue-bright/5 rounded-full blur-xl animate-pulse-slow animation-delay-1000 opacity-70"></div> {/* Subtle bg element */}
      <div className="absolute -left-10 -top-10 w-32 h-32 bg-memotag-blue-sky/5 rounded-full blur-xl animate-pulse-slow animation-delay-3000 opacity-70"></div> {/* Subtle bg element */}
      
      <div className="absolute top-1.5 right-1.5 flex space-x-0.5"> {/* Adjusted position/spacing */}
        <span className="w-1.5 h-1.5 bg-memotag-blue-bright/70 rounded-full animate-ping-small animation-delay-100"></span>
        <span className="w-1.5 h-1.5 bg-memotag-blue-bright/70 rounded-full animate-ping-small animation-delay-300"></span>
        <span className="w-1.5 h-1.5 bg-memotag-blue-bright/70 rounded-full animate-ping-small animation-delay-500"></span>
      </div>
      
      <CardHeader className="relative z-10">
        <CardTitle className="flex items-center text-memotag-blue-ocean text-xl"> {/* Slightly smaller title */}
          <PhoneCall className="w-5 h-5 mr-2.5 text-memotag-blue-bright animate-wiggle" /> {/* Adjusted size/margin */}
          <span className="relative">
            Instant Connection
            <Heart className="absolute -top-3 -right-5 w-3.5 h-3.5 text-red-400/80 animate-bounce-gentle animation-delay-500" /> {/* Adjusted size/position */}
          </span>
        </CardTitle>
        <CardDescription className="text-memotag-blue-ocean/80 text-base">Ready to talk now?</CardDescription> {/* Adjusted size */}
      </CardHeader>
      
      <CardContent className="text-center pb-6 pt-2 relative z-10"> {/* Adjusted padding */}
        <div className="space-y-5"> {/* Adjusted spacing */}
          <p className="text-lg mb-3 text-memotag-blue-ocean/90 animate-fade-in animation-delay-100"> {/* Adjusted size/margin */}
            Join a call immediately and connect!
          </p>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-memotag-blue-sky via-memotag-blue-bright to-memotag-blue-ocean blur-lg opacity-60 group-hover:opacity-90 transition-opacity rounded-lg transform -rotate-1 scale-[1.02] animate-pulse-subtle"></div>
            <Button 
              onClick={() => navigate('/call')} 
              className="relative w-full md:w-auto px-8 py-5 text-lg font-medium bg-gradient-to-r from-memotag-blue-bright to-memotag-blue-ocean hover:from-memotag-blue-ocean hover:to-memotag-blue-bright text-white shadow-lg hover:shadow-xl transform transition-all duration-300 ease-bounce hover:-translate-y-1 rounded-lg" // Adjusted padding/font size
            >
              <PhoneCall className="w-5 h-5 mr-1.5 animate-bounce-gentle" /> {/* Adjusted size/margin */}
              <span className="relative">
                Call Now
                <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-white/60 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </span>
            </Button>
          </div>
          
          <div className="flex justify-center space-x-3 mt-3 animate-fade-in animation-delay-700"> {/* Adjusted spacing/margin */}
            <span className="h-1 w-1 bg-memotag-blue-sky/70 rounded-full"></span>
            <span className="h-1 w-1 bg-memotag-blue-bright/70 rounded-full"></span>
            <span className="h-1 w-1 bg-memotag-blue-ocean/70 rounded-full"></span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JoinCallCard;
