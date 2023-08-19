'use client';

import { QueryClient, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import Number from '@/app/components/number';
import { getTest } from '@/app/api/test';
import { useBoundStore } from '@/app/store';

export default function Dashboard() {
  const queryClient = useQueryClient();
  const fishes = useBoundStore((state) => state.fishes);
  const [bears, loading, { eatFish }] = useBoundStore((state) => [
    state.bears,
    state.loadingBear,
    state.actionsBear,
  ]);
  const [testId, setTestId] = useState(0);
  const { data, status, refetch, isFetching } = useQuery({
    queryKey: ['test'],
    queryFn: () => getTest(1),
    cacheTime: 0,
    retry: 0,
    enabled: false,
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
          refetch();
          // queryClient.invalidateQueries({ queryKey: ['test'] });
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
