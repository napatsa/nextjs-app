import { ErrorBoundary } from 'react-error-boundary';
import Number from '@/components/Number';

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
