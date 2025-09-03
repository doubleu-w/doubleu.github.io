'use client';
import * as React from 'react';

type Props = {
  min?: number;
  max?: number;
  step?: number;
  value: number[];
  onValueChange: (v: number[]) => void;
};

export function Slider({ min=0, max=100, step=1, value, onValueChange }: Props) {
  const isRange = value.length === 2;
  if (!isRange) {
    return (
      <input type="range" min={min} max={max} step={step} value={value[0]}
        onChange={(e) => onValueChange([Number(e.target.value)])}
        className="w-full" />
    );
  }
  return (
    <div className="flex items-center gap-2">
      <input type="range" min={min} max={max} step={step} value={value[0]}
        onChange={(e) => onValueChange([Number(e.target.value), value[1]])}
        className="w-full" />
      <input type="range" min={min} max={max} step={step} value={value[1]}
        onChange={(e) => onValueChange([value[0], Number(e.target.value)])}
        className="w-full" />
    </div>
  );
}
