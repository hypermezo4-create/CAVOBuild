import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { BackButton } from '@/components/shared/BackButton';

export function PageHeader({ title, subtitle, backHref }: { title: string; subtitle?: string; backHref?: string }) {
  return (
    <header className="page-header glass-card">
      <div className="header-row">
        {backHref ? (
          <BackButton fallbackHref={backHref} />
        ) : (
          <div className="brand-mark"><img src="/brand/cavo-logo-circle.png" alt="CAVO" /></div>
        )}
        <ThemeToggle />
      </div>
      <div className="header-copy">
        <p className="eyebrow">CAVO</p>
        <h1>{title}</h1>
        {subtitle ? <p className="muted intro-copy">{subtitle}</p> : null}
      </div>
    </header>
  );
}
