import * as React from 'react';

export function Card({ className='', children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`rounded-2xl border bg-white ${className}`} {...props}>{children}</div>;
}

export function CardContent({ className='', children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-4 ${className}`} {...props}>{children}</div>;
}
