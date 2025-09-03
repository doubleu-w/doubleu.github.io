'use client';
import * as React from 'react';
import clsx from 'clsx';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
};

export function Button({ className, variant='default', size='md', ...props }: Props) {
  const base = 'rounded-xl px-4 py-2 font-medium transition border';
  const variants = {
    default: 'bg-gray-900 text-white hover:opacity-90 border-transparent',
    outline: 'bg-white text-gray-900 hover:bg-gray-50 border-gray-300',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 border-transparent',
    destructive: 'bg-red-600 text-white hover:bg-red-700 border-transparent',
  } as const;
  const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-sm',
    lg: 'text-base px-5 py-3',
  } as const;

  return <button className={clsx(base, variants[variant], sizes[size], className)} {...props} />;
}
