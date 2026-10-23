import { useEffect, useState } from "react";
import { ArrowLeft, Check, Download, Eye, FileText, LayoutTemplate, Save, Sparkles, Trash2 } from "lucide-react";

const blankResume = {
  fullName: "", role: "", email: "", phone: "", location: "", website: "",
  summary: "", skills: "", experience: "", education: "", projects: ""
};

const fields = [
  { key: "fullName", label: "Full name", placeholder: "e.g. Alex Morgan", type: "input" },
  { key: "role", label: "Professional title", placeholder: "e.g. Frontend Developer", type: "input" },
  { key: "email", label: "Email address", placeholder: "alex@email.com", type: "input" },
  { key: "phone", label: "Phone number", placeholder: "+91 98765 43210", type: "input" },
  { key: "location", label: "City, country", placeholder: "Ghaziabad, India", type: "input" },
  { key: "website", label: "LinkedIn / portfolio (optional)", placeholder: "linkedin.com/in/yourname", type: "input" },
  { key: "summary", label: "Professional summary", placeholder: "Write 2–4 lines about your strengths, experience, and career goals…", type: "textarea" },
  { key: "experience", label: "Experience", placeholder: "Job title | Company | Dates\nAdd your key responsibilities and achievements on the lines below.", type: "textarea" },
  { key: "education", label: "Education", placeholder: "Degree | College | Graduation year\nAdd relevant coursework, achievements, or CGPA.", type: "textarea" },
  { key: "projects", label: "Projects (optional)", placeholder: "Project name | Tech stack\nWhat you built and what it does.", type: "textarea" },
  { key: "skills", label: "Skills", placeholder: "React, JavaScript, HTML, CSS, SQL…", type: "textarea" },
];

export default function ResumeEditor({ user, onBack }) {
  const [resume, setResume] = useState(() => {
    try {
      const saved = localStorage.getItem("resumeforge-draft");
      return saved ? { ...blankResume, ...JSON.parse(saved) } : { ...blankResume, fullName: user?.name || "" };
    } catch { return { ...blankResume, fullName: user?.name || "" }; }
  });
  const [template, setTemplate] = useState("classic");
  const [saved, setSaved] = useState(false);
  const [mobilePreview, setMobilePreview] = useState(false);

  useEffect(() => { setSaved(false); }, [resume]);
  const update = (key, value) => setResume((current) => ({ ...current, [key]: value }));
  const saveDraft = () => {
    try { localStorage.setItem("resumeforge-draft", JSON.stringify(resume)); setSaved(true); }
    catch { setSaved(false); }
  };
  const clearDraft = () => {
    if (!window.confirm("Clear all the details in this resume?")) return;
    setResume({ ...blankResume, fullName: user?.name || "" });
    localStorage.removeItem("resumeforge-draft");
    setSaved(false);
  };
  const exportPdf = () => {
    saveDraft();
    window.print();
  };
  const sections = [
    ["Professional Summary", resume.summary],
    ["Experience", resume.experience],
    ["Education", resume.education],
    ["Projects", resume.projects],
    ["Skills", resume.skills],
  ];
  return (
    <main className={`resume-editor-page ${mobilePreview ? "show-mobile-preview" : ""}`}>
      <header className="editor-topbar">
        <button className="editor-back" onClick={onBack}><ArrowLeft size={17} /> Dashboard</button>
        <a className="brand editor-brand" href="#editor" onClick={(e) => e.preventDefault()}><span className="brand-mark"><FileText size={20} /></span><span>Resume<span className="brand-light">Forge</span><span className="brand-period">.</span></span></a>
        <div className="editor-actions"><button className="editor-save" onClick={saveDraft}><Save size={16} /> <span>{saved ? "Saved" : "Save draft"}</span></button><button className="editor-export" onClick={exportPdf}><Download size={16} /> <span>Export PDF</span></button></div>
      </header>
      <div className="editor-workspace">
        <section className={`editor-form-panel ${mobilePreview ? "hide-on-mobile-preview" : ""}`}>
          <div className="editor-heading"><span className="eyebrow"><Sparkles size={14} /> RESUME BUILDER</span><h1>Build your story.</h1><p>Add your details and see your resume take shape live.</p></div>
          <div className="editor-template-picker"><div><strong><LayoutTemplate size={16} /> Choose a template</strong><small>Change the look anytime.</small></div><div className="editor-template-options">{["classic","modern","minimal"].map((name) => <button key={name} className={template === name ? "active" : ""} onClick={() => setTemplate(name)}><span className={`template-mini ${name}`}><i /><i /><i /></span><span>{name[0].toUpperCase()+name.slice(1)}</span>{template === name && <Check size={13} />}</button>)}</div></div>
          <div className="editor-progress"><div><span>YOUR DETAILS</span><strong>{Math.round(Object.values(resume).filter((v) => String(v).trim()).length / Object.keys(resume).length * 100)}% complete</strong></div><span className="editor-progress-track"><i style={{ width: `${Object.values(resume).filter((v) => String(v).trim()).length / Object.keys(resume).length * 100}%` }} /></span></div>
          <form className="resume-details-form" onSubmit={(e) => { e.preventDefault(); saveDraft(); }}>
            {fields.map((field, index) => <label key={field.key} className={field.type === "textarea" ? "editor-field editor-field-wide" : "editor-field"}><span>{field.label}</span>{field.type === "textarea" ? <textarea rows={field.key === "summary" ? 4 : 5} value={resume[field.key]} placeholder={field.placeholder} onChange={(e) => update(field.key, e.target.value)} /> : <input type={field.key === "email" ? "email" : "text"} value={resume[field.key]} placeholder={field.placeholder} onChange={(e) => update(field.key, e.target.value)} />}</label>)}
          </form>
          <div className="editor-bottom-actions"><button className="editor-clear" onClick={clearDraft}><Trash2 size={15} /> Clear form</button><button className="editor-save" onClick={saveDraft}><Save size={15} /> {saved ? "Draft saved" : "Save draft"}</button></div>
        </section>
        <section className={`editor-preview-panel ${mobilePreview ? "mobile-preview-active" : ""}`}>
          <div className="preview-toolbar"><div><Eye size={16} /><span>Live preview</span><small>Updates as you type</small></div><button className="preview-mobile-toggle" onClick={() => setMobilePreview(!mobilePreview)}>{mobilePreview ? "Edit details" : "Preview resume"}</button></div>
          <article className={`resume-paper resume-paper-${template}`}>
            <div className="paper-header"><h2>{resume.fullName || "Your Name"}</h2><h3>{resume.role || "Your Professional Title"}</h3><p>{[resume.email, resume.phone, resume.location, resume.website].filter(Boolean).join("  ·  ") || "Email · Phone · Location · Portfolio"}</p></div>
            {sections.map(([title, value]) => value.trim() && <section className="paper-section" key={title}><h4>{title}</h4><div className="paper-section-text">{value.split("\n").map((line, i) => <p key={i}>{line || " "}</p>)}</div></section>)}
            {!sections.some(([, value]) => value.trim()) && <div className="paper-empty"><FileText size={27} /><strong>Your resume will appear here</strong><span>Start filling in your details on the left.</span></div>}
            <div className="paper-footer">Created with ResumeForge</div>
          </article>
          <p className="preview-hint"><Sparkles size={14} /> Tip: Use short bullet-style lines for easy scanning. For PDF, choose “Save as PDF” in the print dialog.</p>
        </section>
      </div>
    </main>
  );
}