import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-around items-center h-15vh bg-white">
        <header>
          <h1 className="text-3xl font-semibold">Project</h1>
        </header>
        <ul className="flex">
          <Link href="/">
            <li className="hover:opacity-80 ease-in-out ">Home</li>
          </Link>
          <Link href="/">
            <li className="hover:opacity-80 ease-in-out ">Project</li>
          </Link>
          <Link href="/">
            <li className="hover:opacity-80 ease-in-out ">Services</li>
          </Link>
          <Link href="/">
            <li className="hover:opacity-80 ease-in-out ">About Us</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
