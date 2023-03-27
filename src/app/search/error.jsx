'use client';

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-5">
      <h1 className="text-3xl text-white">Something went wrong</h1>
      <button className="btn-pink" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
