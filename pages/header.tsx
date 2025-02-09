
import React from 'react';
import Link from 'next/link';
const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4 px-8">
      <div className="flex justify-between items-center">
        {/* Website Title */}
        <h1 className="text-2xl font-semibold">My Website</h1>
        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <span className="text-white hover:underline">Home</span>
              </Link>
            </li>
            <li>
              <Link href="my-app/src/pages/create.tsx">
                <span className="text-white hover:underline">Create</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard">
                <span className="text-white hover:underline">Dashboard</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;