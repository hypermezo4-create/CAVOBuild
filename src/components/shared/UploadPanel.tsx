"use client";

import { useMemo, useState } from 'react';
import { imageKitConfig } from '@/lib/imagekit';

export function UploadPanel() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const preview = useMemo(() => (file ? URL.createObjectURL(file) : ''), [file]);

  const upload = async () => {
    if (!file) return;
    setStatus('جاري تجهيز الرفع...');
    setUrl('');
    const authResponse = await fetch('/api/imagekit-auth');
    if (!authResponse.ok) {
      const payload = await authResponse.json().catch(() => ({}));
      setStatus(payload.error || 'أضف IMAGEKIT_PRIVATE_KEY في أسرار GitHub أولًا.');
      return;
    }
    const auth = await authResponse.json();
    const form = new FormData();
    form.append('file', file);
    form.append('fileName', file.name);
    form.append('publicKey', imageKitConfig.publicKey);
    form.append('token', auth.token);
    form.append('expire', auth.expire);
    form.append('signature', auth.signature);

    setStatus('جاري الرفع إلى ImageKit...');
    const response = await fetch('https://upload.imagekit.io/api/v1/files/upload', {
      method: 'POST',
      body: form,
    });
    const payload = await response.json();
    if (!response.ok) {
      setStatus(payload.message || 'فشل الرفع.');
      return;
    }
    setUrl(payload.url || payload.thumbnailUrl || '');
    setStatus('تم الرفع بنجاح.');
  };

  return (
    <section className="stack-lg">
      <article className="glass-card auth-card stack-lg">
        <h2 style={{ margin: 0 }}>رفع صورة / فيديو</h2>
        <p className="muted" style={{ margin: 0 }}>الصيغ المدعومة: img / png / jpg / webp / mp4. الرفع يشتغل فور إضافة المفتاح السري في أسرار المشروع.</p>
        <input type="file" accept="image/*,video/*,.webp" onChange={(e) => setFile(e.target.files?.[0] || null)} />
        {preview ? <img src={preview} alt="preview" style={{ width: '100%', borderRadius: 20, maxHeight: 280, objectFit: 'cover' }} /> : null}
        <button type="button" className="primary-button full" onClick={() => void upload()} disabled={!file}>رفع الآن</button>
        {status ? <p className="auth-message success">{status}</p> : null}
        {url ? <a className="ghost-button full" href={url} target="_blank" rel="noreferrer">فتح الملف المرفوع</a> : null}
      </article>
    </section>
  );
}
