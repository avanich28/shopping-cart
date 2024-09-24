import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError();

  return (
    <div className="text-xs font-normal normal-case text-red-600">
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      <LinkButton to="/">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
