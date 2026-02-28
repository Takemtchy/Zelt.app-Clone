'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CanvasExplosion = () => {
    const containerRef = useRef(null)
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext("2d");    

        const frameCount = 118
        // Using your simplified naming convention!
        const currentFrame = (index) => `/egg-frames/${index + 1}.webp`;

        const images = []
        const playHead = { frame: 0 }

        // Preload all images
        for (let i = 0; i < frameCount; i++ ) {
            const img = new Image()
            img.src = currentFrame(i)
            images.push(img)
        }

        // The function that draws and perfectly scales the image
        function render() {
            // Clear the old frame before drawing the new one
            context.clearRect(0, 0, canvas.width, canvas.height)
            
            const img = images[playHead.frame];
            
            // Only attempt to draw if the image object exists and is loaded
            if (img && img.complete) {
                // The math to make it behave like CSS 'background-size: cover'
                const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
                const x = (canvas.width / 2) - (img.width / 2) * scale;
                const y = (canvas.height / 2) - (img.height / 2) * scale;
                
                context.drawImage(img, x, y, img.width * scale, img.height * scale);
            }
        }  

        // Keep the canvas the exact size of the window
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render(); // Immediately redraw so it doesn't blink blank when resizing
        };

        // Set the size on first load and listen for future window resizing
        handleResize();
        window.addEventListener('resize', handleResize);

        // Draw the very first frame as soon as it's ready
        images[0].onload = render

        // The ScrollTrigger Magic
        gsap.to(playHead, {
            frame: frameCount - 1,
            snap: "frame", 
            ease: "none",
            onUpdate: render, // Redraw every time the frame number changes!
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=2000", 
                scrub: 0.5, 
                pin: true,
            }
        })

        // Cleanup: remove the event listener and kill animations to save memory
        return () => {
            window.removeEventListener('resize', handleResize);
            ScrollTrigger.getAll().forEach(t => t.kill());
        }
    }, [])

    return (
        // Added relative and overflow-hidden to the container
        <section ref={containerRef} className=' h-screen w-full relative overflow-hidden flex items-center justify-center'>
            {/* The canvas is pinned absolutely to fill the container */}
            <canvas ref={canvasRef} className='absolute top-0 left-0 w-full h-full' />  
        </section>
    )
}

export default CanvasExplosion