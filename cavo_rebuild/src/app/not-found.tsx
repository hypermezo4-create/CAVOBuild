import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="page stack-xl">
      <section className="shell-card empty-card">
        <h2>Page not found</h2>
        <p>Return to CAVO home and continue browsing.</p>
        <Link href="/home" className="primary-pill">Home</Link>
      </section>
    </main>
  );
}
