import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: "Button",
  type: "primary",
  size: "medium",
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: "Button",
  type: "secondary",
  size: "medium",
};

export const Disabled = Template.bind({});

Disabled.args = {
  children: "Button",
  type: "disabled",
  size: "medium",
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  children: "Button",
  type: "primary",
  size: "medium",
  icon: <FiArrowRight />,
};
