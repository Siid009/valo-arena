// src/components/LoadingScreen.jsx
import React from "react";
const LoadingScreen = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-blue-50 z-50">
        <div className="three-body">
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
        </div>
      </div>
    );
  };
  
  export default LoadingScreen;
