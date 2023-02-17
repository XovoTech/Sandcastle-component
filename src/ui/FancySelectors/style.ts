import { CSSProperties } from "react";
import styled from "styled-components";

const style: {
  menu: CSSProperties;
  innerMenuContainer: CSSProperties;
  multiSelectorContainer: CSSProperties;
  noItemsContainer: CSSProperties;
  cellStyle: CSSProperties;
  cellContainer: CSSProperties;
  cell: CSSProperties;
  fontIcon: CSSProperties;
} = {
  menu: { width: "100%" },
  innerMenuContainer: { height: 200, overflowY: "scroll" },
  multiSelectorContainer: { maxHeight: 250 },
  noItemsContainer: { padding: 30, textAlign: "center", width: "100%" },
  cellStyle: { height: 65 },
  cellContainer: { padding: 10 },
  cell: { width: "100%", textAlign: "left" },
  fontIcon: { marginTop: 0, marginRight: 10 },
};

export const CellStyle = styled.div`
  text-align: left;
  border: 1px solid #ccc;
  border-radius: 2px;
  cursor: pointer;
  margin: 5px;
  position: relative;
  &:hover {
    background-color: #eee;
    color: black;
  }
`;

export default style;
