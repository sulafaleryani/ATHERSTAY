import React from 'react';

export const CardSkeleton = () => (
  <div className="animate-pulse space-y-3">
    <div className="bg-zinc-200 aspect-[4/3] rounded-xl w-full" />
    <div className="h-4 bg-zinc-200 rounded w-2/3" />
    <div className="h-3 bg-zinc-200 rounded w-1/2" />
    <div className="h-4 bg-zinc-200 rounded w-1/4 mt-2" />
  </div>
);
