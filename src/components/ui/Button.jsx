import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const base = "px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 outline-none flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-zinc-900 text-white hover:bg-zinc-800 active:scale-[0.98]",
    secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 active:scale-[0.98]",
    outline: "border border-zinc-200 text-zinc-700 hover:bg-zinc-50 active:scale-[0.98]",
    ai: "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-95 shadow-md shadow-indigo-100"
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
