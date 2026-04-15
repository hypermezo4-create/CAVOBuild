import { PageHeader } from '@/components/shared/PageHeader';
import { videoDrops } from '@/lib/catalog';
import { VideoCard } from '@/components/shared/VideoCard';

export default function VideosPage() {
  return (
    <main className="page stack-xl">
      <PageHeader title="فيديوهات" subtitle="مختارات motion سريعة بنفس روح CAVO." backHref="/home" />
      <div className="video-grid">{videoDrops.map((video) => <VideoCard key={video.id} {...video} />)}</div>
    </main>
  );
}
