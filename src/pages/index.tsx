import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/modules/Footer";
import { Header } from "../components/modules/Header";
import { Suggestions } from "../components/modules/Suggestions";
import { TicketList } from "../components/modules/TicketList";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Just Travel</title>
        <meta name="description" content="Just travel challenge" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Header />
      <TicketList />
      <Suggestions />
      <Footer />
    </div>
  );
};

export default Home;
