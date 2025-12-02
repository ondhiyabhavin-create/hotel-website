import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Hotel Not Found</h2>
        <p className="text-gray-600 mb-8">
          The hotel you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary-700 text-white py-3 px-8 rounded-2xl font-semibold hover:bg-primary-800 transition-all duration-200 hover:scale-105 active:scale-95"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}


