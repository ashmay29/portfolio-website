import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "R", "SQL", "JavaScript", "Scala"],
      color: "primary"
    },
    {
      title: "Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost"],
      color: "secondary"
    },
    {
      title: "Data Engineering",
      skills: ["Apache Spark", "Kafka", "Airflow", "MongoDB", "PostgreSQL"],
      color: "tertiary"
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
      color: "primary"
    },
    {
      title: "Data Visualization",
      skills: ["Matplotlib", "Plotly", "D3.js", "Tableau", "Power BI"],
      color: "secondary"
    },
    {
      title: "Tools & Frameworks",
      skills: ["Git", "Jupyter", "FastAPI", "Flask", "Streamlit"],
      color: "tertiary"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className={`bg-gradient-card border-border hover:border-${category.color} transition-all duration-500 ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
              style={{
                animationDelay: `${categoryIndex * 0.1}s`
              }}
            >
              <CardHeader className="pb-4">
                <CardTitle className={`text-center text-${category.color}`}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 text-sm bg-${category.color}/10 text-${category.color} rounded-full border border-${category.color}/30 hover:bg-${category.color} hover:text-${category.color}-foreground transition-all duration-300 cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;