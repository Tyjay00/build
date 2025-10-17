import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark-blue text-gray-400 py-8 border-t-4 border-brand-green">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} AWS Free Builder Labs. All Rights Reserved.</p>
        <p className="text-xs max-w-2xl mx-auto">
          Disclaimer: This is an independent, unofficial resource and is not affiliated with, endorsed by, or sponsored by Amazon Web Services (AWS) or Amazon.com.
        </p>
        <p className="mb-2">&copy;  Tyrone Joel.</p>
      </div>
    </footer>
  );
};