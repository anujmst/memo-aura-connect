
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from '@/components/ui/label';
import { Smile, Frown, Laugh, Meh, Annoyed } from 'lucide-react'; // Assuming these icons exist or similar

const moodOptions = [
  { value: 'happy', label: 'Happy', icon: <Smile className="w-4 h-4 mr-2" /> },
  { value: 'calm', label: 'Calm', icon: <Meh className="w-4 h-4 mr-2" /> },
  { value: 'excited', label: 'Excited', icon: <Laugh className="w-4 h-4 mr-2" /> },
  { value: 'sad', label: 'Sad', icon: <Frown className="w-4 h-4 mr-2" /> },
  { value: 'anxious', label: 'Anxious', icon: <Annoyed className="w-4 h-4 mr-2" /> },
];

const MoodDropdown = () => {
  return (
    <div className="space-y-2">
      <Label htmlFor="mood-select" className="text-sm font-medium text-memotag-purple-secondary">How are you feeling today?</Label>
      <Select defaultValue="happy">
        <SelectTrigger id="mood-select" className="w-full md:w-[280px] bg-white border-memotag-purple-light focus:ring-memotag-purple-primary">
          <SelectValue placeholder="Select your mood" />
        </SelectTrigger>
        <SelectContent>
          {moodOptions.map(option => (
            <SelectItem key={option.value} value={option.value}>
              <div className="flex items-center">
                {option.icon}
                {option.label}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default MoodDropdown;
