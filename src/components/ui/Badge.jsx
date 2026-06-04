import React from 'react';

export const Badge = ({ children, variant = 'default', className = '', ...props }) => {
  const base = "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide transition-all duration-200 select-none w-fit uppercase";
  
  const variants = {
    default: "bg-zinc-100 text-zinc-800 border border-zinc-200/60",
    ai: "bg-white/95 backdrop-blur-sm border border-zinc-200 text-zinc-900 shadow-sm",
    success: "bg-emerald-50 border border-emerald-100 text-emerald-700",
    warning: "bg-amber-50 border border-amber-100 text-amber-700",
    dark: "bg-zinc-900 text-white border border-zinc-800"
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
};
