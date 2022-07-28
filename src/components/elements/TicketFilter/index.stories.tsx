import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TicketFilter } from ".";

export default {
  title: "Components/TicketFilter",
  component: TicketFilter,
} as ComponentMeta<typeof TicketFilter>;

const Template: ComponentStory<typeof TicketFilter> = () => <TicketFilter />;

export const Primary = Template.bind({});
