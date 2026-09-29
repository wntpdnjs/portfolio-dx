import { portfolio as p } from "@/data/portfolio";
import { ScrollButton } from "@/components/scroll-button";
import { Icon } from "@/components/icon";
import { SiteHeader } from "@/components/site-header";
import { FeaturedProjects } from "@/components/featured-projects";

function SectionHeading({ section }: { section: { index: string; title: string; subtitle: string } }) {
  return <div className="section-heading"><div className="section-name"><span className="section-index">{section.index}</span><h2>{section.title}</h2></div><p>{section.subtitle}</p></div>;
}

export default function Home() {
  const contacts = [
    { label: p.ui.email, value: p.contact.email, href: `mailto:${p.contact.email}`, icon: "mail" },
    { label: p.ui.phone, value: p.contact.phone, href: `tel:${p.contact.phone.replaceAll("-", "")}`, icon: "phone" },
  ];
  return <>
    <ScrollButton to="main" className="skip-link">{p.ui.skip}</ScrollButton>
    <SiteHeader />
    <main id="main" tabIndex={-1}>
      <section id="top" tabIndex={-1} className="hero container">
        <div className="hero-topline"><span><span className="status-dot"/>{p.identity}</span><span>{p.year}</span></div>
        <div className="hero-grid"><div><p className="eyebrow hero-eyebrow">{p.hero.eyebrow}</p><h1>{p.hero.headline.split("\n").map((line, i) => <span key={line} className={i === 1 ? "accent-text" : ""}>{line}</span>)}</h1><p className="hero-description">{p.hero.description}</p><div className="hero-proof">{p.hero.proof.map(item => <span key={item}><i aria-hidden="true">✓</i>{item}</span>)}</div><div className="hero-actions">{p.hero.actions.map((action, i) => <ScrollButton key={action.id} to={action.id} className={`button ${i === 0 ? "button-primary" : i === 1 ? "button-secondary" : "button-plain"}`}>{action.label}<Icon name="arrow"/></ScrollButton>)}</div></div>
        <aside className="hero-results" aria-label={p.ui.metricHeading}><div className="results-heading"><span className="eyebrow">{p.ui.metricHeading}</span><span>PRODUCT IMPACT</span></div>{p.metrics.map(metric => <div className="hero-result" key={metric.label}><div><span>{metric.label}</span><small>{metric.unit}</small></div><div className="hero-result-values"><span>{metric.before}</span><i aria-hidden="true">→</i><strong>{metric.after}</strong></div><em>{metric.change}</em></div>)}<div className="results-footer"><span className="status-dot"/>제품 적용 및 운영 지원 경험</div></aside></div>
        <div className="hero-bottom"><p>{p.hero.note}</p><span>AI PRODUCT · BACKEND · OPERATIONS</span></div>
      </section>
      <div className="tinted-band"><section id="about" tabIndex={-1} className="container section"><SectionHeading section={p.sections.about}/><div className="about-copy">{p.about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div><h3 className="small-heading">{p.sections.strengths.title}</h3><div className="strength-grid">{p.strengths.map(item => <article className="strength-card" key={item.title}><span className="icon-box"><Icon name={item.icon}/></span><h4>{item.title}</h4><p>{item.description}</p></article>)}</div></section></div>
      <section id="experience" tabIndex={-1} className="container section"><SectionHeading section={p.sections.experience}/><div className="experience-grid"><div className="experience-title"><span className="eyebrow">{p.experience.label}</span><h3>{p.experience.company}</h3><p>{p.experience.role}</p><strong className="role-note">{p.experience.roleNote}</strong><span className="period">{p.experience.period}</span></div><ul className="task-list">{p.experience.tasks.map(task => <li key={task}>{task}</li>)}</ul></div><div className="metrics" aria-label="상세 성과">{p.metrics.map(metric => <article className="metric-card" key={metric.label}><div className="metric-label">{metric.label}<span>{metric.unit}</span></div><div className="metric-values"><span>{metric.before}</span><span className="metric-arrow" aria-hidden="true">→</span><strong>{metric.after}</strong></div><span className="metric-change">{metric.change}</span></article>)}</div></section>
      <div className="tinted-band"><section id="projects" tabIndex={-1} className="container section"><SectionHeading section={p.sections.projects}/><FeaturedProjects /></section></div>
      <section id="activities" tabIndex={-1} className="container section"><SectionHeading section={p.sections.activities}/><div className="activity-grid">{p.activities.map(item => <article className="activity-card" key={item.title}><div className="activity-top"><span>{item.title}</span><span className="award-chip"><Icon name="award"/>{item.award}</span></div><h3>{item.name}</h3><p>{item.description}</p><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>
      <section id="skills" tabIndex={-1} className="container section section-bordered"><SectionHeading section={p.sections.skills}/><div className="skills-grid">{p.skills.map((group, i) => <article key={group.title}><div className="skill-title"><Icon name={["model", "backend", "code"][i]}/><h3>{group.title}</h3></div><div className="skill-tags">{group.items.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div></section>
      <section id="awards" tabIndex={-1} className="container section section-bordered"><SectionHeading section={p.sections.awards}/><div className="awards-list">{p.awards.map(award => <a className="award-card" key={award.title} href={award.image} target="_blank" rel="noopener noreferrer"><div className="award-image"><img src={award.image} alt={award.alt} loading="lazy" decoding="async"/><span>상장 크게 보기<Icon name="external"/></span></div><div className="award-copy"><span className="award-icon"><Icon name="award"/></span><div><h3>{award.title}</h3><span className="award-project">{award.project}</span></div><strong>{award.prize}</strong></div></a>)}</div></section>
      <div className="why-band"><section id="why" tabIndex={-1} className="container section"><SectionHeading section={p.sections.why}/><p className="why-copy">{p.why}</p><div className="why-signature"><span className="status-dot"/>AI Product · Backend · Operations</div></section></div>
      <section id="contact" tabIndex={-1} className="container section"><SectionHeading section={p.sections.contact}/><p className="contact-description">{p.contact.description}</p><div className="contact-grid">{contacts.map(contact => <a key={contact.label} className="contact-card" href={contact.href} target="_blank" rel="noopener noreferrer"><span className="icon-box"><Icon name={contact.icon}/></span><div><span className="contact-label">{contact.label}</span><span className="contact-value">{contact.value}</span></div><Icon name="external"/></a>)}</div></section>
    </main><footer className="site-footer"><div className="container footer-inner"><div><p>© {p.year} {p.ui.footer}</p><span>{p.ui.footerNote}</span></div><ScrollButton to="top" className="top-button">{p.ui.toTop}<Icon name="up"/></ScrollButton></div></footer>
  </>;
}
