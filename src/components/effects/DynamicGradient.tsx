import { useEffect, useState } from 'react';

const DynamicGradient = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate dynamic positions based on scroll
  const gradient1Transform = `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`;
  const gradient2Transform = `translate(${-scrollY * 0.08}px, ${scrollY * 0.12}px)`;
  const gradient3Transform = `translate(${scrollY * 0.06}px, ${-scrollY * 0.1}px)`;

  return (
    <>
      {/* Primary gradient - moves with scroll */}
      <div 
        className="fixed inset-0 bg-gradient-backdrop animate-gradient-shift opacity-80"
        style={{ transform: gradient1Transform }}
      />
      
      {/* Secondary gradient - moves opposite direction */}
      <div 
        className="fixed inset-0 bg-gradient-backdrop-2 animate-gradient-float opacity-60"
        style={{ transform: gradient2Transform }}
      />
      
      {/* Tertiary gradient - subtle movement */}
      <div 
        className="fixed inset-0 bg-gradient-backdrop-3 opacity-40"
        style={{ transform: gradient3Transform }}
      />
      
      {/* Subtle powder overlay */}
      <div className="fixed inset-0 bg-gradient-powder opacity-20" />
    </>
  );
};

export default DynamicGradient;