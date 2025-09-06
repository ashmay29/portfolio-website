import { Github, Linkedin, Mail, Twitter, ExternalLink, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/alexchen',
      description: 'Check out my open source projects',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://linkedin.com/in/alexchen',
      description: 'Connect with me professionally',
      color: 'hover:text-gray-400'
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      url: 'mailto:alex.chen@example.com',
      description: 'Drop me a line',
      color: 'hover:text-gray-400'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-6 h-6" />,
      url: 'https://twitter.com/alexchen_ds',
      description: 'Follow my data science journey',
      color: 'hover:text-gray-400'
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'alex.chen@example.com',
      link: 'mailto:alex.chen@example.com'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'San Francisco, CA',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-0">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, 
            or just having a chat about data science and technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className="text-center mb-16 animate-fade-up">
            <Card className="inline-block bg-gradient-card border-border hover:border-primary transition-all duration-300 group">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  Let's Build Something Amazing Together
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you.
                </p>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-3 text-lg font-semibold glow transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('mailto:alex.chen@example.com', '_blank')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border hover:border-primary transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 w-fit mx-auto mb-4">
                    {info.icon}
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {info.label}
                  </h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border hover:border-primary transition-all duration-300 group card-hover cursor-pointer"
                onClick={() => window.open(social.url, '_blank')}
              >
                <CardContent className="p-6 text-center">
                  <div className={`p-4 rounded-lg bg-accent group-hover:bg-primary transition-all duration-300 w-fit mx-auto mb-4 ${social.color} group-hover:text-primary-foreground`}>
                    {social.icon}
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {social.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {social.description}
                  </p>
                  <div className="flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border animate-fade-up">
          <p className="text-muted-foreground">
            © 2024 Alex Chen. Built with React, TypeScript, and lots of ☕
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Designed for performance, accessibility, and user experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;