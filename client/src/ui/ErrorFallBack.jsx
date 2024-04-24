function ErrorFallBack({ error, resetErrorBoundary }) {
  console.log(error);
  return (
    <div>
      <p>{error}</p>
      <button onClick={resetErrorBoundary}>Go back</button>
    </div>
  );
}

export default ErrorFallBack;
