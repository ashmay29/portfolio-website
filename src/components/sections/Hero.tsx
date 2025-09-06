import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  
  const taglines = [
    "Transforming Data into Insights",
    "Building Intelligent Systems",
    "Crafting ML Solutions",
    "Exploring Data Frontiers"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [taglines.length]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-up">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="text-gradient animate-glow-pulse">
              Aanshuvi Shah
            </span>
          </h1>
          
          {/* Dynamic tagline */}
          <div className="h-16 mb-8 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-muted-foreground animate-fade-up">
              <span key={currentTagline} className="animate-bounce-in">
                {taglines[currentTagline]}
              </span>
            </p>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-up">
            Data Science & Machine Learning student passionate about leveraging AI to solve real-world problems. 
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-up">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="group bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowDown className="ml-2 w-5 h-5 group-hover:animate-bounce" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;