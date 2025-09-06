import { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const educationEntries = [
    {
      id: 1,
      title: "M.S. Data Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "Sep 2022 - Jun 2024",
      description: "Focused on machine learning, deep learning, and statistical modeling. Completed capstone project on natural language processing for financial sentiment analysis.",
      achievements: [
        "GPA: 3.9/4.0",
        "Research Assistant in ML Lab",
        "Published 2 conference papers"
      ],
      coursework: ["Machine Learning", "Deep Learning", "Statistics", "NLP", "Data Mining"],
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      id: 2,
      title: "B.S. Computer Science",
      institution: "UC Berkeley",
      location: "Berkeley, CA",
      period: "Sep 2018 - May 2022",
      description: "Specialized in artificial intelligence and data structures. Active member of the Data Science Student Society and Machine Learning Research Group.",
      achievements: [
        "Summa Cum Laude",
        "Dean's List for 6 semesters",
        "Winner of campus hackathon"
      ],
      coursework: ["Algorithms", "Data Structures", "AI", "Software Engineering", "Database Systems"],
      icon: <GraduationCap className="w-5 h-5" />
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

    const timelineItems = document.querySelectorAll('.education-item');
    timelineItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-0">
      <div className="px-6">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Educational <span className="text-gradient">Background</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey in data science, computer science, and machine learning.
          </p>
        </div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-primary to-secondary opacity-30" />

          {educationEntries.map((edu, index) => (
            <div
              key={edu.id}
              data-id={edu.id}
              className={`education-item relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              } ${
                visibleItems.includes(edu.id) ? 'animate-slide-in' : 'opacity-0'
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-6 w-4 h-4 rounded-full bg-gradient-hero border-4 border-background z-10 ${
                index % 2 === 0 
                  ? 'left-6 md:left-auto md:right-0 md:translate-x-1/2' 
                  : 'left-6 md:left-0 md:-translate-x-1/2'
              } ${visibleItems.includes(edu.id) ? 'animate-glow-pulse' : ''}`} />

              <Card className={`ml-16 md:ml-0 bg-gradient-card border-border hover:border-secondary transition-all duration-500 group ${
                visibleItems.includes(edu.id) ? 'card-hover' : ''
              }`}>
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                        {edu.icon}
                      </div>
                      <Badge 
                        variant="secondary" 
                        className="bg-secondary/10 text-secondary border-secondary/30"
                      >
                        Education
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors duration-300">
                    {edu.title}
                  </h3>
                  
                  <h4 className="text-lg font-semibold text-secondary mb-3">
                    {edu.institution}
                  </h4>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h5 className="font-semibold mb-2 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-secondary" />
                      Key Achievements:
                    </h5>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Coursework */}
                  <div>
                    <h5 className="font-semibold mb-2">Relevant Coursework:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline"
                          className="border-secondary/30 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
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

export default Education;