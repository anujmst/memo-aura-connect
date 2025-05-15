
import React from 'react';

const DoodleCloud = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.5 19C4.01472 19 2 16.9853 2 14.5C2 12.1564 3.79151 10.2313 6.07974 10.0194C6.54781 7.17213 9.02024 5 12 5C15.3137 5 18 7.68629 18 11C18 11.2726 17.9814 11.5398 17.9452 11.8C19.6591 12.4118 21 14.0709 21 16C21 18.4853 18.9853 20.5 16.5 20.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fillRule="evenodd"
      clipRule="evenodd"
    />
    <path
      d="M10 17C11.5 17.5 12.5 17.5 14 17C14 15.5 13.6667 15 13 14C13.5 13.5 14 13 14 12C12.5 12 12 12.5 11 13C10 12 9 12 8 12C8.5 13.5 8.5 14 9 14.5C8 15.5 7.5 16 8 17.5C9 17.5 9.5 17 10 17Z"
      fill="currentColor"
      opacity="0.5"
    />
  </svg>
);

export default DoodleCloud;
