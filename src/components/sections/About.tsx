import { useState } from 'react';
import { Coffee, Music, Camera, Gamepad2, Heart, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import DataJourney from './DataJourney';

const About = () => {
  const [easterEggRevealed, setEasterEggRevealed] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleEasterEggClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount >= 2) {
      setEasterEggRevealed(true);
    }
  };

  const interests = [
    { icon: <Coffee className="w-5 h-5" />, name: "Coffee Brewing", description: "Third-wave coffee enthusiast" },
    { icon: <Music className="w-5 h-5" />, name: "Jazz Piano", description: "Playing since 2015" },
    { icon: <Camera className="w-5 h-5" />, name: "Photography", description: "Street & landscape photography" },
    { icon: <Gamepad2 className="w-5 h-5" />, name: "Chess", description: "1800+ rated player" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Compact Bio and Photo Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Bio Section - 2 columns */}
            <div className="lg:col-span-2 space-y-4 animate-fade-up">
              <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
                <p>
                  I'm Alex Chen, a passionate data scientist and machine learning engineer with a love for 
                  transforming complex data into actionable insights. Currently pursuing my Master's in 
                  Data Science at Stanford University.
                </p>
                
                <p>
                  My journey into data science began during my undergraduate studies at UC Berkeley, 
                  where I discovered the power of machine learning through a computer vision project. 
                  Since then, I've been fascinated by the intersection of technology and human behavior.
                </p>
                
                <p>
                  When I'm not coding or analyzing data, you'll find me exploring the great outdoors, 
                  experimenting with new coffee brewing techniques, or getting lost in a good jazz 
                  improvisation session.
                </p>
              </div>

              {/* Easter Egg - Hidden clickable element */}
              <div className="relative">
                <p className="text-muted-foreground">
                  I believe that the best insights come from{' '}
                  <span
                    className={`cursor-pointer transition-all duration-300 ${
                      clickCount > 0 ? 'text-primary animate-glow-pulse' : 'hover:text-primary'
                    }`}
                    onClick={handleEasterEggClick}
                  >
                    curiosity
                  </span>
                  {' '}and continuous learning.
                </p>
                
                {easterEggRevealed && (
                  <Card className="mt-4 bg-gradient-hero border-primary animate-bounce-in">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <Sparkles className="w-6 h-6 text-primary-foreground animate-glow-pulse" />
                        <div className="text-primary-foreground">
                          <p className="font-semibold">🎉 Easter Egg Found!</p>
                          <p className="text-sm opacity-90">
                            Fun fact: I once solved a Rubik's cube in under 30 seconds while debugging code!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* Profile Image - 1 column */}
            <div className="animate-fade-up">
              <div className="relative w-full h-64 lg:h-80 rounded-2xl bg-gradient-card border border-border overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-glow opacity-20 group-hover:opacity-40 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Camera className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p className="text-base font-medium">Professional Photo</p>
                    <p className="text-sm">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Interests Grid */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Beyond <span className="text-gradient">Data Science</span>
            </h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {interests.map((interest, index) => (
                <Card
                  key={index}
                  className="bg-gradient-card border-border hover:border-primary transition-all duration-300 group cursor-pointer"
                >
                  <CardContent className="p-4 text-center">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 w-fit mx-auto mb-2">
                      {interest.icon}
                    </div>
                    <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors duration-300">
                      {interest.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {interest.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Data Science Journey */}
            <DataJourney />

            {/* Call to Action */}
            <div className="text-center mt-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-3 text-lg font-semibold glow transition-all duration-300 hover:scale-105"
              >
                <Heart className="w-5 h-5 mr-2" />
                Let's Connect!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;