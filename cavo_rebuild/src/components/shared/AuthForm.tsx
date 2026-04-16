"use client";

import { FormEvent, useState } from 'react';
import { labels } from '@/lib/constants';
import { useAppState } from '@/components/shared/AppProviders';

export function AuthForm() {
  const { login, locale } = useAppState();
  const copy = labels[locale];
  const [name, setName] = useState('CAVO Client');
  const [email, setEmail] = useState('client@cavo.com');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    login({ name, email });
  };

  return (
    <form className="shell-card auth-form" onSubmit={handleSubmit}>
      <div className="field-stack">
        <label>
          <span>Name</span>
          <input value={name} onChange={(event) => setName(event.target.value)} placeholder="CAVO Client" />
        </label>
        <label>
          <span>Email</span>
          <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="client@cavo.com" />
        </label>
      </div>
      <p className="inline-note">{copy.authText}</p>
      <button type="submit" className="primary-pill full">{copy.login}</button>
    </form>
  );
}
