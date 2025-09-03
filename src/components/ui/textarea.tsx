import * as React from 'react';

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`w-full rounded-md border p-3 text-sm ${props.className ?? ''}`} />;
}
