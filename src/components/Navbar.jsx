import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="bg-gray-800">
            <nav>
                <ul className="flex justify-end space-x-4 p-2">
                    <li className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                        <Link to="/Owner">Owner</Link>
                    </li>
                </ul>
            </nav>
        </div> 
    )
  }