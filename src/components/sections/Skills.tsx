import { useState, useEffect, useRef } from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Brain, Cloud, GitBranch, BarChart } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "R", level: 85 },
        { name: "SQL", level: 90 },
        { name: "JavaScript", level: 75 },
        { name: "Scala", level: 70 },
      ]
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "Scikit-learn", level: 95 },
        { name: "Keras", level: 88 },
        { name: "XGBoost", level: 82 },
      ]
    },
    {
      title: "Data Engineering",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Apache Spark", level: 85 },
        { name: "Kafka", level: 80 },
        { name: "Airflow", level: 75 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 90 },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 75 },
        { name: "Terraform", level: 70 },
        { name: "CI/CD", level: 80 },
      ]
    },
    {
      title: "Data Visualization",
      icon: <BarChart className="w-6 h-6" />,
      skills: [
        { name: "Matplotlib", level: 90 },
        { name: "Plotly", level: 88 },
        { name: "D3.js", level: 75 },
        { name: "Tableau", level: 80 },
        { name: "Power BI", level: 75 },
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: <GitBranch className="w-6 h-6" />,
      skills: [
        { name: "Git", level: 95 },
        { name: "Jupyter", level: 90 },
        { name: "FastAPI", level: 85 },
        { name: "Flask", level: 88 },
        { name: "Streamlit", level: 82 },
      ]
    }
  ];

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
              className="bg-gradient-card border-border hover:border-primary transition-all duration-300 group"
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-lg font-semibold">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {category.icon}
                  </div>
                  <span className="group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress
                      value={isVisible ? skill.level : 0}
                      className="h-2 bg-accent"
                      style={{
                        transition: `all ${0.5 + skillIndex * 0.1}s ease-out`
                      }}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Skill Radar Chart Preview */}
        <div className="mt-16 text-center animate-fade-up">
          <div className="inline-block p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary transition-all duration-300 group">
            <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
              💡 Interactive Skill Visualization
            </h3>
            <p className="text-muted-foreground mb-4">
              Hover over the skill cards above to see detailed proficiency levels.
            </p>
            <div className="text-sm text-primary">
              Click here for an interactive radar chart view →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;