import { Link } from "react-router-dom";
import useUserRole from "../hooks/useUserRole";

export default function Header() {
  const { role } = useUserRole();

  return (
    <>
		<header className="bg-gray-800 text-white p-6">	
			<nav className="container mx-auto flex justify-between items-center">
				<h1 className="text-2xl font-bold">TASK MANAGEMENT</h1>
				<div className="space-x-4">
					<Link to="/" className="hover:text-gray-300">Home</Link>
					{role === "admin" && <Link to="/admin" className="hover:text-gray-300">Admin Panel</Link>}
				</div>
			</nav>
		</header>
    </>
  );
}