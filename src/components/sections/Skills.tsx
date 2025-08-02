import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SkillsVisualization from '@/components/effects/SkillsVisualization';

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

        {/* Interactive Skills Visualization */}
        <div className="max-w-4xl mx-auto">
          <SkillsVisualization />
        </div>
      </div>
    </section>
  );
};

export default Skills;