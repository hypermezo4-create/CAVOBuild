export function VideoCard({ poster, title, duration }: { poster: string; title: string; duration: string }) {
  return (
    <article className="video-card glass-card">
      <img src={poster} alt={title} loading="lazy" />
      <div className="video-overlay">
        <span className="play-chip">▶</span>
        <div>
          <h3>{title}</h3>
          <p>{duration}</p>
        </div>
      </div>
    </article>
  );
}
