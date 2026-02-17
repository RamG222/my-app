import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">Ram</h1>
        <nav>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li className="hover:text-blue-600 cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              About
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center p-10 bg-white rounded-2xl shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            This is Main Content
          </h2>
          <p className="text-gray-600">
            Welcome to your beautifully styled Next.js page 🚀
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <h3 className="text-sm"></h3>
      </footer>
    </div>
  );
}
