import React from 'react'

const RollingText = ({ text }) => {
  return (
// 1. 'group': Tells Tailwind to track hovers on this parent container
    // 2. 'overflow-hidden': Acts like a mask, hiding anything outside this box
    <div className="group relative overflow-hidden inline-flex cursor-pointer">
      
      {/* 🟢 Layer 1: The Default Text */}
      {/* On hover, it moves UP out of the box (-translate-y-full) */}
      <span className="transition-transform duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
        {text}
      </span>
      
      {/* 🟢 Layer 2: The Hover Text */}
      {/* Starts hidden BELOW the box (translate-y-full). On hover, it moves to the center (translate-y-0) */}
      <span className="absolute left-0 top-0 translate-y-full transition-transform duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0">
        {text}
      </span>
      
    </div>
  )
}

export default RollingText