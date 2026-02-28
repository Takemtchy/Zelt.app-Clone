"use client";

import { ReactLenis } from '@studio-freight/react-lenis';

export default function SmoothScrolling({ children }) {
  return (
    // 'root' tells Lenis to hijack the main window scrollbar
    // 'lerp' controls the smoothness (lower = smoother but slower to stop)
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}