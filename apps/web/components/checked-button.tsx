import React from 'react';

export const CheckedIcon = () => (
  <button
    className="w-12 h-12 inline-flex items-center justify-cent text-green-500 bg-green-100 px-2 rounded-full"
    id="checked-icon"
    disabled={true}
  >
    <svg
      className="w-8 h-8"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </button>
);
