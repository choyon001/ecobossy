import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen gap-4">
      <span className="loading loading-bars loading-xs"></span>
      <span className="loading loading-bars loading-sm"></span>
      <span className="loading loading-bars loading-md"></span>
      <span className="loading loading-bars loading-lg"></span>
      <span className="loading loading-bars loading-xl"></span>
    </div>
  );
};

export default Loading;
