import Link from 'next/link';

export function FavoritesView() {
  return (
    <section className="shell-card empty-card">
      <h2>Links moved here</h2>
      <p>The favorite tab has been replaced with quick links for CAVO.</p>
      <Link href="/links" className="primary-pill">Open links</Link>
    </section>
  );
}
