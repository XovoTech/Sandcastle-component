import * as React from "react";
import { Grid, Cell } from "./";

export default {
  title: "Components/Basic UI/Grid",
  component: Grid,
};

export const Default: any = () => (
  <Grid>
    <Cell align="center">
      <div>This is a test #1</div>
    </Cell>
    <Cell align="center">
      <div>This is a test #2</div>
    </Cell>
    <Cell align="center">
      <div>This is a test #3</div>
    </Cell>
  </Grid>
);

Default.story = {
  parameters: {
    jest: ["Grid"],
  },
};
