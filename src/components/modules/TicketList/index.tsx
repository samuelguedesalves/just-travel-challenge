import React, { useState } from "react";
import { Pagination, Select } from "antd";
import { FiGrid, FiMenu } from "react-icons/fi";

import { useAppDispatch, useAppSelector } from "../../../services/redux/hooks";

import { SearchBar } from "../../elements/SearchBar";
import { TicketCard } from "../../elements/TicketCard";
import { TicketFilter } from "../../elements/TicketFilter";

import { MainSection, SearchSection, ViewModeButton } from "./styles";
import { useRouter } from "next/router";
import { setTicket, Ticket } from "../../../services/redux/ticketSlice";

const { Option } = Select;

export function TicketList() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const tickets = useAppSelector((state) => state.tickets);
  const dispatch = useAppDispatch();

  function handlePageChange(page: number) {
    setCurrentPage(page);
  }

  function takePageTickets() {
    const pageSize = 10;

    return [...tickets].slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );
  }

  function goToTicket(ticket: Ticket) {
    dispatch(setTicket(ticket));
    router.push(`/ticket/${ticket.id}`);
  }

  return (
    <section>
      <SearchSection>
        <div className="content">
          <SearchBar />

          <div className="view-mode">
            <ViewModeButton>
              <FiMenu size={24} />
            </ViewModeButton>

            <ViewModeButton type="unactived">
              <FiGrid size={24} />
            </ViewModeButton>
          </div>
        </div>
      </SearchSection>

      <MainSection>
        <div className="content">
          <TicketFilter />

          <div className="ticket-listage">
            {takePageTickets().map((ticket, index) => {
              const price = parseInt(ticket.price.replace(".", ""));

              return (
                <TicketCard
                  key={index}
                  className="ticket-card"
                  title={ticket.name}
                  local={ticket.location}
                  totalPrice={235128}
                  sellingPrice={price}
                  imageUrl={ticket.images}
                  onClick={() => goToTicket(ticket)}
                />
              );
            })}

            <div className="pagination-container">
              <Pagination
                onChange={handlePageChange}
                defaultCurrent={1}
                current={currentPage}
                pageSize={10}
                total={tickets.length}
              />

              <Select
                defaultValue={1}
                value={currentPage}
                style={{ width: 120 }}
                onChange={handlePageChange}
              >
                {(() => {
                  const pageAmount = tickets.length / 10;

                  let options = [];

                  let counter = 0;

                  while (counter < pageAmount) {
                    options.push(
                      <Option value={counter + 1} key={counter + 1}>
                        {counter + 1}
                      </Option>
                    );

                    counter++;
                  }

                  return options;
                })()}
              </Select>

              <span className="total-result">
                {`${tickets.length} Resultados`}
              </span>
            </div>
          </div>
        </div>
      </MainSection>
    </section>
  );
}
