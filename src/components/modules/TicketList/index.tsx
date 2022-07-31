import React from "react";
import { FiGrid, FiMenu } from "react-icons/fi";
import { SearchBar } from "../../elements/SearchBar";
import { TicketCard } from "../../elements/TicketCard";
import { TicketFilter } from "../../elements/TicketFilter";
import { MainSection, SearchSection, ViewModeButton } from "./styles";

export function TicketList() {
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
            <TicketCard
              className="ticket-card"
              title="Lorem ipsum dolor amet consectetur"
              local="GetYourGuide Tours & Tickets GmbH"
              totalPrice={235128}
              sellingPrice={139128}
              imageUrl="https://loremflickr.com/cache/resized/5652_30294779656_d31e4b5db2_b_640_480_nofilter.jpg"
            />
            <TicketCard
              className="ticket-card"
              title="Lorem ipsum dolor amet consectetur"
              local="GetYourGuide Tours & Tickets GmbH"
              totalPrice={235128}
              sellingPrice={139128}
              imageUrl="https://loremflickr.com/cache/resized/5652_30294779656_d31e4b5db2_b_640_480_nofilter.jpg"
            />
            <TicketCard
              className="ticket-card"
              title="Lorem ipsum dolor amet consectetur"
              local="GetYourGuide Tours & Tickets GmbH"
              totalPrice={235128}
              sellingPrice={139128}
              imageUrl="https://loremflickr.com/cache/resized/5652_30294779656_d31e4b5db2_b_640_480_nofilter.jpg"
            />
            <TicketCard
              className="ticket-card"
              title="Lorem ipsum dolor amet consectetur"
              local="GetYourGuide Tours & Tickets GmbH"
              totalPrice={235128}
              sellingPrice={139128}
              imageUrl="https://loremflickr.com/cache/resized/5652_30294779656_d31e4b5db2_b_640_480_nofilter.jpg"
            />
            <TicketCard
              className="ticket-card"
              title="Lorem ipsum dolor amet consectetur"
              local="GetYourGuide Tours & Tickets GmbH"
              totalPrice={235128}
              sellingPrice={139128}
              imageUrl="https://loremflickr.com/cache/resized/5652_30294779656_d31e4b5db2_b_640_480_nofilter.jpg"
            />
          </div>
        </div>
      </MainSection>
    </section>
  );
}
