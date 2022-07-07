import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../components/HomePage";
import Navbar from "../components/Navbar/Navbar";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from Viren" }]);

  return (
    <>
      <Head>
        <title>T3 Blog</title>
        <meta name="description" content="A blog created using T3 stack." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HomePage />
    </>
  );
};

export default Home;
