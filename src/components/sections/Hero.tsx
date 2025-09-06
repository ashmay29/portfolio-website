import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TerminalCommand } from '@/components/common/TerminalCommand';

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

          {/* Quick Start pseudo-terminal */}
          <div className="mx-auto max-w-3xl space-y-4 text-left">
            <h3 className="text-center text-2xl font-bold mb-2">{/* */}
              <span className="align-middle">&lt;/&gt; Quick Start</span>
            </h3>
            <TerminalCommand
              command="$ whoami"
              output="Full-Stack Developer passionate about creating efficient, scalable solutions"
              delay={0.1}
            />
            <TerminalCommand
              command="$ ls skills/"
              output="React TypeScript Node.js Python PostgreSQL AWS Docker"
              delay={0.2}
            />
            <TerminalCommand
              command="$ cat experience.txt"
              output="2+ years building web applications and leading technical projects"
              delay={0.3}
            />
            <TerminalCommand
              command="$ echo $GOALS"
              output="Design delightful, performant user experiences powered by data and automation"
              delay={0.4}
            />
          </div>
          
          {/* Description */}
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-up">
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
            className="border-primary text-primary bg-primary text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;