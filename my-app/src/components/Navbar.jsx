import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-green-600">
          Agrove
        </Link>
        <ul className="flex gap-8 items-center">
          <li>
            <Link to="/" className="text-gray-700 hover:text-green-600 font-medium transition">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/activities" className="text-gray-700 hover:text-green-600 font-medium transition">
              ACTIVITY & TASK LOGS
            </Link>
          </li>
          <li>
            <Link to="/export" className="text-gray-700 hover:text-green-600 font-medium transition">
              DATA EXPORT
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="text-gray-700 hover:text-green-600 font-medium transition">
              ANALYTICS DASHBOARD
            </Link>
          </li>
          <li>
            <Link to="/advisory" className="text-gray-700 hover:text-green-600 font-medium transition">
              ADVISORY HUB
            </Link>
          </li>
          <li>
            <Link to="/profile" className="text-gray-700 hover:text-green-600 font-medium transition">
              FARMER PROFILE
            </Link>
          </li>
          <li>
            <Link to="/login" className="bg-green-600 text-white px-6 py-2 rounded font-medium hover:bg-green-700 transition">
              LOGIN
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
