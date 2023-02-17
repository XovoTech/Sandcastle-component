import { find, has, omit, get } from "lodash";
import * as React from "react";
import { Cell, FontIcon, Grid, ListItem, MenuButton } from "..";

import style, { CellStyle } from "./style";
import { MultiSelectorProps } from "./types";

const MultiSelector: React.FC<MultiSelectorProps> = ({
  choice = false,
  onChange = () => null,
  items = [],
  columns = 3,
  showOptions = false,
}) => {
  const [curChoice, setCurChoice] = React.useState<any>("");

  const toggleSelect = (itm: any) => {
    if (curChoice) {
      const index = curChoice.findIndex((i: any) => i.id === itm.id);

      if (index > -1) {
        // remove it
        setCurChoice([
          ...curChoice.slice(0, index),
          ...curChoice.slice(index + 1),
        ]);
      }
    } else {
      setCurChoice([...curChoice, itm]);
    }
  };

  const toggleTrial = (itm: any) => {
    const item = curChoice.filter((i: any) => i.id === itm.id)[0];
    const newItem = has(item, "trial")
      ? omit(itm, "trial")
      : { ...itm, trial: { product_id: item.id } };

    const index = curChoice.findIndex((c:any) => c.id === item.id);
    const newChoice = [
      ...curChoice.slice(0, index),
      newItem,
      ...curChoice.slice(index + 1),
    ];

    setCurChoice(newChoice);
    onChange(newChoice);
  };

  const setStepNum = (itm: any) => {
    const item = curChoice.filter((i:any) => i.id === itm.id)[0];
    const step_num = window.prompt(
      "Set the Step Number",
      has(item, "step_num") ? item.step_num : 0
    );

    if (step_num) {
      const index = curChoice.findIndex((i: any) => i.id === itm.id);
      const updatedItem =
        step_num === "0" ? omit(itm, "step_num") : { ...itm, step_num };

      const newChoice = [
        ...curChoice.slice(0, index),
        updatedItem,
        ...curChoice.slice(index + 1),
      ];

      setCurChoice(newChoice);
      onChange(newChoice);
    }
  };

  const setPic = (itm: any) => {
    const item = curChoice.filter((i: any) => i.id === itm.id)[0];
    const image = window.prompt(
      "Please enter the URL of your image",
      get(item, "image", "")
    );

    if (image) {
      const index = curChoice.findIndex((i: any) => i.id === itm.id);
      const updatedItem = !image ? omit(itm, "image") : { ...itm, image };

      const newChoice = [
        ...choice?.toString()?.slice(0, index),
        updatedItem,
        ...choice?.toString()?.slice(index + 1),
      ];

      setCurChoice(newChoice);
      onChange(newChoice);
    }
  };

  return (
    <div data-testid="Components-MultiSelector">
      <Grid wrap justify="stretch" style={style.multiSelectorContainer}>
        {!items.length && (
          <div style={style.noItemsContainer}>
            No Items Found. Please Try Again
          </div>
        )}
        {items.map((itm) => {
          const isSelected = find(
            curChoice,
            (i) => parseInt(i.id, 10) === parseInt(itm.id, 10)
          );
          const isTrial = find(
            curChoice,
            (i) =>
              parseInt(i.id, 10) === parseInt(itm.id, 10) && has(i, "trial")
          );

          return (
            <Cell
              style={{ width: `${100 / columns}%` }}
              key={itm.id}
              onClick={() => toggleSelect(itm)}
            >
              <CellStyle style={style.cellStyle}>
                <Grid justify="space-between" style={style.cellContainer}>
                  <Cell>
                    <FontIcon style={style.fontIcon}>
                      {isSelected ? "check_circle" : "add_circle_outline"}
                    </FontIcon>
                  </Cell>
                  <Cell style={style.cell}>{itm.name}</Cell>
                  {showOptions ? (
                    <Cell onClick={(e) => e.stopPropagation()}>
                      <MenuButton icon="more_vert">
                        <ListItem
                          onClick={() => {
                            toggleTrial(itm);
                          }}
                        >
                          {!isTrial
                            ? `Process as a Trial`
                            : `Do not process as a trial`}
                        </ListItem>
                        <ListItem onClick={() => setStepNum(itm)}>
                          Set the Funnel 'Step Number'
                        </ListItem>
                        <ListItem onClick={() => setPic(itm)}>
                          Set the Product's Picture
                        </ListItem>
                      </MenuButton>
                    </Cell>
                  ) : null}
                </Grid>
              </CellStyle>
            </Cell>
          );
        })}
      </Grid>
    </div>
  );
};

export default MultiSelector;
