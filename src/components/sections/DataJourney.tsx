import { useState } from 'react';
import { Calendar, Code, Database, Brain, Award, BookOpen, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface JourneyNode {
  id: string;
  title: string;
  category: 'education' | 'project' | 'certification' | 'milestone';
  date: string;
  description: string;
  technologies?: string[];
  achievement?: string;
  icon: React.ReactNode;
  x: number;
  y: number;
}

const DataJourney = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const journeyNodes: JourneyNode[] = [
    {
      id: 'start',
      title: 'First Programming Course',
      category: 'education',
      date: '2018',
      description: 'Discovered the world of programming through CS 101. Wrote my first "Hello World" in Python.',
      technologies: ['Python', 'Basic Algorithms'],
      icon: <Code className="w-4 h-4" />,
      x: 10,
      y: 80
    },
    {
      id: 'stats',
      title: 'Statistics & Probability',
      category: 'education',
      date: '2019',
      description: 'Learned statistical foundations that would become crucial for data science.',
      technologies: ['R', 'Statistical Analysis'],
      icon: <BookOpen className="w-4 h-4" />,
      x: 25,
      y: 60
    },
    {
      id: 'first-ml',
      title: 'First ML Project',
      category: 'project',
      date: '2020',
      description: 'Built a movie recommendation system using collaborative filtering.',
      technologies: ['Python', 'Scikit-learn', 'Pandas'],
      achievement: 'Achieved 85% recommendation accuracy',
      icon: <Brain className="w-4 h-4" />,
      x: 40,
      y: 40
    },
    {
      id: 'internship',
      title: 'Data Science Internship',
      category: 'milestone',
      date: '2021',
      description: 'First professional experience analyzing customer behavior data.',
      technologies: ['SQL', 'Tableau', 'Python'],
      achievement: 'Improved customer retention by 15%',
      icon: <Zap className="w-4 h-4" />,
      x: 60,
      y: 30
    },
    {
      id: 'deep-learning',
      title: 'Deep Learning Specialization',
      category: 'certification',
      date: '2022',
      description: 'Completed Andrew Ng\'s Deep Learning course series.',
      technologies: ['TensorFlow', 'Keras', 'Neural Networks'],
      icon: <Award className="w-4 h-4" />,
      x: 75,
      y: 50
    },
    {
      id: 'capstone',
      title: 'Master\'s Capstone',
      category: 'project',
      date: '2023',
      description: 'NLP sentiment analysis for financial markets using transformer models.',
      technologies: ['BERT', 'PyTorch', 'Financial Data'],
      achievement: 'Published in conference proceedings',
      icon: <Database className="w-4 h-4" />,
      x: 90,
      y: 70
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'education': return 'bg-blue-500/20 border-blue-500/50 text-blue-300';
      case 'project': return 'bg-purple-500/20 border-purple-500/50 text-purple-300';
      case 'certification': return 'bg-green-500/20 border-green-500/50 text-green-300';
      case 'milestone': return 'bg-orange-500/20 border-orange-500/50 text-orange-300';
      default: return 'bg-gray-500/20 border-gray-500/50 text-gray-300';
    }
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-8 text-center">
        My Data Science <span className="text-gradient">Journey</span>
      </h3>

      <div className="relative bg-gradient-card rounded-2xl border border-border p-8 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(66, 153, 225, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(66, 153, 225, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }} />
        </div>

        {/* Journey path */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          <defs>
            <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(210, 70%, 60%)" stopOpacity="0.3" />
              <stop offset="50%" stopColor="hsl(260, 70%, 60%)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(210, 70%, 60%)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          {journeyNodes.map((node, index) => {
            if (index === journeyNodes.length - 1) return null;
            const nextNode = journeyNodes[index + 1];
            
            return (
              <path
                key={`path-${node.id}`}
                d={`M ${node.x}% ${node.y}% Q ${(node.x + nextNode.x) / 2}% ${Math.min(node.y, nextNode.y) - 10}% ${nextNode.x}% ${nextNode.y}%`}
                stroke="url(#journeyGradient)"
                strokeWidth="2"
                fill="none"
                className="animate-[draw_2s_ease-in-out_forwards]"
                style={{
                  strokeDasharray: '200',
                  strokeDashoffset: '200',
                  animation: `draw 2s ease-in-out ${index * 0.5}s forwards`
                }}
              />
            );
          })}
        </svg>

        {/* Journey nodes */}
        <div className="relative z-10">
          {journeyNodes.map((node, index) => (
            <div
              key={node.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
            >
              {/* Node circle */}
              <div className={`
                w-12 h-12 rounded-full border-2 flex items-center justify-center
                transition-all duration-300 hover:scale-110
                ${getCategoryColor(node.category)}
                ${selectedNode === node.id ? 'scale-125 shadow-lg' : ''}
              `}>
                {node.icon}
              </div>

              {/* Node label */}
              <div className="absolute top-14 left-1/2 transform -translate-x-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium border border-border">
                  {node.date}
                </div>
              </div>

              {/* Expanded details */}
              {selectedNode === node.id && (
                <Card className="absolute top-16 left-1/2 transform -translate-x-1/2 w-80 bg-background/95 backdrop-blur-sm border-primary/50 animate-scale-in z-20">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-sm">{node.title}</h4>
                      <Badge className={getCategoryColor(node.category)}>
                        {node.category}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center text-xs text-muted-foreground mb-2">
                      <Calendar className="w-3 h-3 mr-1" />
                      {node.date}
                    </div>
                    
                    <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                      {node.description}
                    </p>
                    
                    {node.achievement && (
                      <div className="mb-3">
                        <div className="flex items-center text-xs font-medium text-primary mb-1">
                          <Award className="w-3 h-3 mr-1" />
                          Achievement
                        </div>
                        <p className="text-xs text-muted-foreground">{node.achievement}</p>
                      </div>
                    )}
                    
                    {node.technologies && (
                      <div>
                        <div className="text-xs font-medium mb-2">Technologies:</div>
                        <div className="flex flex-wrap gap-1">
                          {node.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 right-4 flex flex-wrap gap-2 z-10">
          {['education', 'project', 'certification', 'milestone'].map(category => (
            <div key={category} className="flex items-center text-xs">
              <div className={`w-3 h-3 rounded-full mr-1 ${getCategoryColor(category)}`} />
              <span className="text-muted-foreground capitalize">{category}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default DataJourney;