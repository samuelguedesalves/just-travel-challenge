import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import Head from "next/head";

import { setTickets } from "../services/redux/ticketSlice";
import { useAppDispatch, useAppSelector } from "../services/redux/hooks";
import { fetchTickets } from "../services/fetchTickets";

import { Footer } from "../components/modules/Footer";
import { Header } from "../components/modules/Header";
import { Suggestions } from "../components/modules/Suggestions";
import { TicketList } from "../components/modules/TicketList";

const Home: NextPage = () => {
  const [shouldFetch, setShouldFetch] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const tickets = useAppSelector((state) => state.tickets);

  const getTickets = useCallback(async () => {
    if (tickets.length == 0) {
      const response = await fetchTickets();

      dispatch(setTickets(response));

      setShouldFetch(false);
    }
  }, [dispatch, tickets.length]);

  useEffect(() => {
    if (shouldFetch) {
      getTickets();
    }
  }, [getTickets, shouldFetch]);

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
