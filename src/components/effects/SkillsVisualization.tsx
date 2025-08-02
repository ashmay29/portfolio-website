import { useState, useEffect, useRef } from 'react';
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}

const SkillsVisualization = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    // Programming Languages
    { name: 'Python', level: 95, category: 'Programming', color: 'hsl(210, 70%, 60%)' },
    { name: 'R', level: 85, category: 'Programming', color: 'hsl(210, 70%, 60%)' },
    { name: 'SQL', level: 90, category: 'Programming', color: 'hsl(210, 70%, 60%)' },
    { name: 'JavaScript', level: 75, category: 'Programming', color: 'hsl(210, 70%, 60%)' },
    
    // Machine Learning
    { name: 'TensorFlow', level: 90, category: 'ML/AI', color: 'hsl(260, 70%, 60%)' },
    { name: 'PyTorch', level: 85, category: 'ML/AI', color: 'hsl(260, 70%, 60%)' },
    { name: 'Scikit-learn', level: 95, category: 'ML/AI', color: 'hsl(260, 70%, 60%)' },
    { name: 'NLP', level: 80, category: 'ML/AI', color: 'hsl(260, 70%, 60%)' },
    
    // Tools & Platforms
    { name: 'AWS', level: 85, category: 'Cloud/Tools', color: 'hsl(310, 70%, 60%)' },
    { name: 'Docker', level: 80, category: 'Cloud/Tools', color: 'hsl(310, 70%, 60%)' },
    { name: 'Apache Spark', level: 75, category: 'Cloud/Tools', color: 'hsl(310, 70%, 60%)' },
    { name: 'Tableau', level: 85, category: 'Cloud/Tools', color: 'hsl(310, 70%, 60%)' }
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate skill levels
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedLevels(prev => ({
                ...prev,
                [skill.name]: skill.level
              }));
            }, index * 150);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <div ref={sectionRef} className="space-y-8">
      {categories.map((category, categoryIndex) => (
        <div
          key={category}
          className={`transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: `${categoryIndex * 200}ms` }}
        >
          <h3 className="text-lg font-semibold mb-4 text-gradient">
            {category}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {getSkillsByCategory(category).map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {animatedLevels[skill.name] || 0}%
                  </span>
                </div>
                
                <div className="relative">
                  <Progress 
                    value={animatedLevels[skill.name] || 0}
                    className="h-2"
                  />
                  
                  {/* Animated progress indicator */}
                  <div
                    className="absolute top-0 left-0 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${animatedLevels[skill.name] || 0}%`,
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                      boxShadow: `0 0 10px ${skill.color}40`
                    }}
                  />
                  
                  {/* Skill level indicator dot */}
                  {animatedLevels[skill.name] > 0 && (
                    <div
                      className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full border-2 border-background transition-all duration-1000 ease-out"
                      style={{
                        left: `${animatedLevels[skill.name]}%`,
                        backgroundColor: skill.color,
                        boxShadow: `0 0 8px ${skill.color}60`,
                        marginLeft: '-6px'
                      }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      {/* Interactive legend */}
      <div className={`mt-8 p-4 bg-gradient-card rounded-lg border border-border transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h4 className="text-sm font-semibold mb-3">Proficiency Scale</h4>
        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded" />
            <span>Beginner (0-40%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded" />
            <span>Intermediate (40-70%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-gradient-to-r from-yellow-500 to-green-500 rounded" />
            <span>Advanced (70-90%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded" />
            <span>Expert (90%+)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsVisualization;