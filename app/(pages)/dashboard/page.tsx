'use client';

import { useEffect, useMemo, useState } from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import Number from '@/app/components/number';
import { getTest } from '@/app/api/test';
import { useBoundStore } from '@/app/store';
import { useQuery } from '@tanstack/react-query';

export default function Dashboard() {
  const fishes = useBoundStore((state) => state.fishes);
  const [bears, loading, { eatFish }] = useBoundStore((state) => [
    state.bears,
    state.loadingBear,
    state.actionsBear,
  ]);
  const [testId, setTestId] = useState(0);
  const { data, status, refetch } = useQuery({
    queryKey: ['test', testId],
    queryFn: () => getTest(testId),
    enabled: testId > 0,
  });

  useEffect(() => {
    eatFish();
  }, []);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  useEffect(() => {
    console.log(status);
  }, [status]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="bg-pink-300 w-fit">
      <div
        onClick={() => {
          setTestId((prev) => prev + 1);
          // refetch();
        }}
        className="cursor-pointer"
      >
        Dashboard
      </div>
      <br />
      <div>
        <ErrorBoundary fallback={<div>...error</div>}>
          <Number />
        </ErrorBoundary>
      </div>
    </div>
  );
}
