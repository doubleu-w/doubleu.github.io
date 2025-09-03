'use client';
import * as React from 'react';

type TabsContextType = { value: string, setValue: (v: string) => void };
const Ctx = React.createContext<TabsContextType | null>(null);

export function Tabs({ defaultValue, children, className='' }: { defaultValue: string, children: React.ReactNode, className?: string }) {
  const [value, setValue] = React.useState(defaultValue);
  return <div className={className}><Ctx.Provider value={{ value, setValue }}>{children}</Ctx.Provider></div>;
}

export function TabsList({ children, className='' }: { children: React.ReactNode, className?: string }) {
  return <div className={`flex items-center gap-2 ${className}`}>{children}</div>;
}

export function TabsTrigger({ value, id, children }: { value: string, id?: string, children: React.ReactNode }) {
  const ctx = React.useContext(Ctx)!;
  const active = ctx.value === value;
  return (
    <button id={id} onClick={() => ctx.setValue(value)}
      className={`rounded-xl border px-4 py-2 text-sm ${active ? 'bg-gray-900 text-white' : 'bg-white text-gray-800 hover:bg-gray-50'}`}>
      {children}
    </button>
  );
}

export function TabsContent({ value, children }: { value: string, children: React.ReactNode }) {
  const ctx = React.useContext(Ctx)!;
  if (ctx.value !== value) return null;
  return <div className="mt-2">{children}</div>;
}
