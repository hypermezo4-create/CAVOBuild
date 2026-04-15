"use client";

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveUserSession } from '@/services/session';

export function AuthForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>('');
  const router = useRouter();

  const cta = useMemo(() => (mode === 'login' ? 'دخول سريع' : 'إنشاء حساب'), [mode]);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      saveUserSession({
        uid: `cavo-${Date.now()}`,
        name: (name || email.split('@')[0] || 'CAVO Client').trim(),
        email: email.trim(),
        provider: 'local-preview',
        avatarUrl: null,
      });
      setLoading(false);
      setMessage('تم تجهيز الحساب داخل نسخة المعاينة. ربط Firebase الحقيقي هيكون في المرحلة التالية.');
      router.push('/account');
    }, 420);
  };

  return (
    <form onSubmit={submit} className="auth-card glass-card stack-lg">
      <div className="chips-row">
        <button type="button" className={`chip ${mode === 'login' ? 'active' : ''}`} onClick={() => setMode('login')}>دخول</button>
        <button type="button" className={`chip ${mode === 'register' ? 'active' : ''}`} onClick={() => setMode('register')}>إنشاء حساب</button>
      </div>

      <div className="auth-top-copy">
        <p className="eyebrow small">Preview Mode</p>
        <strong>واجهة الحساب جاهزة ومقفولة على تجربة نظيفة بدون أخطاء.</strong>
      </div>

      {mode === 'register' ? (
        <label className="field">
          <span>الاسم</span>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="اسمك الكامل" />
        </label>
      ) : null}

      <label className="field">
        <span>البريد الإلكتروني</span>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@example.com" required />
      </label>

      <label className="field">
        <span>كلمة المرور</span>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="••••••••" required />
      </label>

      <button type="submit" className="primary-button full" disabled={loading}>{loading ? 'جاري التجهيز...' : cta}</button>

      <div className="auth-helper-box">
        <span>Firebase</span>
        <strong>هيتربط بعد ما نثبت الشكل النهائي ونخلص الأخطاء كلها.</strong>
      </div>

      {message ? <p className="auth-message success">{message}</p> : null}
    </form>
  );
}
