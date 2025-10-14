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

  // ✅ Smooth scroll handler
  const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({ behavior: "smooth" });

  // Fix GH Pages trailing slash handling
  let path = window.location.pathname;
  if (path.endsWith("/")) {
    path = path.slice(0, -1); // remove trailing slash
  }

  const newUrl = `${window.location.origin}${path}#${id}`;
  window.history.replaceState(null, "", newUrl);
};

const skills = [
  // 🔹 Automation & Tools
  { name: "Make", img: "https://cdn.worldvectorlogo.com/logos/make-logo-rgb-3.svg" },
  { name: "n8n", img: "https://n8n.io/favicon-32x32.png" },
  { name: "Zapier", img: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg" },
  { name: "Slack", img: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" },
  { name: "Airtable", img: "https://cdn.worldvectorlogo.com/logos/airtable-1.svg" },
  { name: "Asana", img: "https://cdn.worldvectorlogo.com/logos/asana-1.svg" },
  { name: "Otter.ai", img: "https://assets.otter.ai/favicon.ico" },
  { name: "Twilio", img: "https://cdn.worldvectorlogo.com/logos/twilio-2.svg" },
  { name: "GoHighLevel", img: "https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48175265739/original/PAUWak17_5otrZlX-2umd5Eisu-X_cq0fw.jpg?1641235578" },

  // 🔹 Programming & Systems
  { name: "JavaScript", img: "https://skillicons.dev/icons?i=js" },
  { name: "Python", img: "https://skillicons.dev/icons?i=python" },
  { name: "Linux", img: "https://skillicons.dev/icons?i=linux" },
  { name: "MySQL", img: "https://skillicons.dev/icons?i=mysql" },
  { name: "API Integration", img: "https://www.svgrepo.com/show/88703/api.svg" },
  { name: "Go Language", img: "https://skillicons.dev/icons?i=go" },

  // 🔹 Infrastructure
  { name: "Docker", img: "https://skillicons.dev/icons?i=docker" },
//   { name: "Apache", img: "https://skillicons.dev/icons?i=apache" },

  // 🔹 AI Tools
  { name: "ChatGPT", img: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
  { name: "Gemini", img: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.74.0/files/dark/gemini-color.png" },
  { name: "Grok", img: "https://images.seeklogo.com/logo-png/50/1/grok-logo-png_seeklogo-506012.png" }
];


  const services = [
    {
      title: "Chatbot Setup",
      description: "Automate conversations on Chat Applications, or websites with smart chatbots that capture leads."
    },
    {
      title: "CRM Management",
      description: "Streamline customer relationships with automated CRM workflows, integrations, and optimized data management."
    },
    // {
    //   title: "API Integration",
    //   description: "Seamless integration of third-party services including Twilio, Zoho, and custom APIs"
    // },
    {
        title:"Wordpress Website",
        description: "Build and maintain dynamic, automation-ready WordPress websites tailored for performance, scalability, and business growth."
    },
    {
      title: "No Code Automation",
      description: "WWorkflow automation using Zapier, Make.com, n8n, and AI-powered solutions to eliminate repetitive tasks and boost efficiency."
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
      {/* ✅ Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Wil
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">About</button>
            {/* <button onClick={() => scrollToSection("experience")} className="text-foreground hover:text-primary transition-colors">Experience</button> */}
            <button onClick={() => scrollToSection("projects")} className="text-foreground hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection("skills")} className="text-foreground hover:text-primary transition-colors">Skills</button>
            {/* <button onClick={() => scrollToSection("education")} className="text-foreground hover:text-primary transition-colors">Education</button> */}
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors">Services</button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      {/* ✅ Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl text-center space-y-6">
          <div className="flex justify-center mb-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-[var(--shadow-glow)]">
              <img src={heroProfile} alt="Wil Lorenz Dagli" className="w-full h-full object-cover" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Wil Lorenz Dagli
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground">Technical Virtual Assistant - AI Automation</p>
          {/* <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
         Experienced in Go, Linux systems, and API integrations.
Passionate about building robust, scalable, and fully automated solutions that optimize workflows and system performance.
            Passionate about building robust, scalable, and fully automated solutions that optimize workflows and system performance.
          </p> */}
          <div className="flex gap-4 justify-center pt-4">
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90" onClick={() => scrollToSection("contact")}>
              Get in Touch
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" onClick={() => scrollToSection("experience")}>
              View Work
            </Button>
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
            I specialize in automating workflows, managing web systems, and providing technical support for digital operations. My expertise includes integrating tools like n8n, Zapier, Make, CRM and Google Workspace to streamline business processes, manage data efficiently, and enhance productivity. I also assist in maintaining websites, handling API connections, and implementing automation for daily operations. 
            With a background in backend development, I specialize in diagnosing, debugging, and optimizing server-side logic, databases, and APIs ensuring systems remain secure, efficient, and scalable for clients.
          </p>
        </div>
      </section>
 {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills & Language / Tools Used
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
{skills.map((skill, index) => (
  <Card
    key={index}
    className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-glow)] cursor-default text-center flex flex-col items-center justify-center gap-3 hover:scale-105"
  >
    <div className="w-16 h-16 rounded-xl bg-white/10 dark:bg-white/20 flex items-center justify-center">
      <img
        src={skill.img}
        alt={skill.name}
        className="w-12 h-12 object-contain"
      />
    </div>
    <p className="text-foreground font-medium text-base mt-1">{skill.name}</p>
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
      {/* <section id="experience" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Work Experience
          </h2>
          
          <div className="space-y-8">
         
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
      </section> */}

     
      {/* Education Section */}
      {/* <section id="education" className="py-20 px-6 bg-card/50">
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
      </section> */}



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
