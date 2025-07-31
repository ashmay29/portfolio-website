import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Python", symbol: "🐍", expertise: "Expert" },
        { name: "R", symbol: "📊", expertise: "Advanced" },
        { name: "SQL", symbol: "🗃️", expertise: "Expert" },
        { name: "JavaScript", symbol: "⚡", expertise: "Intermediate" },
        { name: "Scala", symbol: "🔶", expertise: "Intermediate" },
      ]
    },
    {
      title: "Machine Learning",
      icon: "🧠",
      skills: [
        { name: "TensorFlow", symbol: "🔥", expertise: "Expert" },
        { name: "PyTorch", symbol: "⚡", expertise: "Advanced" },
        { name: "Scikit-learn", symbol: "🔬", expertise: "Expert" },
        { name: "Keras", symbol: "🎯", expertise: "Advanced" },
        { name: "XGBoost", symbol: "🚀", expertise: "Advanced" },
      ]
    },
    {
      title: "Data Engineering",
      icon: "⚙️",
      skills: [
        { name: "Apache Spark", symbol: "⚡", expertise: "Advanced" },
        { name: "Kafka", symbol: "🌊", expertise: "Advanced" },
        { name: "Airflow", symbol: "🌪️", expertise: "Intermediate" },
        { name: "MongoDB", symbol: "🍃", expertise: "Advanced" },
        { name: "PostgreSQL", symbol: "🐘", expertise: "Expert" },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: [
        { name: "AWS", symbol: "🌩️", expertise: "Advanced" },
        { name: "Docker", symbol: "🐳", expertise: "Advanced" },
        { name: "Kubernetes", symbol: "⚙️", expertise: "Intermediate" },
        { name: "Terraform", symbol: "🏗️", expertise: "Intermediate" },
        { name: "CI/CD", symbol: "🔄", expertise: "Advanced" },
      ]
    },
    {
      title: "Data Visualization",
      icon: "📈",
      skills: [
        { name: "Matplotlib", symbol: "📊", expertise: "Expert" },
        { name: "Plotly", symbol: "📉", expertise: "Advanced" },
        { name: "D3.js", symbol: "🎨", expertise: "Intermediate" },
        { name: "Tableau", symbol: "📋", expertise: "Advanced" },
        { name: "Power BI", symbol: "⚡", expertise: "Intermediate" },
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: "🛠️",
      skills: [
        { name: "Git", symbol: "🌲", expertise: "Expert" },
        { name: "Jupyter", symbol: "📓", expertise: "Expert" },
        { name: "FastAPI", symbol: "🚀", expertise: "Advanced" },
        { name: "Flask", symbol: "🌶️", expertise: "Advanced" },
        { name: "Streamlit", symbol: "🎯", expertise: "Advanced" },
      ]
    }
  ];

  const getExpertiseColor = (expertise: string) => {
    switch (expertise) {
      case "Expert": return "bg-primary/10 text-primary border-primary/30";
      case "Advanced": return "bg-secondary/10 text-secondary border-secondary/30";
      case "Intermediate": return "bg-accent/10 text-accent-foreground border-border";
      default: return "bg-muted/10 text-muted-foreground border-border";
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across data science, 
            machine learning, and software engineering domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className={`bg-gradient-card border-border hover:border-primary transition-all duration-300 group ${
                isVisible ? 'animate-bounce-in' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${categoryIndex * 0.1}s`
              }}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-lg font-semibold">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <span className="group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/5 hover:bg-muted/10 transition-all duration-300 group/skill"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl group-hover/skill:scale-125 transition-transform duration-300">
                        {skill.symbol}
                      </span>
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                    </div>
                    <Badge 
                      variant="outline"
                      className={`${getExpertiseColor(skill.expertise)} transition-all duration-300`}
                    >
                      {skill.expertise}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-16 flex justify-center">
          <div className="flex flex-wrap gap-4 p-6 rounded-2xl bg-gradient-card border border-border">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-sm text-muted-foreground">Expert</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-secondary"></div>
              <span className="text-sm text-muted-foreground">Advanced</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <span className="text-sm text-muted-foreground">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;