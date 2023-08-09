'use client';

import { useEffect } from 'react';

export default function Number() {
  useEffect(() => {
    throw Error('Unable to request data for this resource');
  }, []);

  return <div className="bg-blue-300 p-96">99</div>;
}
