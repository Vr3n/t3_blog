import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>T3 Blog</title>
        <meta name="description" content="Blogs created by user" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1>This is Blog Page</h1>
    </>
  );
};

export default Blog;
