import _ from "lodash";
import * as React from "react";
import { ListItem, Menu } from "..";

import style from "./style";
import { DropDownSelectorProps } from "./types";

const DropdownSelector: React.FC<DropDownSelectorProps> = ({
  choice = false,
  text = "Choose an item...",
  onChange = () => null,
  items = [],
  showId = false,
}) => {
  const [curChoice, setCurChoice] = React.useState<boolean | string>("");

  React.useEffect(() => {
    setCurChoice(choice);
  }, [choice]);

  const noteListSelection = (id: string) => {
    setCurChoice(id);
    onChange(id);
  };

  const chosenItem = curChoice
    ? items.filter((i) => i.id === curChoice)
    : [{ name: text }];

  return (
    <div data-testid="Components-DropDownSelector">
      <Menu
        label={chosenItem.length ? chosenItem[0].name : text}
        style={style.menu}
      >
        <div style={style.innerMenuContainer}>
          {items.map((itm) => (
            <ListItem key={itm.id} onClick={() => noteListSelection(itm.id)}>
              {showId ? `(${itm.id}) ` : null}
              {itm.name}
            </ListItem>
          ))}
        </div>
      </Menu>
    </div>
  );
};

export default DropdownSelector;
