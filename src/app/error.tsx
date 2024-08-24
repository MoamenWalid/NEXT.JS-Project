'use client';

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  return (
    <div>
      { error.message }
      <button onClick={ reset }>Reset</button>
    </div>
  );
}

export default ErrorPage;
