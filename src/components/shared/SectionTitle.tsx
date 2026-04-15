import Link from 'next/link';

export function SectionTitle({ title, href }: { title: string; href?: string }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {href ? <Link href={href} className="mini-link">عرض الكل</Link> : null}
    </div>
  );
}
