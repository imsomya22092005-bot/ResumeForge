import { useState } from "react";
import {
  ArrowRight, Check, ChevronDown, FileText, Menu, X, Sparkles,
  ShieldCheck, Zap, Palette, Download, LayoutTemplate, CircleCheck,
  Star, WandSparkles, BriefcaseBusiness, GraduationCap, UserRound,
  ChartNoAxesCombined
} from "lucide-react";

const templates = [
  { name: "The Classic", type: "Professional", tone: "classic", tag: "MOST POPULAR" },
  { name: "The Modern", type: "Clean & contemporary", tone: "modern", tag: "ATS FRIENDLY" },
  { name: "The Minimal", type: "Simple & focused", tone: "minimal", tag: "EDITOR'S PICK" },
];

const features = [
  { icon: WandSparkles, title: "Write with confidence", text: "Get smart suggestions that turn your experience into clear, compelling resume content." },
  { icon: LayoutTemplate, title: "Made to stand out", text: "Choose a polished layout that helps recruiters find what matters at a glance." },
  { icon: ShieldCheck, title: "ATS-friendly by design", text: "Keep your details structured and readable for applicant tracking systems." },
  { icon: Download, title: "Ready when you are", text: "Preview your resume and export a crisp PDF when it feels just right." },
];

function MiniResume({ tone = "classic", large = false }) {
  return (
    <div className={`mini-resume ${tone} ${large ? "mini-resume-large" : ""}`}>
      <div className="resume-top">
        <div className="resume-avatar">{tone === "modern" ? "JD" : ""}</div>
        <div className="resume-heading">
          <span className="resume-name">{tone === "minimal" ? "JORDAN DAVIS" : "Jordan Davis"}</span>
          <span className="resume-role">Product Designer</span>
          <span className="resume-contact">jordan@email.com · New York, NY</span>
        </div>
      </div>
      <div className="resume-rule" />
      <div className="resume-section">
        <b>{tone === "minimal" ? "PROFILE" : "PROFILE"}</b>
        <i className="line long" /><i className="line medium" /><i className="line short" />
      </div>
      <div className="resume-section">
        <b>EXPERIENCE</b>
        <div className="resume-job"><strong>Senior Product Designer</strong><span>2022 — Present</span></div>
        <i className="line long" /><i className="line medium" /><i className="line long" />
        <div className="resume-job"><strong>Product Designer</strong><span>2019 — 2022</span></div>
        <i className="line long" /><i className="line short" />
      </div>
      <div className="resume-section">
        <b>EDUCATION</b>
        <div className="resume-job"><strong>B.A. Design</strong><span>2015 — 2019</span></div>
        <i className="line medium" />
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  const startBuilding = () => {
    document.getElementById("get-started")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim()) {
      alert("You're on the list! ResumeForge's resume builder is coming next.");
      setEmail("");
    }
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="ResumeForge home">
          <span className="brand-mark"><FileText size={22} strokeWidth={2.3} /></span>
          <span>Resume<span className="brand-light">Forge</span><span className="brand-period">.</span></span>
        </a>
        <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#templates" onClick={() => setMenuOpen(false)}>Templates</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQs</a>
          <button className="nav-cta" onClick={startBuilding}>Build my resume <ArrowRight size={16} /></button>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={15} /> YOUR NEXT CHAPTER STARTS HERE</div>
            <h1>Your experience.<br /><span>Your next opportunity.</span></h1>
            <p className="hero-description">Create a resume that feels like you — polished, professional, and ready for what’s next. Less formatting. More forward momentum.</p>
            <div className="hero-actions">
              <button className="button-primary" onClick={startBuilding}>Create my resume <ArrowRight size={18} /></button>
              <a className="text-link" href="#templates">Explore templates <span>↗</span></a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack"><span>AS</span><span>MK</span><span>JD</span><span>+</span></div>
              <div><div className="proof-stars"><Star /><Star /><Star /><Star /><Star /></div><p><strong>A better first impression</strong><br />starts with a better resume.</p></div>
            </div>
          </div>
          <div className="hero-visual" aria-label="Resume preview illustration">
            <div className="visual-glow" />
            <div className="floating-note note-top"><span className="note-icon"><CircleCheck size={17} /></span><span><strong>Looking sharp!</strong><small>Clean, professional layout</small></span></div>
            <div className="resume-paper"><MiniResume tone="classic" large /></div>
            <div className="floating-note note-bottom"><span className="download-icon"><Download size={17} /></span><span><strong>PDF-ready</strong><small>Make it yours, then export</small></span></div>
            <div className="sparkle sparkle-one">✳</div><div className="sparkle sparkle-two">✦</div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="trust-inner"><span>EVERY CAREER HAS A STORY</span><i /><p>Make yours easy to remember.</p><div className="trust-points"><span><Check /> Simple to use</span><span><Check /> Professional layouts</span><span><Check /> Your story, your way</span></div></div>
        </section>

        <section className="features-section section-wrap" id="features">
          <div className="section-heading">
            <span className="eyebrow">A LITTLE LESS STRESS</span>
            <h2>All the right things.<br /><span>None of the busywork.</span></h2>
            <p>Everything you need to turn your experience into a resume you’re proud to send.</p>
          </div>
          <div className="features-grid">
            {features.map(({ icon: Icon, title, text }, index) => (
              <article className="feature-card" key={title}>
                <div className="feature-icon">{<Icon size={22} />}</div>
                <span className="feature-number">0{index + 1}</span>
                <h3>{title}</h3><p>{text}</p><a href="#get-started" aria-label={`Learn more about ${title}`}>Learn more <ArrowRight size={15} /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="templates-section" id="templates">
          <div className="section-wrap">
            <div className="templates-heading">
              <div><span className="eyebrow">YOUR STYLE, YOUR STORY</span><h2>A look that feels<br /><span>like you.</span></h2></div>
              <p>Start with a thoughtful design. Make it yours with your skills, experience, and personality.</p>
            </div>
            <div className="templates-grid">
              {templates.map((template) => (
                <article className="template-card" key={template.name}>
                  <div className="template-preview"><span className="template-tag">{template.tag}</span><MiniResume tone={template.tone} /></div>
                  <div className="template-meta"><div><h3>{template.name}</h3><p>{template.type}</p></div><button onClick={startBuilding} aria-label={`Use ${template.name} template`}><ArrowRight size={18} /></button></div>
                </article>
              ))}
            </div>
            <div className="templates-footnote"><Palette size={17} /> Thoughtful layouts. Easy-to-read structure. A more confident you.</div>
          </div>
        </section>

        <section className="steps-section section-wrap" id="how-it-works">
          <div className="steps-intro"><span className="eyebrow">THREE STEPS. ONE GREAT RESUME.</span><h2>From “where do I start?”<br /><span>to “send it.”</span></h2><p>You bring the experience. We’ll help you present it beautifully.</p><button className="button-primary" onClick={startBuilding}>Let’s get started <ArrowRight size={17} /></button></div>
          <div className="steps-list">
            <article className="step"><div className="step-icon"><UserRound /></div><div><span>STEP 01</span><h3>Tell your story</h3><p>Add your experience, education, skills, and the details that make you you.</p></div><Check className="step-check" /></article>
            <article className="step"><div className="step-icon"><WandSparkles /></div><div><span>STEP 02</span><h3>Make it yours</h3><p>Choose a layout and refine your content into a clear, confident story.</p></div><Check className="step-check" /></article>
            <article className="step"><div className="step-icon"><Download /></div><div><span>STEP 03</span><h3>Take it with you</h3><p>Review the final look and get your resume ready to share with the world.</p></div><Check className="step-check" /></article>
          </div>
        </section>

        <section className="cta-section section-wrap" id="get-started">
          <div className="cta-card">
            <div className="cta-decoration cta-decoration-one" /><div className="cta-decoration cta-decoration-two" />
            <div className="cta-content"><div className="cta-icon"><BriefcaseBusiness size={23} /></div><span className="eyebrow">YOUR NEXT CHAPTER IS WAITING</span><h2>Let’s make your next move<br />a little more <em>you.</em></h2><p>Get updates when ResumeForge’s interactive resume builder is ready.</p>
              <form className="signup-form" onSubmit={handleSubmit}><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} required /><button type="submit">Keep me posted <ArrowRight size={17} /></button></form>
              <div className="privacy-note"><ShieldCheck size={14} /> No spam. Just a little career inspiration.</div>
            </div>
            <div className="cta-side-art"><div className="art-circle"><FileText size={50} /><span><Check size={17} /></span></div><div className="art-chip chip-one"><Zap size={15} /> Ready for your next step</div><div className="art-chip chip-two"><ChartNoAxesCombined size={15} /> Your story, clearly told</div></div>
          </div>
        </section>

        <section className="faq-section section-wrap" id="faq">
          <div className="faq-heading"><span className="eyebrow">GOOD TO KNOW</span><h2>A few things<br /><span>you might wonder.</span></h2></div>
          <div className="faq-list">
            <details><summary>What is ResumeForge? <ChevronDown size={18} /></summary><p>ResumeForge is being built to help you create a polished, professional resume with guided steps and thoughtful templates.</p></details>
            <details><summary>Will I be able to download my resume? <ChevronDown size={18} /></summary><p>PDF export is part of the planned resume-building experience. This landing page is the first step; the working editor will be added next.</p></details>
            <details><summary>Do I need design skills? <ChevronDown size={18} /></summary><p>Not at all. The goal is to make the process straightforward, with clear sections and ready-to-use layouts.</p></details>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <div className="footer-brand"><a className="brand" href="#home"><span className="brand-mark"><FileText size={22} /></span><span>Resume<span className="brand-light">Forge</span><span className="brand-period">.</span></span></a><p>Make your next chapter<br />your best one yet.</p></div>
          <div className="footer-links"><div><strong>Explore</strong><a href="#features">Features</a><a href="#templates">Templates</a><a href="#how-it-works">How it works</a></div><div><strong>ResumeForge</strong><a href="#faq">FAQs</a><a href="#get-started">Get updates</a><a href="#home">Back to top ↑</a></div></div>
        </div>
        <div className="footer-bottom section-wrap"><span>© 2026 ResumeForge. Built for your next chapter.</span><span>Thoughtfully made <span className="footer-heart">♥</span> for what’s next.</span></div>
      </footer>
    </div>
  );
}

export default App;