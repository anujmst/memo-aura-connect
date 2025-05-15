
import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from '@/components/ui/label';
import { Smile, Frown, Laugh, Meh, Heart } from 'lucide-react';

const moodOptions = [
  { value: 'happy', label: 'Happy', icon: <Smile className="w-5 h-5 mr-2 text-yellow-400" />, color: 'bg-yellow-100 border-yellow-300' },
  { value: 'calm', label: 'Calm', icon: <Meh className="w-5 h-5 mr-2 text-blue-400" />, color: 'bg-blue-50 border-blue-200' },
  { value: 'excited', label: 'Excited', icon: <Laugh className="w-5 h-5 mr-2 text-purple-400" />, color: 'bg-purple-50 border-purple-200' },
  { value: 'sad', label: 'Sad', icon: <Frown className="w-5 h-5 mr-2 text-indigo-400" />, color: 'bg-indigo-50 border-indigo-200' },
  { value: 'loved', label: 'Loved', icon: <Heart className="w-5 h-5 mr-2 text-red-400" />, color: 'bg-red-50 border-red-200' },
];

const MoodDropdown = () => {
  const [selectedMood, setSelectedMood] = useState('happy');
  
  const selectedOption = moodOptions.find(option => option.value === selectedMood);

  return (
    <div className="relative mb-8 animate-fade-in animation-delay-500">
      <div className="absolute -top-10 -left-10 w-20 h-20 bg-yellow-100 rounded-full blur-2xl animate-pulse-slow z-0"></div>
      <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-purple-100 rounded-full blur-2xl animate-pulse-slow animation-delay-2000 z-0"></div>
      
      <div className="relative z-10 bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-memotag-purple-light/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-memotag-purple-primary via-memotag-blue-sky to-yellow-300 rounded-t-2xl"></div>
        
        <Label 
          htmlFor="mood-select" 
          className="text-xl font-medium text-memotag-purple-secondary flex items-center mb-4 group-hover:scale-[1.02] transition-transform"
        >
          <span className="relative mr-2">
            How are you feeling today?
            <span className="absolute -top-1 -right-4 w-2 h-2 bg-memotag-purple-primary rounded-full animate-ping"></span>
          </span>
          {selectedOption?.icon}
        </Label>
        
        <Select 
          value={selectedMood} 
          onValueChange={setSelectedMood}
        >
          <SelectTrigger 
            id="mood-select" 
            className={`w-full md:w-[320px] bg-white border-2 focus:ring-2 focus:ring-offset-1 focus:ring-memotag-purple-primary/50 text-lg px-5 py-3 h-auto ${selectedOption?.color || 'border-memotag-purple-light'}`}
          >
            <SelectValue placeholder="Select your mood">
              <div className="flex items-center">
                {selectedOption?.icon}
                <span>{selectedOption?.label}</span>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-white/95 backdrop-blur-md border-memotag-purple-light p-2 rounded-xl shadow-xl">
            {moodOptions.map(option => (
              <SelectItem 
                key={option.value} 
                value={option.value}
                className={`my-1 rounded-lg ${option.color} text-lg focus:bg-memotag-purple-soft/50 focus:text-memotag-purple-tertiary pl-4 pr-10 py-3 cursor-pointer hover:scale-[1.02] transition-all`}
              >
                <div className="flex items-center">
                  {option.icon}
                  {option.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <div className="flex justify-center space-x-2 mt-4">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-bounce-gentle"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce-gentle animation-delay-200"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce-gentle animation-delay-400"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce-gentle animation-delay-600"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-bounce-gentle animation-delay-800"></span>
        </div>
      </div>
    </div>
  );
};

export default MoodDropdown;
