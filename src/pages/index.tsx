import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../components/HomePage";
import Navbar from "../components/Navbar/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>T3 Blog</title>
        <meta name="description" content="A blog created using T3 stack." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
