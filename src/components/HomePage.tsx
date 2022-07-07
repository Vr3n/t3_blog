import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <main className="container m-auto">
      {/* Hero Section */}
      <div className="h-full flex flex-col h-full m-6 gap-6 justify-items-center items-center">
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
          <button className="text-white font-bold rounded px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500
          transition delay-150
          shadow-md shadow-orange-500/50
          hover:scale-105 hover:shadow-lg hover:shadow-orange-500/80
          ">
            Explore Blogs
          </button>
          <button
            className="
            transition delay-150
            border rounded px-6 py-3 
          border-orange-500
          hover:bg-orange-500
          shadow-md shadow-orange-500/50
          hover:scale-105 hover:shadow-lg hover:shadow-orange-500/80
          "
          >
            About
          </button>
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
    </main>
  );
};

export default HomePage;
