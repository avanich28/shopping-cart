import { useRouteError } from 'react-router-dom';

function ErrorFallBack({ resetErrorBoundary }) {
  const error = useRouteError();
  return (
    <div>
      <p>{error.data || error.message}</p>
      <button onClick={resetErrorBoundary}>Go back</button>
    </div>
  );
}

export default ErrorFallBack;
