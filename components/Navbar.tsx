"use client";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
        <div className="grid grid-cols">
            <div>
                <h1 className="text-white text-2xl font-bold">Easion AI News Assistant</h1>
            </div>
            <div>
                <ul className="flex space-x-4">
                    <li>
                    <Link href="/" className="text-white hover:text-gray-400">
                        Home
                    </Link>
                    </li>
                    <li>
                    <Link href="/about" className="text-white hover:text-gray-400">
                        Calender of Events
                    </Link>
                    </li>
                    <li>
                    <Link href="/contact" className="text-white hover:text-gray-400">
                        Poster
                    </Link>
                    
                    </li>
                    <li>
                    <Link href="/contact" className="text-white hover:text-gray-400">
                        Thumbnail
                    </Link>
                    </li>
                </ul>
            </div>
      </div>
    </nav>
  );
}