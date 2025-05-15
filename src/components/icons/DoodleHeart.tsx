
import React from 'react';

const DoodleHeart = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.5 12.572L12 20L4.5 12.572C3.15 11.186 3.15 9.056 4.5 7.669C5.85 6.283 8.1 6.283 9.45 7.669L12 10.171L14.55 7.669C15.9 6.283 18.15 6.283 19.5 7.669C20.85 9.056 20.85 11.186 19.5 12.572Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 15L9 12L10 10.5L12 12.5L14 10.5L15 12L12 15Z"
      fill="currentColor"
      opacity="0.5"
    />
  </svg>
);

export default DoodleHeart;
