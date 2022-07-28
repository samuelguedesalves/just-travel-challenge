import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { SearchBar } from ".";

export default {
  title: "Components/SearchBar",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = () => <SearchBar />;

export const Primary = Template.bind({});
