import { ArrowRight, ChartNoAxesCombined, ChevronDown, Download, FileText, LayoutTemplate, LogOut, Sparkles } from "lucide-react";

export default function Dashboard({ user, onLogout, onCreateResume }) {
  const firstName = (user?.name || user?.email?.split("@")[0] || "there").split(" ")[0];
  return (
    <main className="dashboard-page">
      <aside className="dashboard-sidebar">
        <a className="brand dashboard-brand" href="#dashboard" aria-label="ResumeForge dashboard">
          <span className="brand-mark"><FileText size={22} strokeWidth={2.3} /></span>
          <span>Resume<span className="brand-light">Forge</span><span className="brand-period">.</span></span>
        </a>
        <div className="dashboard-nav-label">WORKSPACE</div>
        <button className="dashboard-nav-item selected"><ChartNoAxesCombined size={18} /> Overview</button>
        <button className="dashboard-nav-item" onClick={onCreateResume}><FileText size={18} /> My resumes <span className="nav-count">0</span></button>
        <button className="dashboard-nav-item" onClick={onCreateResume}><LayoutTemplate size={18} /> Templates</button>
        <div className="sidebar-bottom">
          <div className="sidebar-help"><Sparkles size={18} /><strong>Your next opportunity<br />starts with a great story.</strong><span>Let’s build yours.</span><button onClick={onCreateResume}>Create a resume <ArrowRight size={14} /></button></div>
          <button className="dashboard-nav-item logout-button" onClick={onLogout}><LogOut size={18} /> Log out</button>
        </div>
      </aside>
      <section className="dashboard-main">
        <header className="dashboard-topbar">
          <div className="dashboard-breadcrumb">Workspace <span>/</span> Overview</div>
          <div className="dashboard-user"><span className="user-avatar">{firstName.slice(0,1).toUpperCase()}</span><div><strong>{firstName}</strong><small>Personal workspace</small></div><button onClick={onLogout} aria-label="Log out"><ChevronDown size={16} /></button></div>
        </header>
        <div className="dashboard-content">
          <div className="dashboard-welcome-row">
            <div><span className="eyebrow"><Sparkles size={14} /> YOUR CAREER WORKSPACE</span><h1>Good to see you, {firstName}<span>!</span></h1><p>Your next chapter starts here. Ready to make your experience stand out?</p></div>
            <button className="button-primary" onClick={onCreateResume}>＋ Create new resume <ArrowRight size={17} /></button>
          </div>
          <div className="dashboard-preview-note"><Sparkles size={17} /><div><strong>You’re in your ResumeForge workspace</strong><p>This is the dashboard preview. Your resume editor and secure account saving are coming next.</p></div><span className="preview-pill">PREVIEW</span></div>
          <div className="dashboard-stats">
            <article><span className="stat-icon blue-stat"><FileText size={19} /></span><div><small>Total resumes</small><strong>0</strong><span>Start your first one</span></div></article>
            <article><span className="stat-icon green-stat"><ChartNoAxesCombined size={19} /></span><div><small>ATS score checks</small><strong>0</strong><span>Optimize when ready</span></div></article>
            <article><span className="stat-icon gold-stat"><Download size={19} /></span><div><small>Downloads</small><strong>0</strong><span>Your PDFs will appear here</span></div></article>
          </div>
          <section className="dashboard-resumes">
            <div className="dashboard-section-heading"><div><h2>My resumes</h2><p>Your resume projects will live here.</p></div><button className="dashboard-text-button" onClick={onCreateResume}>View all <ArrowRight size={15} /></button></div>
            <div className="empty-resume-state"><div className="empty-resume-art"><FileText size={38} /><Sparkles size={17} /></div><h3>Your first resume starts here</h3><p>Choose a professional template and add your experience, education, and skills.</p><button className="button-primary" onClick={onCreateResume}>Create your first resume <ArrowRight size={16} /></button><span>No experience with resume builders needed.</span></div>
          </section>
          <section className="dashboard-templates">
            <div className="dashboard-section-heading"><div><h2>Find your style</h2><p>Start with a layout that fits your next move.</p></div></div>
            <div className="dashboard-template-grid">
              <button className="dashboard-template-card" onClick={onCreateResume}><div className="template-swatch classic-swatch"><span /><i /><i /><i /><b /></div><strong>The Classic</strong><small>Professional & timeless</small><ArrowRight size={16} /></button>
              <button className="dashboard-template-card" onClick={onCreateResume}><div className="template-swatch modern-swatch"><span /><i /><i /><i /><b /></div><strong>The Modern</strong><small>Clean & contemporary</small><ArrowRight size={16} /></button>
              <button className="dashboard-template-card" onClick={onCreateResume}><div className="template-swatch minimal-swatch"><span /><i /><i /><i /><b /></div><strong>The Minimal</strong><small>Simple & focused</small><ArrowRight size={16} /></button>
            </div>
          </section>
          <footer className="dashboard-footer">© 2026 ResumeForge <span>Made for your next chapter.</span></footer>
        </div>
      </section>
    </main>
  );
}