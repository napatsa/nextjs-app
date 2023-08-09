import { ErrorBoundary } from 'react-error-boundary';
import Number from '@/app/components/number';

export default function Dashboard() {
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
