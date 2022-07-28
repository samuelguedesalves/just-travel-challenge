import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Checkbox } from ".";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Checkbox",
};
