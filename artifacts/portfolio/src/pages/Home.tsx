import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Terminal,
  Code2,
  Gamepad2,
  Trophy,
  Mail,
  ChevronDown,
  Activity,
  Cpu,
  Database,
  Globe,
  Crosshair,
  Zap,
  Target,
  Linkedin,
  Car,
  Leaf,
  CalendarCheck,
  Heart,
  FileText,
  Github,
  ExternalLink,
  Palette,
  Layout,
  PenTool
} from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Goals", href: "#goals" },
  { name: "Sports", href: "#sports" },
  { name: "Contact", href: "#contact" },
];

const SPORTS_IMAGES = [
  "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80",
  "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=600&q=80",
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80",
];

const HERO_BG =
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=60";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30 selection:text-primary">
      {/* Background effects */}
      <div
        className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.04]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      ></div>
      <div className="fixed inset-0 pointer-events-none z-[-2] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>

      {/* ── STICKY NAV ── */}
      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
        <nav className="w-full px-4 md:px-8 h-14 flex items-center justify-between gap-2">
          <a
            href="#home"
            onClick={(e) => scrollTo(e, "#home")}
            data-testid="link-logo"
            className="font-mono font-bold text-lg tracking-tighter text-primary shrink-0"
          >
            KS<span className="text-muted-foreground animate-pulse">_</span>
          </a>

          <div className="flex items-center gap-1 sm:gap-4 overflow-x-auto scrollbar-none">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                data-testid={`link-nav-${item.name.toLowerCase()}`}
                onClick={(e) => scrollTo(e, item.href)}
                className={`whitespace-nowrap text-xs sm:text-sm font-mono px-2 py-1 rounded transition-colors duration-200 ${
                  activeSection === item.href.slice(1)
                    ? "text-primary bg-primary/10 border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                // {item.name}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="w-full px-4 md:px-8 pt-14">

        {/* ── HERO ── */}
        <section id="home" className="min-h-[92vh] flex flex-col justify-center relative overflow-hidden">
          {/* Hero background image */}
          <div className="absolute inset-0 z-[-1]">
            <img
              src={HERO_BG}
              alt=""
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full max-w-7xl">
            {/* Left — name + tagline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded border border-primary/20">
                  STATUS: ONLINE
                </span>
                <span className="text-muted-foreground font-mono text-xs">AGE: 17</span>
                <span className="text-muted-foreground font-mono text-xs flex items-center gap-1">
                  <span className="text-primary">📍</span> UAE
                </span>
              </div>

              <h1
                className="leading-none mb-6"
                style={{ fontFamily: "'Black Ops One', sans-serif" }}
              >
                <span
                  className="block"
                  style={{
                    fontSize: "clamp(3.5rem, 9vw, 8rem)",
                    background: "linear-gradient(135deg, #d1d5db 0%, #9ca3af 40%, #e5e7eb 70%, #6b7280 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "0.03em",
                  }}
                >
                  KHADIJA
                </span>
                <span
                  className="block"
                  style={{
                    fontSize: "clamp(3.5rem, 9vw, 8rem)",
                    background: "linear-gradient(135deg, #93c5fd 0%, #60a5fa 35%, #a5b4fc 65%, #7dd3fc 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "0.03em",
                  }}
                >
                  SHIRAZ
                </span>
              </h1>

              <div className="font-mono text-base md:text-xl text-muted-foreground mb-8 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-primary shrink-0" />
                <span>Aspiring Game Developer & Software Engineer</span>
                <span className="inline-block w-3 h-6 bg-primary animate-pulse ml-1"></span>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-base text-muted-foreground max-w-lg"
              >
                Building worlds through code. Operating at the intersection of logical
                precision and creative ambition. Ready to compile the future.
              </motion.p>
            </motion.div>

            {/* Right — floating terminal card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="hidden lg:flex flex-col gap-4 items-end"
            >
              {/* Terminal card */}
              <div className="w-full max-w-sm rounded-xl border border-border bg-card/80 backdrop-blur overflow-hidden shadow-[0_0_40px_rgba(100,149,237,0.08)]">
                {/* Terminal title bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-background/60 border-b border-border">
                  <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/70"></span>
                  <span className="font-mono text-xs text-muted-foreground ml-2">khadija.py</span>
                </div>
                {/* Code body */}
                <div className="p-5 font-mono text-sm leading-7">
                  <div><span className="text-blue-400">class</span> <span className="text-green-400">Khadija</span><span className="text-muted-foreground">:</span></div>
                  <div className="ml-4"><span className="text-blue-400">def</span> <span className="text-yellow-300">__init__</span><span className="text-muted-foreground">(self):</span></div>
                  <div className="ml-8"><span className="text-muted-foreground">self.</span><span className="text-orange-300">age</span> <span className="text-muted-foreground">= </span><span className="text-green-300">17</span></div>
                  <div className="ml-8"><span className="text-muted-foreground">self.</span><span className="text-orange-300">role</span> <span className="text-muted-foreground">= </span><span className="text-amber-300">"Dev + Athlete"</span></div>
                  <div className="ml-8"><span className="text-muted-foreground">self.</span><span className="text-orange-300">langs</span> <span className="text-muted-foreground">= [</span><span className="text-amber-300">"Python"</span><span className="text-muted-foreground">, </span><span className="text-amber-300">"SQL"</span><span className="text-muted-foreground">]</span></div>
                  <div className="ml-8"><span className="text-muted-foreground">self.</span><span className="text-orange-300">goal</span> <span className="text-muted-foreground">= </span><span className="text-amber-300">"Game Dev"</span></div>
                  <div className="mt-2 flex items-center gap-1">
                    <span className="text-primary">{">"}</span>
                    <span className="text-muted-foreground">_</span>
                    <span className="inline-block w-2 h-4 bg-primary animate-pulse"></span>
                  </div>
                </div>
              </div>

              {/* Floating stat badges */}
              <div className="flex gap-3 flex-wrap justify-end">
                {[
                  { label: "Python", color: "text-blue-400 border-blue-400/30 bg-blue-400/5" },
                  { label: "38 WPM", color: "text-green-400 border-green-400/30 bg-green-400/5" },
                  { label: "Game Dev", color: "text-primary border-primary/30 bg-primary/5" },
                ].map((b) => (
                  <span key={b.label} className={`text-xs font-mono px-3 py-1.5 rounded-full border ${b.color}`}>
                    {b.label}
                  </span>
                ))}
              </div>

              {/* Car image from RevZone theme */}
              <div className="w-full max-w-sm rounded-xl overflow-hidden border border-border relative">
                <img
                  src="/revzone-car.jpeg"
                  alt="RevZone sports car"
                  className="w-full h-36 object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4 font-mono text-xs text-red-400">
                  // RevZone — latest project
                </div>
              </div>
            </motion.div>
          </div>

          <motion.a
            href="#about"
            data-testid="link-scroll-down"
            onClick={(e) => scrollTo(e, "#about")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-4 text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-mono text-xs"
          >
            <span>SCROLL_TO_INITIALIZE</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </motion.a>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="py-24 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 font-mono border-l-4 border-primary pl-4">
                {"<About_Me />"}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm Khadija, a 17-year-old high school graduate with a relentless drive for
                technology and competition. Whether I'm debugging logic, designing interactive
                experiences, or running plays on the basketball court, I play to win.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My goal is to craft immersive game mechanics and robust software systems. I
                believe the best code is like a perfect fast-break: efficient, precise, and
                beautiful to watch.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { label: "Typing Speed", value: "38 WPM", icon: <Activity /> },
                  { label: "Accuracy", value: "97%", icon: <Target /> },
                  { label: "Current Level", value: "Lvl 17", icon: <Zap /> },
                  { label: "Class", value: "Dev/Athlete", icon: <Crosshair /> },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="bg-card border border-border p-5 rounded-lg hover:border-primary/50 transition-colors group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="text-primary mb-3 w-5 h-5">{stat.icon}</div>
                    <div className="text-2xl font-bold font-mono text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs font-mono text-muted-foreground uppercase">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* About image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden border border-border aspect-[4/3]">
                <img
                  src={ABOUT_IMG}
                  alt="Coding workspace"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 font-mono text-xs text-primary bg-background/70 px-3 py-1 rounded border border-primary/20">
                  // current_status: building
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-primary/5 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="py-24 max-w-6xl mx-auto relative">
          <h2 className="text-3xl font-bold mb-12 font-mono text-center">
            {"System_Capabilities"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Python", icon: <Code2 />, desc: "Logic & Automation" },
              { name: "HTML/CSS", icon: <Globe />, desc: "Structure & Style" },
              { name: "SQL", icon: <Database />, desc: "Data Management" },
              {
                name: "Web Design",
                icon: <Cpu />,
                desc: "Currently Learning",
                learning: true,
              },
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`p-6 rounded-xl border ${
                  skill.learning
                    ? "border-dashed border-primary/50 bg-primary/5"
                    : "border-border bg-card"
                } hover:shadow-[0_0_20px_rgba(100,149,237,0.1)] transition-all`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-background rounded-lg border border-border">
                    {React.cloneElement(skill.icon as React.ReactElement, {
                      className: skill.learning ? "text-primary" : "text-foreground",
                      size: 20,
                    })}
                  </div>
                  {skill.learning && (
                    <span className="text-[10px] uppercase font-mono px-2 py-1 bg-primary/20 text-primary rounded-full animate-pulse">
                      Loading...
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                <p className="text-sm text-muted-foreground font-mono">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" className="py-24 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 font-mono text-center">{"Featured_Projects"}</h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-border bg-card overflow-hidden"
          >
            {/* Top accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-red-500 via-red-400/60 to-primary/40"></div>

            <div className="p-8 md:p-10">
              {/* Header row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-red-500/10 text-red-400 rounded-lg flex items-center justify-center shrink-0 border border-red-500/20">
                      <Car className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      <span className="text-red-400">Rev</span>Zone
                    </h3>
                  </div>
                  <p className="text-muted-foreground font-mono text-sm pl-13">Digital Sports Car Showroom</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full">Jul 2025</span>
                  <span className="text-xs font-mono px-3 py-1 bg-card border border-border rounded-full text-muted-foreground">Desktop App</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                A fully interactive desktop application that lets users browse sports cars by type — Electric, Hybrid, or Petrol — view detailed specs, eco-performance data, and high-quality images. Features animated menus, a Wishlist system, and a test drive booking system with date and time options.
              </p>

              {/* Feature highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: <Car className="w-4 h-4" />, label: "Car Browser", desc: "Filter by Electric, Hybrid, Petrol", red: true },
                  { icon: <Heart className="w-4 h-4" />, label: "Wishlist", desc: "Save your favourite cars", red: true },
                  { icon: <CalendarCheck className="w-4 h-4" />, label: "Test Drive Booking", desc: "Schedule with date & time", red: false },
                  { icon: <Leaf className="w-4 h-4" />, label: "Eco Metrics", desc: "CO2, fuel use & eco-score", red: false },
                  { icon: <Database className="w-4 h-4" />, label: "MySQL Backend", desc: "Live car data from a database", red: false },
                  { icon: <Code2 className="w-4 h-4" />, label: "UN Sustainability", desc: "Aligned with global goals", red: false },
                ].map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border/60"
                  >
                    <div className={`${f.red ? "text-red-400" : "text-primary"} mt-0.5 shrink-0`}>{f.icon}</div>
                    <div>
                      <div className="text-sm font-bold mb-0.5">{f.label}</div>
                      <div className="text-xs text-muted-foreground font-mono">{f.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tech stack + status */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border/40">
                <div className="flex flex-wrap gap-2">
                  {["Python", "Tkinter", "MySQL", "OOP"].map((tech) => (
                    <span key={tech} className="text-xs font-mono px-3 py-1 bg-primary/5 border border-primary/20 text-primary rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-mono text-muted-foreground border border-border px-3 py-1 rounded flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-500/80 inline-block"></span>
                  Local — GitHub link coming soon
                </span>
              </div>
            </div>
          </motion.div>

          {/* Job Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl border border-border bg-card overflow-hidden mt-6"
          >
            {/* Top accent bar — blue/primary theme */}
            <div className="h-1 w-full bg-gradient-to-r from-primary via-blue-400 to-primary/20"></div>

            <div className="p-8 md:p-10">
              {/* Header row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0 border border-primary/20">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-bold">Job Application Form</h3>
                  </div>
                  <p className="text-muted-foreground font-mono text-sm">Hand-coded web form — HTML & CSS</p>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full">May 2026</span>
                  <span className="text-xs font-mono px-3 py-1 bg-card border border-border rounded-full text-muted-foreground">Web</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                A fully hand-coded job application form built from scratch using only HTML and CSS — no generators, no templates, no frameworks. Every element was written manually, demonstrating a solid grasp of web structure and styling fundamentals.
              </p>

              {/* Feature highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: <PenTool className="w-4 h-4" />, label: "Hand-coded", desc: "No generators or templates used" },
                  { icon: <Layout className="w-4 h-4" />, label: "HTML Structure", desc: "Semantic, clean markup from scratch" },
                  { icon: <Palette className="w-4 h-4" />, label: "CSS Styling", desc: "Custom styling without frameworks" },
                ].map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border/60"
                  >
                    <div className="text-primary mt-0.5 shrink-0">{f.icon}</div>
                    <div>
                      <div className="text-sm font-bold mb-0.5">{f.label}</div>
                      <div className="text-xs text-muted-foreground font-mono">{f.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tech stack + GitHub link */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border/40">
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS"].map((tech) => (
                    <span key={tech} className="text-xs font-mono px-3 py-1 bg-primary/5 border border-primary/20 text-primary rounded">
                      {tech}
                    </span>
                  ))}
                  <span className="text-xs font-mono px-3 py-1 bg-green-500/5 border border-green-500/20 text-green-400 rounded flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
                    From scratch
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <a
                    href="https://github.com/greysuit-ai/JobApplicationForm"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="link-project-jobform-github"
                    className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 border border-border rounded hover:border-primary/50 hover:text-primary text-muted-foreground transition-colors group"
                  >
                    <Github className="w-3.5 h-3.5 group-hover:text-primary" />
                    View on GitHub
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                  <a
                    href="https://greysuit-ai.github.io/JobApplicationForm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="link-project-jobform-demo"
                    className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors group font-bold"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── GOALS ── */}
        <section id="goals" className="py-24 max-w-6xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <h2 className="text-3xl font-bold mb-8 font-mono border-l-4 border-primary pl-4">
              {"Mission_Objectives"}
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Target className="text-primary w-5 h-5" /> Target Specializations
                </h3>
                <ul className="space-y-4 font-mono text-sm">
                  {[
                    "Game Development Architecture",
                    "Artificial Intelligence & ML",
                    "Full-Stack Software Engineering",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <span className="text-primary">{">"}</span> {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-border"></div>
                <div className="space-y-8 relative z-10">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shrink-0 shadow-[0_0_10px_rgba(100,149,237,0.5)] text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Master Core Foundations</h4>
                      <p className="text-sm text-muted-foreground font-mono">
                        Deepen understanding of algorithms and systems design.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center text-primary font-bold shrink-0 text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">First Major Game Release</h4>
                      <p className="text-sm text-muted-foreground font-mono">
                        Build and deploy a complete indie title.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-card border-2 border-border flex items-center justify-center text-muted-foreground font-bold shrink-0 text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-muted-foreground">
                        Break into AI/ML
                      </h4>
                      <p className="text-sm text-muted-foreground font-mono">
                        Apply machine learning to real-world problems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SPORTS ── */}
        <section id="sports" className="py-24 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 font-mono text-center">
            {"AFK_Activities"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Basketball",
                icon: <Trophy className="w-6 h-6" />,
                desc: "Court vision translates to code vision. Always playing to win.",
                img: SPORTS_IMAGES[0],
              },
              {
                title: "Running",
                icon: <Zap className="w-6 h-6" />,
                desc: "Endurance training for the long debugging sessions.",
                img: SPORTS_IMAGES[1],
              },
              {
                title: "Gaming",
                icon: <Gamepad2 className="w-6 h-6" />,
                desc: "Analysing mechanics while enjoying the narrative.",
                img: SPORTS_IMAGES[2],
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Card image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card"></div>
                </div>

                <div className="p-6 bg-card">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm font-mono">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-24 pb-32 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6 font-mono">
              {"Initiate_Connection"}
            </h2>
            <p className="text-muted-foreground mb-10">
              Ready to collaborate on the next big project? My inbox is open.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
              <a
                href="mailto:khadijashiraz454@gmail.com"
                data-testid="link-contact-email"
                className="inline-flex items-center gap-3 px-8 py-4 bg-card border border-primary/50 text-primary font-mono font-bold rounded hover:border-primary hover:bg-primary/10 transition-colors group"
              >
                <Mail className="w-5 h-5" />
                Gmail
              </a>
              <a
                href="https://www.linkedin.com/in/khadija-s-620689362"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-contact-linkedin"
                className="inline-flex items-center gap-3 px-8 py-4 bg-card border border-primary/50 text-primary font-mono font-bold rounded hover:border-primary hover:bg-primary/10 transition-colors group"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/greysuit-ai"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-contact-github"
                className="inline-flex items-center gap-3 px-8 py-4 bg-card border border-primary/50 text-primary font-mono font-bold rounded hover:border-primary hover:bg-primary/10 transition-colors group"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border/40 bg-card/30 backdrop-blur-sm py-8 text-center">
        <div className="container mx-auto px-6 font-mono text-sm text-muted-foreground">
          <p className="mb-2">KHADIJA SHIRAZ © 2026</p>
          <p className="opacity-50">{"// End of file"}</p>
        </div>
      </footer>
    </div>
  );
}
