import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Index = () => {
  const skills = [
    "Python", "SQL", "Go Language", "JavaScript",
    "Linux (CentOS, Ubuntu)", "API Integration",
    "CRM Management", "Docker", "Apache",
    "Zapier", "Make.com", "n8n",
    "ChatGPT", "Gemini"
  ];

  const services = [
    {
      title: "Backend Development",
      description: "Building robust server-side applications with Go, managing APIs, and system optimization"
    },
    {
      title: "Linux System Administration",
      description: "Server maintenance, debugging, and optimization on CentOS and Ubuntu platforms"
    },
    {
      title: "API Integration",
      description: "Seamless integration of third-party services including Twilio, Zoho, and custom APIs"
    },
    {
      title: "Automation & AI Tools",
      description: "Workflow automation using Zapier, Make.com, n8n, and AI-powered solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Wil
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#experience" className="text-foreground hover:text-primary transition-colors">Experience</a>
            <a href="#skills" className="text-foreground hover:text-primary transition-colors">Skills</a>
            <a href="#education" className="text-foreground hover:text-primary transition-colors">Education</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Wil Lorenz Dagli
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground">
              Software Developer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Backend Developer specializing in Go, Linux systems, API integrations, and automation. 
              Passionate about building robust, scalable solutions.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <a href="#experience">View Work</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            Seeking a thrilling and challenging career in IT industry, to advance my knowledge in the competitive field, 
            where I can contribute and serve my company with the best of my capabilities and skills at the same time, 
            improve my expertise and abilities.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Work Experience
          </h2>
          
          <div className="space-y-8">
            {/* IntegrityNet Experience */}
            <Card className="p-8 bg-card border-border hover:shadow-[var(--shadow-glow)] transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Software Developer (Backend)</h3>
                  <p className="text-primary font-semibold mb-2">IntegrityNet Solutions and Services</p>
                  <p className="text-muted-foreground text-sm">M.Pastor Ave, Batangas, Philippines</p>
                </div>
                <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground mt-4 md:mt-0">
                  Jan 2024 - Sep 2025
                </Badge>
              </div>
              <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                <li>Maintained and supported company servers by applying bug fixes and addressing user-reported issues, ensuring high system reliability and performance</li>
                <li>Assisted the IT department in troubleshooting and optimizing Linux-based systems, with frequent debugging of open-source system platforms and containerized environments (Docker)</li>
                <li>Configured and managed Apache servers to serve websites locally, supporting both development and production needs</li>
                <li>Integrated Zoho Desk CRM into company websites to enable automated ticket creation and improve customer support workflows</li>
                <li>Developed API integrations, including Twilio SMS, to extend communication features across internal systems</li>
                <li>Utilized HTML, CSS, and JavaScript for front-end development and Go (Golang) as a backend language for building and maintaining system functionalities</li>
                <li>Demonstrated strong debugging and analytical skills, quickly identifying root causes of issues and implementing effective technical solutions</li>
              </ul>
            </Card>

            {/* Internship */}
            <Card className="p-8 bg-card border-border hover:shadow-[var(--shadow-glow)] transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">OJT Trainee (Online)</h3>
                  <p className="text-primary font-semibold mb-2">Experts Academy</p>
                  <p className="text-muted-foreground text-sm">Makati City, Philippines</p>
                </div>
                <Badge className="bg-muted text-muted-foreground mt-4 md:mt-0">
                  Feb 2023 - Jun 2023
                </Badge>
              </div>
              <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                <li>Acquired in-depth training across diverse facets of cybersecurity, encompassing network security products/concepts, threats and different threat actors</li>
                <li>Gained hands-on experience in navigation and basic configuration of Sophos security systems</li>
                <li>Acquired foundational knowledge of Fortinet products through completion of Fortinet NSE 1 and NSE 2 certifications</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <Card 
                key={index}
                className="p-4 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-glow)] cursor-default text-center"
              >
                <p className="text-foreground font-medium">{skill}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-bold text-primary mb-4">Technical Skills</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Critical Thinking / Analytical Skills</li>
                <li>• Problem Solver</li>
                <li>• Attention to Details</li>
              </ul>
            </Card>
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-bold text-secondary mb-4">Soft Skills</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Communication Skills</li>
                <li>• Willingness to Learn</li>
                <li>• Team Collaboration</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Education
          </h2>
          
          <Card className="p-8 bg-card border-border hover:shadow-[var(--shadow-glow)] transition-all duration-300 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Bachelor of Science in Computer Engineering</h3>
                <p className="text-primary font-semibold mb-2">University of Batangas</p>
                <p className="text-muted-foreground">Batangas City, Philippines</p>
              </div>
              <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground mt-4 md:mt-0">
                2019 - 2023
              </Badge>
            </div>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-8 bg-card border-border hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <Card className="p-8 bg-card border-border max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:willdagli@gmail.com" className="text-foreground hover:text-primary transition-colors">
                    willdagli@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+639925816197" className="text-foreground hover:text-primary transition-colors">
                    +639-92-581-6197
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">Batangas City 4200, Philippines</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>© 2025 Wil Lorenz Dagli. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
