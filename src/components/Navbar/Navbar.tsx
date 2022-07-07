import Link from "next/link";
import { useRouter } from "next/router";

const NavItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Blogs",
    path: "/blog",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "About",
    path: "/about",
  },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
      <div className=" flex justify-between container mx-auto">
        <Link href="/">
          <h2 className="cursor-pointer text-2xl text-white font-bold">
            T3Blog
          </h2>
        </Link>
        <ul className="flex text-white self-center flex-grow-1 gap-8">
          {NavItems.map((item, idx) => (
            <Link href={item.path} key={idx}>
              <p
                className={`hover:text-black  text-white cursor-pointer transition-colors delay-100 ease-in ${
                  router.asPath === item.path ? "text-black" : "text-white"
                }`}
              >
                {item.name}
              </p>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
