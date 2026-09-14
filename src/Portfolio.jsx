import { useEffect, useState } from 'react';
import { motion, AnimatePresence, MotionConfig, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Download, Monitor, Sun, Moon, Github, Linkedin, GraduationCap, Mail, Phone, MapPin, ArrowRight, Plus, Minus, Code2, Layers3, BrainCircuit, Cloud, AudioLines, Sparkles, Menu, X } from 'lucide-react';

const assetPath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

// All personal content and asset paths are editable here. Add verified URLs to enable links.
export const portfolioData = {
  name: 'Vishal Durga', fullName: 'Vishal Durga DR', role: 'Senior Software Engineer',
  email: 'dev.vishaldurga@gmail.com', phone: '+91 9361473236', phoneHref: '+919361473236', location: 'Bengaluru, India',
  portrait: assetPath('/vishal-durga.png'), resume: assetPath('/vishal-durga-resume.pdf'),
  socials: { linkedin: 'https://www.linkedin.com/in/vishal-durga-dr-902369354/', github: 'https://github.com/dev-vishal-001', scaler: 'https://www.scaler.com/academy/profile' },
  experience: [
    {
        "company": "GlobalLogic",
        "legalName": "GlobalLogic India Private Limited",
        "role": "Senior Software Engineer",
        "date": "JUN 2026",
        "place": "Bengaluru",
        "summary": "Production AI agents, grounded in enterprise knowledge.",
        "details": [
            "Optimized production-grade AI agents and multi-agent systems to support enterprise applications with more relevant, context-aware responses.",
            "Enhanced intent classification, tool calling, and agent orchestration so workflows could coordinate tasks across multiple agents.",
            "Analyzed LangSmith traces to identify and mitigate hallucinations, improve groundedness, and make responses more reliable.",
            "Improved RAG workflows and contributed to production monitoring, security, troubleshooting, and performance optimization."
        ],
        "tags": [
            "LangGraph",
            "LangChain",
            "AWS Bedrock",
            "RAG"
        ],
        "stack": [
            {
                "label": "Agent orchestration",
                "items": [
                    "LangGraph",
                    "LangChain",
                    "Multi-agent systems",
                    "Tool calling"
                ]
            },
            {
                "label": "AI platform & retrieval",
                "items": [
                    "AWS Bedrock",
                    "RAG",
                    "Intent classification"
                ]
            },
            {
                "label": "Reliability & operations",
                "items": [
                    "LangSmith",
                    "Production monitoring",
                    "Performance optimization"
                ]
            }
        ]
    },
    {
        "company": "Exotel",
        "legalName": "Exotel \u00b7 via CodersBrain",
        "role": "Senior Software Engineer",
        "date": "OCT 2025 \u2014 JUN 2026",
        "place": "Bengaluru",
        "summary": "Full-stack engineering for AI-powered voice conversations.",
        "details": [
            "Improved a monolithic voice bot with AI agents and LangChain4j, enhancing task execution, conversation quality, and the user experience.",
            "Contributed React interfaces with Redux state management and Formik / Yup form handling, improving responsiveness across the application.",
            "Enhanced speech-to-text and text-to-speech workflows with Wavesurfer.js audio visualization; improved usage and performance dashboards using ApexCharts and MUI X Charts.",
            "Worked on Java 21 and Spring Boot services integrating OpenAI / Azure OpenAI, PostgreSQL, Redis, and gRPC, with Keycloak and Spring Security for authentication and security.",
            "Contributed AWS S3, SES, and Firebase integrations, and improved API communication with Axios and MSW."
        ],
        "tags": [
            "React",
            "Java 21",
            "AWS",
            "Spring Boot"
        ],
        "stack": [
            {
                "label": "Frontend & audio",
                "items": [
                    "React",
                    "Redux",
                    "Formik",
                    "Yup",
                    "Wavesurfer.js",
                    "ApexCharts",
                    "MUI X Charts"
                ]
            },
            {
                "label": "Backend & AI",
                "items": [
                    "Java 21",
                    "Spring Boot",
                    "LangChain4j",
                    "OpenAI",
                    "Azure OpenAI",
                    "gRPC"
                ]
            },
            {
                "label": "Data, cloud & security",
                "items": [
                    "PostgreSQL",
                    "Redis",
                    "AWS S3",
                    "AWS SES",
                    "Firebase",
                    "Keycloak",
                    "Spring Security",
                    "Axios",
                    "MSW"
                ]
            }
        ]
    },
    {
        "company": "Zitrino",
        "legalName": "Zitrino",
        "role": "Senior Engineering Specialist",
        "date": "SEP 2024 \u2014 OCT 2025",
        "place": "Chennai OMR",
        "summary": "Contextual AI products, from knowledge retrieval to collaborative writing.",
        "details": [
            "Worked on GuideLite, a scalable AI assistant platform for Sales, Support, and HR, connecting React interfaces with FastAPI services and OpenAI / Azure OpenAI.",
            "Improved AI response performance and reliability through Redis caching, fallback mechanisms, and optimized backend services.",
            "Implemented context-aware retrieval and memory with Pinecone, FAISS, and document embeddings to support relevant knowledge-based responses.",
            "Developed customer-facing Next.js dashboards with server-side rendering, and contributed a React / TypeScript rich text editor with TinyMCE, real-time collaboration, comments, tables, and contextual AI suggestions.",
            "Contributed to AI-powered cybersecurity monitoring for automated threat ingestion, summarization, and visualization, using FastAPI, React, Docker, and Kubernetes."
        ],
        "tags": [
            "React",
            "Python / FastAPI",
            "Next.js",
            "OpenAI"
        ],
        "stack": [
            {
                "label": "Frontend & collaboration",
                "items": [
                    "React",
                    "Next.js",
                    "TypeScript",
                    "TinyMCE",
                    "SSR"
                ]
            },
            {
                "label": "Backend & intelligence",
                "items": [
                    "Python / FastAPI",
                    "LangChain",
                    "OpenAI",
                    "Azure OpenAI",
                    "Redis"
                ]
            },
            {
                "label": "Retrieval & deployment",
                "items": [
                    "Pinecone",
                    "FAISS",
                    "Document embeddings",
                    "Docker",
                    "Kubernetes"
                ]
            }
        ]
    },
    {
        "company": "Neuralem",
        "legalName": "Neuralem \u00b7 formerly GS Lab | GAVS",
        "role": "Software Engineer",
        "date": "AUG 2022 \u2014 SEP 2024",
        "place": "Chennai OMR",
        "summary": "Modernizing applications and keeping production systems resilient.",
        "details": [
            "Optimized and modernized production applications using Java / Spring Boot, Python / FastAPI / Flask, and JavaScript / React / Node.js to improve scalability and maintainability.",
            "Designed and optimized PostgreSQL and MongoDB schemas, and developed REST and GraphQL APIs for backend services.",
            "Improved Flask-based data processing and AI inference services to support efficient real-time workloads.",
            "Resolved P0/P1 production incidents in war-room environments across full-stack applications and cloud systems on AWS and Azure.",
            "Managed Docker and Kubernetes deployments with CI/CD pipelines in Jenkins, GitHub Actions, and Azure DevOps."
        ],
        "tags": [
            "React",
            "Python",
            "Java",
            "AWS / Azure"
        ],
        "stack": [
            {
                "label": "Languages & applications",
                "items": [
                    "JavaScript",
                    "React",
                    "Node.js",
                    "Python",
                    "FastAPI",
                    "Flask",
                    "Java",
                    "Spring Boot"
                ]
            },
            {
                "label": "Data & APIs",
                "items": [
                    "PostgreSQL",
                    "MongoDB",
                    "REST",
                    "GraphQL",
                    "AI inference"
                ]
            },
            {
                "label": "Cloud & delivery",
                "items": [
                    "AWS",
                    "Azure",
                    "Docker",
                    "Kubernetes",
                    "Jenkins",
                    "GitHub Actions",
                    "Azure DevOps"
                ]
            }
        ]
    }
],
  technologies: ['React', 'Python', 'Java', 'AWS', 'LangGraph', 'LangSmith', 'LangChain', 'LLMs', 'PostgreSQL', 'TypeScript', 'FastAPI', 'LLD', 'HLD', 'DSA'],
  projects: [
    { title: 'Onion.ai', type: 'PERSONAL PROJECT / VOICE AI', text: 'A voice-first AI assistant with a React and TypeScript interface, Python / FastAPI services, Gemini responses, and Playwright-powered browser actions. Includes live transcripts, spoken replies, and continuous listening.', tags: ['React', 'TypeScript', 'Python', 'FastAPI', 'Gemini', 'Playwright'], visual: 'onion', url: '' },
    { title: 'GuideLite', type: 'CONTEXTUAL AI / ZITRINO', text: 'Knowledge that works with you. An AI assistant platform for Sales, Support, and HR, with context-aware retrieval and reliable responses.', tags: ['React', 'FastAPI', 'LangChain', 'Redis'], visual: 'assistant', url: '' },
    { title: 'Voice AI platform', type: 'CONVERSATIONAL AI / EXOTEL', text: 'From spoken words to meaningful action. Voice bot improvements, real-time audio visualization, and clearer usage analytics.', tags: ['React', 'Java 21', 'LangChain4j'], visual: 'voice', url: '' },
    { title: 'AI writing workspace', type: 'COLLABORATIVE TOOLS / ZITRINO', text: 'A more thoughtful writing experience. A rich text editor with real-time collaboration, comments, and contextual AI suggestions.', tags: ['TypeScript', 'React', 'TinyMCE'], visual: 'editor', url: '' },
  ],
  skills: [
    { title: 'Interfaces', icon: Code2, description: 'Thoughtful experiences, down to the last interaction.', tags: ['React', 'Next.js', 'TypeScript', 'Redux', 'HTML / CSS'] },
    { title: 'Intelligence', icon: BrainCircuit, description: 'Context-aware AI, grounded in useful outcomes.', tags: ['LangChain', 'LangGraph', 'LangSmith', 'RAG', 'Python'] },
    { title: 'Systems', icon: Layers3, description: 'Reliable foundations that grow with the product.', tags: ['Java', 'Python', 'Spring Boot', 'FastAPI', 'Flask', 'Node.js', 'PostgreSQL', 'MongoDB', 'REST / GraphQL'] },
    { title: 'Delivery', icon: Cloud, description: 'From the first commit to production confidence.', tags: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Azure DevOps'] },
  ],
};
const reveal = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: .65, ease: [.22, 1, .36, 1] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: .12 } } };
const nav = [['Work', 'work'], ['Experience', 'experience'], ['About', 'about']];
function Reveal({ children, className = '', ...props }) { return <motion.div className={className} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .12 }} {...props}>{children}</motion.div>; }
function Tags({ items }) { return <div className="flex flex-wrap gap-2">{items.map(t => <motion.span whileHover={{ y: -3, scale: 1.04 }} className="tag" key={t}>{t}</motion.span>)}</div>; }
function ProjectVisual({ kind }) {
  if (kind === 'onion') return <div className="project-visual onion-art"><span className="onion-art-label">ONION.AI / VOICE COMMAND CENTER</span><div className="onion-orb"><div/><div/><div/><AudioLines size={34}/></div><span className="onion-prompt">Your voice. A little more powerful.</span><span className="onion-status"><i/> LISTEN · UNDERSTAND · ACT</span></div>;
  if (kind === 'assistant') return <div className="project-visual assistant-art"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="ai-symbol"><Sparkles size={36}/></div><span className="art-label">CONTEXT. CONNECTED.</span><div className="mini-bubble">How can I help you today? <span>↗</span></div></div>;
  if (kind === 'voice') return <div className="project-visual voice-art"><div className="wave">{Array.from({length: 39}, (_, i) => <i key={i} style={{height: `${14 + Math.abs(Math.sin(i * .72)) * (66 - Math.abs(i - 19) * 2.5)}px`, animationDelay: `${i * .07}s`}} />)}</div><div className="voice-caption"><span className="live-dot"/> VOICE → UNDERSTANDING</div><div className="audio-time">00:24 <span>━━━━━━ ───</span> 01:08</div></div>;
  return <div className="project-visual editor-art"><div className="editor-paper"><div className="editor-toolbar"><b>Aa</b><span>B　 I　 ≡</span><Sparkles size={13}/></div><h4>A little clarity.<br/>A lot of possibility.</h4><div className="text-line"/><div className="text-line short"/><span className="ai-suggestion"><Sparkles size={11}/> Make room for your next idea.</span><div className="editor-cursor">V</div></div></div>;
}
export default function Portfolio() {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [themePreference, setThemePreference] = useState(() => {
    try { const saved = localStorage.getItem('vishal-theme-preference'); return ['light', 'dark'].includes(saved) ? saved : 'system'; }
    catch { return 'system'; }
  });
  const [systemTheme, setSystemTheme] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const theme = themePreference === 'system' ? systemTheme : themePreference;
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const update = () => setSystemTheme(media.matches ? 'dark' : 'light');
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#fafafa' : '#0c0d15');
    try { localStorage.setItem('vishal-theme-preference', themePreference); } catch { /* Storage may be disabled. */ }
  }, [theme, themePreference]);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const reduced = useReducedMotion();
  const portraitY = useTransform(scrollYProgress, [0, .3], [0, -18]);
  const d = portfolioData;
  const themeOptions = ['system', 'light', 'dark'];
  const ThemeIcon = themePreference === 'system' ? Monitor : themePreference === 'dark' ? Moon : Sun;
  const changeTheme = () => setThemePreference(themeOptions[(themeOptions.indexOf(themePreference) + 1) % themeOptions.length]);
  return <MotionConfig reducedMotion="user"><motion.div className="scroll-progress" style={{scaleX: progress}}/><a className="skip-link" href="#main">Skip to content</a>
    <div className="motion-background" aria-hidden="true"><span/><span/><span/><i/><i/></div>
    <header className="site-header"><a className="wordmark" href="#" aria-label="Vishal Durga home">vd<span>®</span></a><nav className="desktop-nav" aria-label="Main navigation">{nav.map(([label,id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><button className={`theme-orb theme-${themePreference}`} type="button" onClick={changeTheme} aria-label={`Color theme: ${themePreference}. Click to switch theme.`} title={`Theme: ${themePreference}`}><ThemeIcon size={17}/><span className="theme-orb-ring"/><span className="theme-orb-dots"><i/><i/><i/></span></button><a className="header-contact" href="#contact">Let’s talk <ArrowUpRight size={16}/></a><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X/> : <Menu/>}</button></header>
    {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{[...nav,['Contact','contact']].map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={18}/></a>)}</nav>}
    <main id="main"><div className="ambient-glow" aria-hidden="true"/>
      <section className="hero section-shell"><div className="hero-kinetic" aria-hidden="true"><span/><span/><span/></div><motion.div variants={stagger} initial="hidden" animate="visible" className="hero-copy"><motion.p variants={reveal} className="eyebrow"><span className="blue-dot"/> SENIOR SOFTWARE ENGINEER · BENGALURU, INDIA</motion.p><motion.h1 variants={reveal}>Interfaces.<br/><span>Intelligence.</span><br/><span className="last-line">Impact.<span className="blue-period">✳</span></span></motion.h1><motion.div variants={reveal} className="hero-bottom"><p>I’m Vishal Durga, a senior software engineer connecting React interfaces, Python & Java services, and production AI on the cloud.</p><div className="hero-stack"><Tags items={d.technologies}/></div><div className="hero-actions"><a className="button button-dark" href={d.resume} download="Vishal-Durga-Resume.pdf">Download resume <Download size={17}/></a><a className="text-link" href="#work">Explore my work <ArrowDown size={17}/></a></div></motion.div></motion.div>
      <motion.div style={{ y: reduced ? 0 : portraitY }} className="portrait-composition original-portrait" initial={{opacity:0, y:24}} animate={{opacity:1, y:0}} transition={{duration:.9, delay:.2}}><div className="portrait-topline"><span>THE PERSON BEHIND THE CODE</span><span>01 / VD</span></div><div className="portrait-frame"><img src={d.portrait} alt="Vishal Durga, Senior Software Engineer" fetchPriority="high"/><span className="portrait-cross cross-top">+</span><span className="portrait-cross cross-bottom">+</span><div className="portrait-caption"><span>VISHAL DURGA</span><ArrowUpRight size={24}/></div></div><div className="portrait-note"><span className="note-star">✳</span><p>At the intersection of<br/><strong>interfaces & intelligence.</strong></p></div></motion.div>
      <div className="hero-footer"><span>FULL-STACK THINKING. END-TO-END OWNERSHIP.</span><a href="#work">SCROLL TO DISCOVER <ArrowDown size={13}/></a></div></section>
      <div className="expertise-strip" aria-label="React, Python, Java, AWS, LangGraph, Next.js, Docker, PostgreSQL"><div className="marquee-track" aria-hidden="true">{[0,1].map(n=><div className="marquee-group" key={n}>{['REACT','PYTHON','JAVA','AWS','LANGGRAPH','NEXT.JS','DOCKER','POSTGRESQL'].map(t=><span key={t}><i>✳</i>{t}</span>)}</div>)}</div></div>
      <section id="work" className="section-shell section-space"><Reveal className="section-heading"><div><p className="eyebrow">01 / SELECTED CONTRIBUTIONS</p><h2>Built for the<br/><span className="serif">real world.</span></h2></div><p>A few things I’ve helped bring to life.<br/>From contextual intelligence to everyday tools.</p></Reveal><motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{once:true, amount:.15}} className="project-grid">{d.projects.map((p,i) => <motion.article variants={reveal} whileHover={{y:-7}} onPointerMove={e => { const r=e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty("--pointer-x", `${e.clientX-r.left}px`); e.currentTarget.style.setProperty("--pointer-y", `${e.clientY-r.top}px`); }} key={p.title} className="project-card"><ProjectVisual kind={p.visual}/><div className="project-body"><p className="eyebrow">0{i+1} / {p.type}</p><h3>{p.title}{p.url ? <a href={p.url} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`}><ArrowUpRight/></a> : <ArrowUpRight aria-hidden="true"/>}</h3><p className="project-description">{p.text}</p><Tags items={p.tags}/><a className="project-link" href={p.url || `mailto:${d.email}?subject=${encodeURIComponent(`Let's discuss ${p.title}`)}`} {...(p.url ? {target:'_blank',rel:'noreferrer'} : {})}>{p.url ? 'View live project' : 'Discuss this work'}<ArrowUpRight size={15}/></a></div></motion.article>)}</motion.div><p className="work-note">Personal projects and professional contributions. Project visuals are conceptual representations.</p></section>
      <section id="experience" className="experience-section"><div className="section-shell section-space"><Reveal className="section-heading"><div><p className="eyebrow">02 / THE JOURNEY</p><h2>Built on<br/><span className="serif">experience.</span></h2></div><p>Different teams. Increasingly complex challenges.<br/>One constant: making things work better.</p></Reveal><div className="experience-layout"><div className="experience-index"><span className="terminal-label"><span className="live-dot"/> CAREER.LOG</span><p>From full-stack<br/>foundations to<br/><em>intelligent systems.</em></p><div className="career-stat"><b>04</b><span>companies<br/>across AI & full-stack</span></div><span className="index-foot">2022 — 2026<br/>EXPLORE EACH ROLE ↓</span></div><div className="timeline">{d.experience.map((job,i) => <div key={job.company} className={`timeline-entry ${active===i?'active':''}`}><span className="timeline-dot"/><motion.button whileTap={{scale:.985}} className="job-toggle" id={`job-button-${i}`} aria-expanded={active===i} aria-controls={`job-panel-${i}`} onClick={()=>setActive(active===i?null:i)}><span><span className="job-date">{job.date}</span><strong>{job.company}</strong><span className="job-role">{job.role}</span><span className="job-preview">{job.summary}</span></span>{active===i?<Minus size={20}/>:<Plus size={20}/>}</motion.button><div className="job-stack-preview"><Tags items={job.tags}/></div><AnimatePresence initial={false}>{active===i && <motion.div id={`job-panel-${i}`} role="region" aria-labelledby={`job-button-${i}`} initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration: reduced ? 0 : .45, ease:[.22,1,.36,1]}} className="job-panel"><div className="job-content"><p className="job-location">{job.legalName} · {job.place}</p><h4>Key contributions</h4><motion.ul variants={stagger} initial="hidden" animate="visible">{job.details.map(detail=><motion.li variants={reveal} key={detail}>{detail}</motion.li>)}</motion.ul><div className="job-stack"><p className="eyebrow">TECHNOLOGIES & PRACTICE</p>{job.stack.map(group=><div className="stack-group" key={group.label}><h5>{group.label}</h5><Tags items={group.items}/></div>)}</div></div></motion.div>}</AnimatePresence></div>)}</div></div></div></section>
      <section id="about" className="section-shell section-space"><Reveal className="section-heading"><div><p className="eyebrow">03 / THE WAY I THINK</p><h2>Curiosity drives.<br/><span className="serif">Craft delivers.</span></h2></div><p>I connect the interface, the system, and the intelligence behind it. Good engineering makes all three feel effortless.</p></Reveal><div className="skills-grid">{d.skills.map(({title,icon:Icon,description,tags})=><Reveal className="skill-card" key={title}><Icon size={25} strokeWidth={1.4}/><h3>{title}</h3><p>{description}</p><Tags items={tags}/></Reveal>)}</div><Reveal className="about-details"><div><span className="eyebrow">RECOGNITION</span><h3>Good work earns trust.</h3><p>Spot Light Award · Apollo SCM</p><span className="award-score">CSAT <b>4</b> <span>/</span> NPS <b>10</b></span><p>Recognized for exceptional delivery and customer satisfaction.</p></div><div><span className="eyebrow">ALWAYS A STUDENT</span><h3>A foundation. Never a finish line.</h3><p>Engineering degree · Dr. M.G.R. Educational And Research Institute<br/>2017 — 2021 · Chennai</p><p><a className="underline underline-offset-4 hover:text-blue-600" href={d.socials.scaler} target="_blank" rel="noreferrer">Scaler Academy</a> certifications in DSA, full-stack development, system design, and SQL. Database Design & SQL · University of Michigan.</p></div></Reveal></section>
      <section id="contact" className="contact-section"><div className="section-shell"><Reveal><p className="eyebrow">04 / START A CONVERSATION</p><div className="contact-heading"><h2>Something in mind?<br/><span className="serif">Let’s build it.</span></h2><a className="contact-arrow" href={`mailto:${d.email}`} aria-label="Email Vishal"><ArrowUpRight strokeWidth={1} size={64}/></a></div><a className="email-link" href={`mailto:${d.email}`}>{d.email}<ArrowUpRight size={21}/></a><div className="contact-details"><a href={`tel:${d.phoneHref}`}><Phone size={16}/>{d.phone}</a><span><MapPin size={16}/>{d.location}</span><div className="social-links">{[['linkedin','LinkedIn',Linkedin],['github','GitHub',Github],['scaler','Scaler',GraduationCap]].map(([key,label,Icon])=>d.socials[key]?<a key={key} href={d.socials[key]} target="_blank" rel="noreferrer"><Icon size={16}/>{label}<ArrowUpRight size={13}/></a>:<span key={key} className="unconfigured-social" title={`${label} URL was not provided in the resume`}><Icon size={16}/>{label} <small>coming soon</small></span>)}</div></div></Reveal></div></section>
    </main><footer className="site-footer section-shell"><a href="#" className="wordmark">vd<span>®</span></a><span>© {new Date().getFullYear()} Vishal Durga. Crafted with intention.</span><a href="#">BACK TO TOP <ArrowUpRight size={14}/></a></footer>
  </MotionConfig>;
}
