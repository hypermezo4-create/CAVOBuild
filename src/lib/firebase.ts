import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  type Auth,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'AIzaSyDG0QXHhEtwsjJNkiAmeXpwTAuSyZExXA',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'cavo-4c0e6.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'cavo-4c0e6',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'cavo-4c0e6.firebasestorage.app',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '380167775107',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:380167775107:web:24777f1a13cfbc5e4accb6',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || 'G-7DP81CN2QS',
};

export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const firebaseAuth: Auth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export function createPhoneVerifier(containerId: string) {
  if (typeof window === 'undefined') return null;
  const anyWindow = window as typeof window & { [key: string]: unknown };
  const cached = anyWindow[`__${containerId}_recaptcha`];
  if (cached instanceof RecaptchaVerifier) return cached;
  const verifier = new RecaptchaVerifier(firebaseAuth, containerId, { size: 'invisible' });
  anyWindow[`__${containerId}_recaptcha`] = verifier;
  return verifier;
}

export async function beginPhoneLogin(phone: string, containerId: string) {
  const verifier = createPhoneVerifier(containerId);
  if (!verifier) throw new Error('Phone auth is only available in the browser.');
  return signInWithPhoneNumber(firebaseAuth, phone, verifier);
}
