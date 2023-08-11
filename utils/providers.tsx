'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import React from 'react';

function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(new QueryClient());

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default Providers;