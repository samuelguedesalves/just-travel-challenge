import type { NextPage } from "next";
import { useEffect } from "react";
import Head from "next/head";

import { setTickets, Ticket } from "../services/redux/ticketSlice";
import { useAppDispatch, useAppSelector } from "../services/redux/hooks";
import { fetchTickets } from "../services/fetchTickets";

import { Footer } from "../components/modules/Footer";
import { Header } from "../components/modules/Header";
import { Suggestions } from "../components/modules/Suggestions";
import { TicketList } from "../components/modules/TicketList";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getTickets() {
      const tickets = await fetchTickets();

      dispatch(setTickets(tickets));
    }

    getTickets();
  }, []);

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
