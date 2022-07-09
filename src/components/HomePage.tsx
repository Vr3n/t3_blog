import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HomePage = () => {
  return (
    <motion.main
      layoutId="homePage"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -50 },
        exit: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="container m-auto"
    >
      {/* Hero Section */}
      <div className="flex flex-col h-full m-6 gap-6 justify-items-center items-center">
        <h1 className="text-8xl leading-tight text-clip font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
          T3Blog
        </h1>{" "}
        <h2 className="text-5xl">
          created with{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            T3
          </span>{" "}
          stack
        </h2>
        {/* CTA Section */}
        <div className="flex justify-around gap-5 mt-3">
          <Link href="/blog">
            <motion.button
              className="text-white font-bold rounded px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500
          transition delay-150
          shadow-md shadow-orange-500/50
          hover:scale-110 hover:text-white
          hover:shadow-lg hover:shadow-orange-500/80
          active:scale-95 active:shadow-sm active:shadow-orange-500/30
          "
            >
              Explore Blogs
            </motion.button>
          </Link>
          <motion.button
            className="
            transition delay-150
            border rounded px-6 py-3 
          border-orange-500
          hover:bg-orange-500
          hover:scale-110 hover:text-white
          shadow-md shadow-orange-500/50
          hover:shadow-lg hover:shadow-orange-500/80
          active:scale-95 active:shadow-sm active:shadow-orange-500/30
          "
          >
            About
          </motion.button>
        </div>
        {/* CTA Section */}
        {/* Framework Logos Section */}
        <div className="flex gap-8 mt-3">
          <Image
            src="/svg/next-js.svg"
            alt="next.js logo"
            width="64"
            height="64"
          />
          <Image
            src="/svg/prisma-3.svg"
            alt="prisma logo"
            width="64"
            height="64"
          />
          <Image
            src="/svg/trpc_logo.svg"
            alt="trpc logo"
            width="64"
            height="64"
          />
          <Image
            src="/images/next_auth_logo.png"
            alt="Next Auth logo"
            width="64"
            height="64"
          />
        </div>
        {/* Framework Logos Section */}
      </div>
      {/* Hero Section */}
    </motion.main>
  );
};

export default HomePage;
