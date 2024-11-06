import { Link, Outlet } from "react-router-dom";


export function Title({subtitle}) {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-8">Generation Thailand</h1>
            <p className="text-4xl font-bold text-center my-8">{subtitle}</p>
        </div>
    )
}

export default function Home() {
    return (
        <>
        <Title subtitle={'React - Assessment'}/>
        <div className="flex space-x-60 py-6 justify-center">
            <Link to="User"className="font-bold text-gray-700 border p-2 rounded-md hover:text-gray-900"><a href="src/pages/User.jsx">User Home Section</a></Link>
            <Link to="Admin"className="font-bold text-gray-700 border p-2 rounded-md hover:text-gray-900"><a href="src/pages/Admin.jsx">Admin Home Section</a></Link>
        </div>
        <Outlet/>
        </>
    )
}