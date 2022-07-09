import { NextPage } from "next";
import Head from "next/head";
import Card from "../components/Card/Card";
import Navbar from "../components/Navbar/Navbar";
import { motion } from "framer-motion";

const Blog: NextPage = () => {
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
          exit: { opacity: 0, y: 50 }
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="container m-auto"
      >
        <section className="flex flex-col gap-3">
          <h1 className="text-5xl m-auto mt-5 leading-tight text-clip font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            Blogs
          </h1>
          <Card />
        </section>
      </motion.main>
    </>
  );
};

export default Blog;
