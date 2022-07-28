import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TicketCard } from ".";

export default {
  title: "Components/Ticket Card",
  component: TicketCard,
} as ComponentMeta<typeof TicketCard>;

const Template: ComponentStory<typeof TicketCard> = () => <TicketCard />;

export const Primary = Template.bind({});
