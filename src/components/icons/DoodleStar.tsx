
import React from 'react';

const DoodleStar = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M12 5L13.5 8.5L17 9L14.5 11.5L15 15L12 13.5L9 15L9.5 11.5L7 9L10.5 8.5L12 5Z"
      stroke="currentColor" 
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      opacity="0.5"
    />
  </svg>
);

export default DoodleStar;
