import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TicketList } from ".";

export default {
  title: "Components/TicketList",
  component: TicketList,
} as ComponentMeta<typeof TicketList>;

const Template: ComponentStory<typeof TicketList> = () => <TicketList />;

export const Primary = Template.bind({});
