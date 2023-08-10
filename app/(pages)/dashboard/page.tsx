'use client';

import { useEffect, useMemo } from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import Number from '@/app/components/number';
import { useBoundStore } from '@/app/store';

export default function Dashboard() {
  const fishes = useBoundStore((state) => state.fishes);
  const [loading, eatFish] = useBoundStore((state) => [
    state.loading,
    state.eatFish,
  ]);

  useEffect(() => {
    eatFish();
  }, []);

  useMemo(() => {
    console.log(loading);
  }, [loading]);

  return (
    <div className="bg-pink-300 w-fit">
      <div>Dashboard</div>
      <br />
      <div>
        <ErrorBoundary fallback={<div>...error</div>}>
          <Number />
        </ErrorBoundary>
      </div>
    </div>
  );
}
