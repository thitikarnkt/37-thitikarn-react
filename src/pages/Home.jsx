import { Link, Outlet } from "react-router-dom";

export default function Home() {
    return (
        <>
        <div>
            <h1 className="text-3xl font-bold underline">
                Generation Thailand
            </h1>
            <p> React - Assessment </p>
        </div>

        <div className="flex space-x-4 py-4">
            <Link to="User"className="text-gray-700 hover:text-gray-900"><a href="src/pages/User.jsx">User Home Section</a></Link>
            <Link to="Admin"className="text-gray-700 hover:text-gray-900"><a href="src/pages/Admin.jsx">Admin Home Section</a></Link>
        </div>
        <Outlet/>
        </>
    )
}