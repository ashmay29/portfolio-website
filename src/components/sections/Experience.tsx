import { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      id: 1,
      title: "Data Science Intern",
      company: "TechCorp Analytics",
      location: "San Francisco, CA",
      period: "Jun 2023 - Aug 2023",
      description: "Developed machine learning models for customer churn prediction, achieving 89% accuracy. Built automated data pipelines processing 1M+ records daily.",
      achievements: [
        "Improved model performance by 15%",
        "Reduced processing time by 40%",
        "Presented findings to C-level executives"
      ],
      technologies: ["Python", "TensorFlow", "AWS", "PostgreSQL"],
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      id: 2,
      title: "Machine Learning Engineer",
      company: "DataFlow Solutions",
      location: "Remote",
      period: "Jan 2022 - Aug 2022",
      description: "Led development of recommendation systems for e-commerce platform. Implemented A/B testing framework and optimized model deployment pipelines.",
      achievements: [
        "Increased user engagement by 25%",
        "Built scalable ML infrastructure",
        "Mentored 3 junior developers"
      ],
      technologies: ["Python", "Spark", "Kubernetes", "MLOps"],
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleItems(prev => [...prev, id]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and work experience in data science and machine learning.
          </p>
        </div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              data-id={exp.id}
              className={`timeline-item relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              } ${
                visibleItems.includes(exp.id) ? 'animate-slide-in' : 'opacity-0'
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-6 w-4 h-4 rounded-full bg-gradient-hero border-4 border-background z-10 ${
                index % 2 === 0 
                  ? 'left-6 md:left-auto md:right-0 md:translate-x-1/2' 
                  : 'left-6 md:left-0 md:-translate-x-1/2'
              } ${visibleItems.includes(exp.id) ? 'animate-glow-pulse' : ''}`} />

              <Card className={`ml-16 md:ml-0 bg-gradient-card border-border hover:border-primary transition-all duration-500 group ${
                visibleItems.includes(exp.id) ? 'card-hover' : ''
              }`}>
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        {exp.icon}
                      </div>
                      <Badge 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/30"
                      >
                        Experience
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {exp.title}
                  </h3>
                  
                  <h4 className="text-lg font-semibold text-primary mb-3">
                    {exp.company}
                  </h4>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h5 className="font-semibold mb-2">Key Achievements:</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;