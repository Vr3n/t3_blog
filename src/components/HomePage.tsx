import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <main className="container">
      {/* Hero Section */}
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-8xl text-clip font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
          T3Blog
        </h1>{" "}
        <h2 className="text-5xl mt-3">
          created with{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            T3
          </span>{" "}
          stack
        </h2>
        {/* Framework Logos Section */}
        <div className="flex gap-6">
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
