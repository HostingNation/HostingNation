'use client';

import { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const SERVICES = ['Web Development','Custom Software','SaaS Development','E-commerce','API Integration','Business Automation','Other'];
const BUDGETS  = ['Under $1,000','$1,000 – $5,000','$5,000 – $15,000','$15,000 – $50,000','$50,000+'];

const inputStyle = {
  background: '#ffffff',
  border: '1px solid #ebebeb',
  borderRadius: 12,
  padding: '12px 16px',
  fontSize: 14,
  color: '#000000',
  width: '100%',
  outline: 'none',
  transition: 'border-color 0.2s ease'
};
const inputFocusStyle = { borderColor: '#dc3545' };
const inputBlurStyle  = { borderColor: '#ebebeb' };

export default function ContactForm() {
  const [status, setStatus]     = useState<Status>('idle');
  const [feedback, setFeedback] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res  = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || 'Submission failed');
      setStatus('success');
      setFeedback(json.message);
      (e.target as HTMLFormElement).reset();
    } catch (err: unknown) {
      setStatus('error');
      setFeedback(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl p-6 md:p-8 space-y-4"
      style={{ background: '#ffffff', border: '1px solid #ebebeb' }}>

      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full name *" name="name"  autoComplete="name"  placeholder="Jane Doe"         required />
        <Field label="Email *"     name="email" autoComplete="email" placeholder="jane@company.com" required type="email" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Phone"   name="phone"   autoComplete="tel"          placeholder="+91 98184 35920" />
        <Field label="Company" name="company" autoComplete="organization" placeholder="Company name" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <SelectField label="Service" name="service" options={SERVICES} />
        <Field label="Budget"  name="budget" placeholder="$1,000" />
      </div>

      <div>
        <label className="block text-xs mb-2" style={{ color: '#606060' }}>
          Tell us about your project *
        </label>
        <textarea
          name="message" required rows={5} minLength={10} maxLength={4000}
          placeholder="What are you building? Goals, timeline, current stack..."
          style={{ ...inputStyle, resize: 'none' }}
          onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
          onBlur={(e)  => Object.assign(e.currentTarget.style, inputBlurStyle)}
        />
      </div>

      <input type="hidden" name="source" value="contact-page" />

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting'
          ? <><Loader2 size={16} className="animate-spin" /> Sending…</>
          : <>Send Message <Send size={16} /></>}
      </button>

      {status === 'success' && (
        <div className="flex gap-3 items-start p-4 rounded-xl text-sm"
          style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#16a34a' }}>
          <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
          <p>{feedback}</p>
        </div>
      )}
      {status === 'error' && (
        <div className="flex gap-3 items-start p-4 rounded-xl text-sm"
          style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626' }}>
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          <p>{feedback}</p>
        </div>
      )}
    </form>
  );
}

function Field({
  label, name, type = 'text', placeholder, required, autoComplete
}: {
  label: string; name: string; type?: string;
  placeholder?: string; required?: boolean; autoComplete?: string;
}) {
  return (
    <div>
      <label className="block text-xs mb-2" style={{ color: '#606060' }}>{label}</label>
      <input
        name={name} type={type} placeholder={placeholder}
        required={required} autoComplete={autoComplete}
        style={inputStyle}
        onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
        onBlur={(e)  => Object.assign(e.currentTarget.style, inputBlurStyle)}
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-xs mb-2" style={{ color: '#606060' }}>{label}</label>
      <select
        name={name} defaultValue=""
        style={{
          ...inputStyle,
          appearance: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23dc3545' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
          backgroundRepeat:   'no-repeat',
          backgroundPosition: 'right 14px center',
        }}
        onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
        onBlur={(e)  => Object.assign(e.currentTarget.style, inputBlurStyle)}
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}