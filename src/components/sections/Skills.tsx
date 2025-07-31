import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "R", "SQL", "JavaScript", "Scala"]
    },
    {
      title: "Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost"]
    },
    {
      title: "Data Engineering",
      skills: ["Apache Spark", "Kafka", "Airflow", "MongoDB", "PostgreSQL"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"]
    },
    {
      title: "Data Visualization",
      skills: ["Matplotlib", "Plotly", "D3.js", "Tableau", "Power BI"]
    },
    {
      title: "Tools & Frameworks",
      skills: ["Git", "Jupyter", "FastAPI", "Flask", "Streamlit"]
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
    <section ref={sectionRef} id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across data science, 
            machine learning, and software engineering domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`group ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
              style={{
                animationDelay: `${categoryIndex * 0.1}s`
              }}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-200">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 text-sm bg-card/40 backdrop-blur text-muted-foreground rounded-full border border-border/30 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;