"use client";

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { beginPhoneLogin, firebaseAuth, googleProvider } from '@/lib/firebase';

export function AuthForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const cta = useMemo(() => (mode === 'login' ? 'تسجيل الدخول' : 'إنشاء حساب'), [mode]);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');
    try {
      if (mode === 'login') {
        await signInWithEmailAndPassword(firebaseAuth, email.trim(), password);
      } else {
        const credential = await createUserWithEmailAndPassword(firebaseAuth, email.trim(), password);
        if (name.trim()) await updateProfile(credential.user, { displayName: name.trim() });
      }
      router.push('/account');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'تعذر إكمال العملية.');
    } finally {
      setLoading(false);
    }
  };

  const signInGoogle = async () => {
    setLoading(true);
    setError('');
    try {
      await signInWithPopup(firebaseAuth, googleProvider);
      router.push('/account');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'تعذر تسجيل الدخول عبر Google.');
    } finally {
      setLoading(false);
    }
  };

  const signInPhone = async () => {
    if (!phone.trim()) {
      setError('اكتب رقم الموبايل بصيغة دولية أو محلية أولًا.');
      return;
    }
    setLoading(true);
    setError('');
    setMessage('');
    try {
      await beginPhoneLogin(phone.trim(), 'phone-auth-anchor');
      setMessage('تم إرسال كود التحقق. ربط إدخال الكود هيكون في الباتش اللي بعده.');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'تعذر بدء تسجيل الدخول بالموبايل.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="auth-card glass-card stack-lg">
      <div className="chips-row">
        <button type="button" className={`chip ${mode === 'login' ? 'active' : ''}`} onClick={() => setMode('login')}>تسجيل الدخول</button>
        <button type="button" className={`chip ${mode === 'register' ? 'active' : ''}`} onClick={() => setMode('register')}>إنشاء حساب</button>
      </div>

      {mode === 'register' ? (
        <label className="field">
          <span>الاسم</span>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="اسمك" />
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

      <button type="submit" className="primary-button full" disabled={loading}>{loading ? 'جاري التنفيذ...' : cta}</button>

      <div className="divider"><span>أو</span></div>

      <button type="button" className="ghost-button full auth-provider" onClick={signInGoogle} disabled={loading}>Google</button>
      <label className="field compact">
        <span>Phone (اختياري الآن)</span>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="+201221204322" />
      </label>
      <div id="phone-auth-anchor" />
      <button type="button" className="ghost-button full auth-provider" onClick={signInPhone} disabled={loading}>Phone</button>

      {message ? <p className="auth-message success">{message}</p> : null}
      {error ? <p className="auth-message error">{error}</p> : null}
    </form>
  );
}
