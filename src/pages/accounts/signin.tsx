import { GetServerSideProps } from "next";
import { getProviders, signIn } from "next-auth/react";
import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Providers = {
  providers: {
    id: string;
    name: string;
    type: string;
    signinUrl: string;
    callbackUrl: string;
  };
};

const SignIn = ({ providers }: Providers) => {
  console.log(providers);
  return (
    <>
      <Head>
        <title>T3 Blog | Sign In</title>
        <meta name="description" content="Sign In" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.section
        layoutId="blog"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -50 },
          exit: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex flex-col h-[80vh] items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-5">
          Sign In to your Account
        </h2>
        {Object?.values(providers).map((provider: any) => (
          <div key={provider.name}>
            <button
              type="button"
              className={`text-white
          transition delay-150
            hover:scale-105 hover:shadow-xl hover:shadow-black shadow-lg shadow-black/60
            active:scale-95 active:shadow-black[70]
            
            ${
              provider.name.toLowerCase() === "github"
                ? "bg-[#24292F]"
                : "bg-sky-300"
            } focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2`}
              onClick={() =>
                signIn(provider.id, {
                  callbackUrl: "/blog",
                })
              }
            >
              <Image
                alt="provider.name logo"
                src={`/svg/${provider.name.toLowerCase()}.svg`}
                width="25"
                height="25"
              />
              <span className="ml-2">Sign in with {provider.name}</span>
            </button>
          </div>
        ))}
      </motion.section>
    </>
  );
};

export default SignIn;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();

  return {
    props: { providers },
  };
};
