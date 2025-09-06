import { useState } from 'react';
import { Github, ExternalLink, Code, Database, Brain, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Predictive Analytics Dashboard",
      description: "Real-time dashboard for sales forecasting using time series analysis and machine learning models.",
      longDescription: "Built a comprehensive analytics platform that processes live sales data and generates accurate forecasts using ARIMA, LSTM, and XGBoost models. Features interactive visualizations and automated alert systems.",
      icon: <BarChart3 className="w-6 h-6" />,
      technologies: ["Python", "TensorFlow", "Plotly", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/example/predictive-dashboard",
      liveUrl: "https://predictive-dashboard.demo.com",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "NLP Sentiment Analyzer",
      description: "Advanced sentiment analysis tool for social media monitoring with real-time processing capabilities.",
      longDescription: "Developed a sophisticated NLP pipeline that analyzes sentiment from multiple social platforms. Incorporates BERT-based models for accurate emotion detection and trend analysis.",
      icon: <Brain className="w-6 h-6" />,
      technologies: ["Python", "Transformers", "FastAPI", "MongoDB", "React"],
      githubUrl: "https://github.com/example/sentiment-analyzer",
      liveUrl: "https://sentiment-analyzer.demo.com",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Computer Vision Pipeline",
      description: "Automated image classification system for medical diagnosis with 94% accuracy rate.",
      longDescription: "Created an end-to-end computer vision solution for medical image analysis. Implements custom CNN architectures and data augmentation techniques for improved diagnostic accuracy.",
      icon: <Code className="w-6 h-6" />,
      technologies: ["PyTorch", "OpenCV", "Flask", "AWS", "Kubernetes"],
      githubUrl: "https://github.com/example/cv-pipeline",
      liveUrl: "https://cv-pipeline.demo.com",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Distributed Data Processing",
      description: "Scalable ETL pipeline processing 10TB+ daily data using Apache Spark and cloud technologies.",
      longDescription: "Designed and implemented a robust data processing system handling massive datasets. Features automatic scaling, error recovery, and real-time monitoring capabilities.",
      icon: <Database className="w-6 h-6" />,
      technologies: ["Spark", "Kafka", "Airflow", "AWS", "Scala"],
      githubUrl: "https://github.com/example/data-pipeline",
      liveUrl: "https://data-pipeline.demo.com",
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <section id="projects" className="py-0">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of data science and machine learning projects that demonstrate
            my expertise in building intelligent, scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`group bg-gradient-card border-border card-hover cursor-pointer relative overflow-hidden ${
                hoveredProject === index ? 'border-primary shadow-elevated' : ''
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-10 transition-all duration-500" />
              
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative z-10">
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {hoveredProject === index ? project.longDescription : project.description}
                </CardDescription>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action buttons - shown on hover */}
                <div className={`flex space-x-3 transition-all duration-300 ${
                  hoveredProject === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary-glow text-primary-foreground"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12 animate-fade-up">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary bg-primary text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            View All Projects
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;