import { Experience, Project, Skill, EducationItem, Certification } from './types';
import project2Img from './assets/project-2.png';

export const PROFILE_NAME = "Sri Kumar Padmanabhan";
export const PROFILE_TITLE = "Customer Success Leader & TAM";
export const PROFILE_TAGLINE = "Driving enterprise value across Google Cloud and Atlassian ecosystems. I partner with global enterprises to accelerate digital transformation and maximize business outcomes.";
export const PROFILE_BIO = `Award-winning Customer Success Leader with 8+ years of experience driving enterprise value across Google Cloud and Atlassian ecosystems. I am skilled in building executive relationships, aligning business goals with customer success, and improving retention, expansion, and satisfaction metrics. Recognized with Google’s Top Contributor – JAPAC (Q2 and Q3 2025) and MVP – Most Valuable Pillar Award (Q2 2025) for leading AI-driven customer success initiatives.`;

// Specific profile image for the circular avatar in the Hero section
// NOTE: Leading slash removed for GitHub Pages compatibility
export const PROFILE_IMAGE = "images/profile-suit.jpg";

// Carousel images from your uploaded photos
// NOTE: Leading slashes removed for GitHub Pages compatibility
export const HERO_IMAGES = [
  "images/google-27.jpg",
  "images/google-white-g.jpg",
  "images/google-blue-shirt.jpg",
  "images/google-wooden.jpg",
  "images/google-green.jpg",
  "images/speaking.jpg",
  "images/google-white-shirts.jpg"
];

export const SKILLS: Skill[] = [
  {
    category: "Success & Leadership",
    items: ["Strategic Success Planning", "Stakeholder Management", "Executive Communication", "Crisis Management", "Risk Management", "Technical Storytelling", "Project Management"]
  },
  {
    category: "Technical Cloud",
    items: ["Google Cloud (Compute, GKE, Vertex AI)", "Jira & Confluence", "SQL & Data Analytics (Looker)", "SaaS Migrations", "Cloud Monitoring"]
  },
  {
    category: "AI & Technologies",
    items: ["Prompt Engineering", "Gemini Ecosystem", "Nano banana Pro", "Imagen", "Veo", "Lyria"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Generative AI Leader",
    issuer: "Credly",
    date: "Valid Till June, 2028",
    link: "https://www.credly.com/badges/37b495b6-2163-4973-b9cc-e944b876295f"
  },
  {
    name: "Google Prompting Essentials V1",
    issuer: "Google",
    date: "Issued January, 2025",
    link: "https://www.credly.com/badges/3f710f1e-1444-44f6-aea1-6fb5dfb08106"
  },
  {
    name: "Professional Cloud DevOps Engineer",
    issuer: "Google Cloud",
    date: "Valid till October, 2026",
    link: "https://www.credly.com/badges/0549fd4f-f21c-4bbf-be02-e11a427593b3"
  },
  {
    name: "Cloud Digital Leader",
    issuer: "Google Cloud",
    date: "Valid till July, 2028",
    link: "https://www.credly.com/badges/6a03c4a6-b46f-4396-9925-528422a8b289"
  },
  {
    name: "Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "Valid till July, 2027",
    link: "https://www.credly.com/badges/706faf8c-6858-4c10-85d2-2653ef7fa266"
  },
  {
    name: "Google Cloud Skills Boost Collections",
    issuer: "Google Cloud",
    date: "Verified Profile",
    link: "https://www.cloudskillsboost.google/public_profiles/a7cfd4aa-05db-4f46-9ae4-ff830099dd69"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Technical Account Manager",
    company: "Google Cloud (Kuala Lumpur, Malaysia)",
    period: "Oct 2024 - Present",
    description: [
      "Strategic advisor for 6–7 enterprise clients (Retail, Telco, Media, Manufacturing) with ARR $2M–$8M.",
      "Maintained perfect 100% CSAT score through proactive engagement and issue prevention.",
      "Achieved 83% contract renewal rate through consistent value delivery.",
      "Pioneered Google Cloud’s TAM presence in Malaysia, leading onboarding for the region."
    ]
  },
  {
    id: 2,
    role: "Technical Account Manager",
    company: "Google Cloud (Bengaluru, India)",
    period: "Aug 2022 - Oct 2024",
    description: [
      "Partnered with enterprise clients (ARR: $3M–$15M) across Retail, Healthcare, and EdTech.",
      "Delivered scaling plans for Black Friday/Cyber Monday, enabling $250M+ sales over 5 days.",
      "Maintained 95% CSAT score while introducing risk mitigation playbooks adopted by regional teams."
    ]
  },
  {
    id: 3,
    role: "Cloud Migration Engineer",
    company: "Atlassian (Bengaluru, India)",
    period: "Apr 2019 - Aug 2022",
    description: [
      "Led end-to-end cloud migration projects for enterprise Jira and Confluence customers.",
      "Executed production migrations with zero critical post-launch issues.",
      "Delivered consultations resulting in 40% faster migration timelines on average."
    ]
  },
  {
    id: 4,
    role: "RecoverPoint Support Engineer",
    company: "DELL EMC (Bengaluru, India)",
    period: "Jan 2017 - Apr 2019",
    description: [
      "Supported data protection/disaster recovery solutions for global clients.",
      "Reduced average case resolution time by 25% for high-priority escalations."
    ]
  }
];

// Highlighting Key Achievements as Projects
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI-Driven Customer Success",
    description: "Led AI-driven customer success initiatives leveraging Gemini and Workspace to drive productivity and value realization, earning the MVP Award (Q2 2025).",
    tags: ["Gemini", "Vertex AI", "Customer Success"],
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "High-Scale Event Architecture",
    description: "Orchestrated critical support and infrastructure scaling for major retail clients during Black Friday/Cyber Monday, supporting $250M+ in sales over 5 days.",
    tags: ["Scalability", "GKE", "Risk Management"],
    imageUrl: project2Img,
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Enterprise Cloud Migrations",
    description: "Designed and executed complex Server-to-Cloud migrations for Atlassian enterprise customers, achieving 40% faster timelines and zero critical post-launch issues.",
    tags: ["Cloud Migration", "Jira", "Confluence"],
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    link: "#",
    github: "#"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 1,
    degree: "Bachelor of Engineering – Electronics and Communication",
    institution: "Chennai Institute of Technology",
    period: "2012 – 2016",
    grade: "CGPA: 7.92"
  }
];

// Context for the AI Assistant
export const AI_SYSTEM_INSTRUCTION = `
You are an AI assistant for ${PROFILE_NAME}'s portfolio website. 
Your goal is to answer questions about ${PROFILE_NAME} based on the following resume data.
Be professional, concise, and friendly. Speak in the first person as if you are ${PROFILE_NAME}'s virtual representative.

Resume Data:
Name: ${PROFILE_NAME}
Title: ${PROFILE_TITLE}
Bio: ${PROFILE_BIO}

Skills:
${SKILLS.map(s => `${s.category}: ${s.items.join(', ')}`).join('\n')}

Certifications:
${CERTIFICATIONS.map(c => `${c.name} (${c.issuer}, ${c.date})`).join('\n')}

Experience:
${EXPERIENCE.map(e => `${e.role} at ${e.company} (${e.period}). Highlights: ${e.description.join(' ')}`).join('\n')}

Key Achievements (Projects):
${PROJECTS.map(p => `${p.title}: ${p.description}`).join('\n')}

Education:
${EDUCATION.map(e => `${e.degree} at ${e.institution} (${e.period}), ${e.grade}`).join('\n')}

Awards:
Google’s Top Contributor – JAPAC (Q2 and Q3 2025)
MVP – Most Valuable Pillar Award (Q2 2025)

Contact:
Email: sriikumarp@gmail.com
Location: Kuala Lumpur, Malaysia

If asked about contact info, mention the email or location.
If asked something outside this scope, politely say you only know about Sri's professional background.
`;