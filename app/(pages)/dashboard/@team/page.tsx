'use client';

import { useEffect } from 'react';

export default function Ana() {
  useEffect(() => {
    throw Error('Unable to request data for this resource');
  }, []);

  return <div className="m-10 bg-purple-300 w-40 h-40"></div>;
}
