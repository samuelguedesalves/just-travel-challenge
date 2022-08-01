import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

import { Footer } from "../../components/modules/Footer";
import { Header } from "../../components/modules/Header";
import { Suggestions } from "../../components/modules/Suggestions";
import { TicketDetails } from "../../components/modules/TicketDetails";
import { fetchTicket } from "../../services/fetchTickets";
import { useAppDispatch, useAppSelector } from "../../services/redux/hooks";
import { setTicket } from "../../services/redux/ticketSlice";

const Ticket: NextPage = () => {
  const dispatch = useAppDispatch();
  const ticket = useAppSelector((state) => state.ticket);

  const router = useRouter();
  const { id } = router.query;

  const getTicket = useCallback(async () => {
    if (typeof id == "string") {
      const responese = await fetchTicket(id as string);
      dispatch(setTicket(responese));
    }
  }, [id]);

  useEffect(() => {
    if (!ticket) {
      getTicket();
    }
  }, [getTicket, ticket]);

  return (
    <div>
      <Head>
        <title>Just Travel</title>
        <meta name="description" content="Just travel challenge" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <TicketDetails />
      <Suggestions />
      <Footer />
    </div>
  );
};

export default Ticket;
