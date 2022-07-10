import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Avatar from "../Avatar/Avatar";

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
    name: "About",
    path: "/about",
  },
];

const Navbar = () => {
  const router = useRouter();
  const { data } = useSession();

  return (
    <nav className="p-4 shadow-md">
      <div className="flex justify-between container m-auto">
        <Link href="/">
          <h2 className="cursor-pointer text-2xl font-bold">T3Blog</h2>
        </Link>
        <ul className="flex self-center flex-grow-1 gap-8">
          {NavItems.map((item, idx) => (
            <Link href={item.path} key={idx}>
              <p
                className={`hover:text-sky-400  cursor-pointer transition-colors delay-100 ease-in ${
                  router.asPath === item.path && "text-sky-400 font-bold"
                }`}
              >
                {item.name}
              </p>
            </Link>
          ))}
        </ul>
        <div className="relative">
          <Avatar session={data} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
