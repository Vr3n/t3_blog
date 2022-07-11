import { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import Card from "../components/Card/Card";
import { motion } from "framer-motion";
import AccessDenied from "../components/AccessDenied";

const Blog: NextPage = () => {
  const { data, status } = useSession();

  if (status === "loading") {
    return <div>Loading ...</div>;
  }

  if (status === "authenticated") {
    return (
      <>
        <Head>
          <title>T3 Blog</title>
          <meta name="description" content="Blogs created by user" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <motion.main
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
          className="container m-auto"
        >
          <section className="flex flex-col gap-3">
            <h1 className="text-5xl m-auto mt-5 leading-tight text-clip font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Hello {data.user?.name}, Explore Blogs
            </h1>
            <Card />
          </section>
        </motion.main>
      </>
    );
  } else {
    return (
      <>
        <AccessDenied />
      </>
    );
  }
};

export default Blog;
