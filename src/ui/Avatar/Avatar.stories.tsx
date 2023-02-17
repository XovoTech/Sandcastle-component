import * as React from "react";
import gravatar from "gravatar";
import { Avatar, ListItem, MenuButton } from "../";

import { FixedPositions } from "../types";

export default {
  title: "Components/Basic UI/Avatar",
  component: Avatar,
};

export const Default: any = () => (
  <div data-testid="Components-Avatar">
    <Avatar
      src={gravatar.url("kjgraham@gmail.com")}
      role="presentation"
      alt="Your Avatar"
    />
  </div>
);

export const AvatarButton: any = () => (
  <MenuButton
    position={FixedPositions.BOTTOM_RIGHT}
    icon={
      <Avatar
        src={gravatar.url("kjgraham@gmail.com")}
        role="presentation"
        alt="Your Avatar"
      />
    }
  >
    <ListItem>Update My Profile</ListItem>
    <ListItem>Manage My Domains</ListItem>
    <ListItem>3rd Party Integrations</ListItem>
    <ListItem>Sign Out</ListItem>
  </MenuButton>
);

Default.story = {
  parameters: {
    jest: ["Avatar"],
  },
};
