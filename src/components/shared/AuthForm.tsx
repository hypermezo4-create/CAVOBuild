"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppState } from '@/components/shared/AppProviders';

export function AuthForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const { login } = useAppState();
  const router = useRouter();

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    login({ name: name || email.split('@')[0] || 'CAVO Client', email });
    router.push('/account');
  };

  return (
    <form onSubmit={submit} className="auth-card glass-card stack-lg">
      <div className="chips-row">
        <button type="button" className={`chip ${mode === 'login' ? 'active' : ''}`} onClick={() => setMode('login')}>دخول</button>
        <button type="button" className={`chip ${mode === 'register' ? 'active' : ''}`} onClick={() => setMode('register')}>حساب جديد</button>
      </div>
      {mode === 'register' ? <label className="field"><span>الاسم</span><input value={name} onChange={(e) => setName(e.target.value)} placeholder="اسمك" /></label> : null}
      <label className="field"><span>البريد الإلكتروني</span><input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@example.com" required /></label>
      <label className="field"><span>كلمة المرور</span><input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="••••••••" required /></label>
      <button type="submit" className="primary-button">{mode === 'login' ? 'دخول سريع' : 'إنشاء الحساب'}</button>
    </form>
  );
}
