import {ComponentStory, ComponentMeta} from "@storybook/react";
import React from "react";

import {ModalLinkSent} from "./ModalLinkSent";

export default {
  title: "atoms/ModalLinkSent",
  component: ModalLinkSent,
  argTypes: {
  },
  args: {
  },
} as ComponentMeta<typeof ModalLinkSent>;

const Template: ComponentStory<typeof ModalLinkSent> = (args) => (
  <div css={{width: "100%", height: "100vh"}}>
    <ModalLinkSent {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  
};