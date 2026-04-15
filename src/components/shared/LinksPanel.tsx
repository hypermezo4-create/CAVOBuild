import { SOCIAL_LINKS } from '@/lib/constants';

export function LinksPanel() {
  return (
    <section className="stack-lg">
      <article className="glass-card empty-state links-intro-card">
        <h2>روابط CAVO</h2>
        <p className="muted">الموقع الرسمي وكل قنوات التواصل في مكان واحد. اضغط على أي رابط يفتح مباشرة.</p>
      </article>
      <div className="links-grid">
        {SOCIAL_LINKS.map((link) => (
          <a key={link.id} href={link.href} target="_blank" rel="noreferrer" className="glass-card social-card">
            <span className="social-icon" style={{ ['--accent' as string]: link.accent }}>{link.icon}</span>
            <div>
              <strong>{link.label}</strong>
              <p>{link.subtitle}</p>
            </div>
            <span className="social-arrow">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
