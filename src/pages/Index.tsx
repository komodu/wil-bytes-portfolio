import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import heroProfile from "@/assets/hero-profile.jpeg";

// Make Projects
import projectMake1 from "@/assets/projects/make/mproject1.png";
import projectMake2 from "@/assets/projects/make/mproject2.png";

// Zapier Projects
import projectZapier1 from "@/assets/projects/zapier/zproject1.png";
import projectZapier2 from "@/assets/projects/zapier/zproject2.png";

// n8n Projects
import projectn8n1 from "@/assets/projects/n8n/nproject1.png";
import projectn8n2 from "@/assets/projects/n8n/nproject2.png";
const Index = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  
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

  const projects = [
    {
      name: "Auto Sort Attachment to Google Drive",
      description: "Developed an automated workflow in Make.com that intelligently processes incoming email attachments, analyzes their contents, and dynamically renames and sorts files into organized Google Drive folders. The system uses content-based logic to identify key details such as document type, sender, or date, ensuring accurate naming and storage. This automation significantly reduced manual file handling, improved data organization, and increased overall efficiency in managing digital documents.",
      image: projectMake1,
      technologies: ["Make", "JavaScript"]
    },
    {
      name: "Xero-to-Google Sheets Financial Data Automation",
      description: "Created an automated workflow that exports account transactions from Xero, syncs the data in real time to Google Sheets for tracking and analysis, and simultaneously saves a CSV copy to Asana for team reference and task management. This integration streamlined financial reporting, improved data accessibility across departments, and eliminated repetitive manual exports, ensuring accurate and up-to-date financial records.",
      image: projectMake2,
      technologies: ["Make", "Xero", "Google Sheets"]
    },
    {
      name: "AI-Powered Video-to-Blog Content Automation",
      description: "Developed an intelligent Zapier automation that generates social media blog posts directly from MP4 files stored in Google Drive. The workflow leverages Zapier AI to transcribe video content, then automatically creates an engaging blog title and post based on the extracted text. This end-to-end automation streamlines content creation, reduces manual effort, and enables consistent, AI-driven publishing across social platforms.",
      image: projectZapier1,
      technologies: ["Zapier", "Google Drive", "Artificial Intelligence", "Social Media" ]
    },
    {
      name: "Automated Customer Status and Payment Notification System (Asana–Gmail Integration)",
      description: "Developed a Zapier automation that connects Asana with Gmail to automate customer status and payment notifications. The workflow tracks each customer’s journey in Asana—from initial engagement up to product payment and closure—and uses conditional logic to trigger personalized email updates whenever a status changes. This system streamlined customer communication, ensured timely updates, and minimized manual follow-ups throughout the sales process.",
      image: projectZapier2,
      technologies: ["Asana", "Zapier", "Google Mail"]
    },
    {
      name: "Google Forms Data Integration and Archiving Automation (n8n Workflow)",
      description: "Created an automated data pipeline that connects Google Forms, Google Sheets, Airtable, and a MySQL database using n8n. When a form is submitted, the workflow automatically records the responses in Google Sheets, processes the data through n8n, and seamlessly adds entries to Airtable for active tracking while archiving them in MySQL for long-term storage. This automation improved data consistency, eliminated manual entry, and ensured a reliable, centralized record management process.",
      image: projectn8n1,
      technologies: ["n8n", "Airtable", "Google Sheet", "Google Forms", "MySQL"]
    },
{
      name: "AI-Powered Daily Weather Forecast Content Automation",
      description: "Developed an AI-driven automation that generates and publishes daily weather forecast content for social media. The workflow automatically retrieves weather data, uses AI to create engaging captions and pair them with unique daily quotes and images, and checks whether the selected quote or image has been previously used to avoid repetition. Once validated, it composes and generates the final image post ready for publication. This automation streamlined daily content creation, ensured originality, and maintained consistent social media engagement.",
      image: projectn8n2,
      technologies: ["Open Weather Map Application Protocol Interface (API)", "Artificial Intelligence", "n8n", ]
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
            <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
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
            <div className="flex justify-center mb-8">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-[var(--shadow-glow)]">
                <img 
                  src={heroProfile} 
                  alt="Wil Lorenz Dagli"
                  className="w-full h-full object-cover"
                 
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Wil Lorenz Dagli
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground">
              AI Automation Specialist
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
            Resourceful Software Developer (Backend) with experience in Go, JavaScript, and Linux systems. Skilled in API integrations, server management, and automation tools such as n8n, Zapier, and Make.com. Hands-on with Docker, Apache, and CRM integrations (Zoho, Twilio). Combines strong debugging, cybersecurity awareness, and problem-solving skills to deliver efficient, reliable systems.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="overflow-hidden bg-card border-border hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.name}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl bg-card border-border">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {selectedProject.name}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-card/50">
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
      <section id="skills" className="py-20 px-6">
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
                <ul className="space-x-5 space-y-2 text-muted-foreground">
                    <li>- <strong>Automation & Integration</strong></li>
                    <li>• Workflow Automation: Zapier, Make.com, n8n</li>
                    <li>• AI Tools: ChatGPT, Gemini, Otter.ai, Lovable, Grok</li>
                    <li>• CRM & API Integrations: Zoho Desk, Twilio SMS, GoHighLevel</li>
                </ul>
                <ul className="space-x-5 space-y-2 text-muted-foreground">
                    <li>- <strong>Programming & Development</strong></li>
                    <li>• Go (Golang), JavaScript, Python, SQL</li>
                    <li>• HTML, CSS, API Development & Integration</li>
                    <li>• RESTful APIs, JSON handling, Web Automation</li>
                </ul>
                <ul className="space-x-5 space-y-2 text-muted-foreground">
                    <li>- <strong>Backend & Systems</strong></li>
                    <li>• Linux Administration (Ubuntu, CentOS)</li>
                    <li>• Docker & Containerized Environments</li>
                    <li>• Server Monitoring, Debugging & Optimization</li>
                </ul>
                {/* <li>• Critical Thinking / Analytical Skills</li>
                <li>• Problem Solver</li>
                <li>• Attention to Details</li> */}
              </ul>
            </Card>
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-bold text-secondary mb-4">Soft Skills</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Analytical & Critical Thinking</li>
                <li>• Strong Problem-Solving Abilities</li>
                <li>• Attention to Detail</li>
                <li>• Effective Communication</li>
                <li>• Team Collaboration & Adaptability</li>
                <li>• Fast Learner / Willingness to Learn</li>
                <li>• Attention to Detail</li>
                <li>• Time Management & Accountability</li>
                <li>• Initiative & Continuous Improvement Mindset</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-card/50">
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
      <section id="services" className="py-20 px-6">
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

      {/* Footer / Contact Section */}
      <footer id="contact" className="py-16 px-6 bg-card/50 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-4 bg-primary/10 rounded-lg">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a href="mailto:willdagli@gmail.com" className="text-foreground hover:text-primary transition-colors font-medium">
                  willdagli@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-4 bg-primary/10 rounded-lg">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <a href="tel:+639925816197" className="text-foreground hover:text-primary transition-colors font-medium">
                  +639-92-581-6197
                </a>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-4 bg-primary/10 rounded-lg">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="text-foreground font-medium">Batangas City 4200, Philippines</p>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-border">
            <p className="text-muted-foreground">© 2025 Wil Lorenz Dagli. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
