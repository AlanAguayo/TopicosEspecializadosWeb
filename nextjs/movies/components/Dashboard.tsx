import Link from "next/link"

const Dashboard =()=>{
    return(
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4">
                <li className="text-white">
                    <Link href={"/"}>Home</Link>
                </li>
                <li className="text-white">
                    <Link href={"/categories"}>Categorias</Link>
                </li>
                <li className="text-white">
                    <Link href={"/movies/popular"}>Popular</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Dashboard;