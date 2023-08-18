'use client';

import { QueryClient, useQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import Number from '@/app/components/number';
import { getTest } from '@/app/api/test';
import { useBoundStore } from '@/app/store';

export default function Dashboard() {
  const queryClient = new QueryClient();
  const fishes = useBoundStore((state) => state.fishes);
  const [bears, loading, { eatFish }] = useBoundStore((state) => [
    state.bears,
    state.loadingBear,
    state.actionsBear,
  ]);
  const [testId, setTestId] = useState(0);
  const { data, status, refetch } = useQuery({
    queryKey: ['test'],
    queryFn: () => getTest(1),
    refetchInterval: 10000,
    cacheTime: 0,
    retry: 0,
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
          queryClient.invalidateQueries({ queryKey: ['test'] });
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
