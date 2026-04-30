import  { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Hide default cursor on the whole site
    document.body.style.cursor = 'none';
    
    // Show custom cursor when mouse enters the document
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    
    // Track mouse position with smooth animation
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      if (cursorRef.current && cursorDotRef.current) {
        // Main circle follows mouse
        cursorRef.current.style.transform = `translate3d(${e.clientX - 15}px, ${e.clientY - 15}px, 0)`;
        
        // Center dot follows with slight delay for smooth effect
        setTimeout(() => {
          if (cursorDotRef.current) {
            cursorDotRef.current.style.transform = `translate3d(${e.clientX - 3}px, ${e.clientY - 3}px, 0)`;
          }
        }, 50);
      }
    };

    // Handle hover effects on interactive elements
    const handleMouseOver = (e: { target: any; }) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.style.cursor === 'pointer';
      
      if (isClickable) {
        setIsHovering(true);
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${position.x - 15}px, ${position.y - 15}px, 0) scale(1.5)`;
          cursorRef.current.style.backgroundColor = 'rgba(255, 0, 0, 0.15)';
          cursorRef.current.style.border = '2px solid rgba(255, 0, 0, 0.8)';
        }
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${position.x - 15}px, ${position.y - 15}px, 0) scale(1)`;
        cursorRef.current.style.backgroundColor = 'rgba(255, 0, 0, 0.05)';
        cursorRef.current.style.border = '2px solid rgba(255, 0, 0, 0.6)';
      }
    };

    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.body.style.cursor = 'auto';
    };
  }, [position]);

  return (
    <>
      {/* Main Red Circle */}
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          position: 'fixed',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 0, 0, 0.08)',
          border: '2px solid rgba(255, 0, 0, 0.7)',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'transform 0.1s ease, width 0.2s ease, height 0.2s ease, background-color 0.2s ease',
          transform: `translate3d(${position.x - 15}px, ${position.y - 15}px, 0)`,
          opacity: isVisible ? 1 : 0,
          boxShadow: '0 0 15px rgba(255, 0, 0, 0.3)',
        }}
      >
        {/* Pulsing animation ring */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'pulse-ring 1.5s infinite',
            border: '1px solid rgba(255, 0, 0, 0)',
          }}
        />
      </div>

      {/* Red Center Dot */}
      <div
        ref={cursorDotRef}
        className="custom-cursor-dot"
        style={{
          position: 'fixed',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: 'rgb(255, 0, 0)',
          pointerEvents: 'none',
          zIndex: 10000,
          transition: 'transform 0.15s cubic-bezier(0.2, 0.9, 0.4, 1.1), width 0.2s ease, height 0.2s ease',
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
          opacity: isVisible ? 1 : 0,
          boxShadow: '0 0 8px rgba(255, 0, 0, 0.8)',
        }}
      />
    </>
  );
};

export default CustomCursor;