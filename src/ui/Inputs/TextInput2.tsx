import { get } from "lodash";
import React, { useState, useEffect, useRef } from "react";

import { FontIcon } from "../index";
import inputStyle from "./style";
import { TextInputProps } from "./Inputs.types";

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

/**
 * Text fields allow users to input, edit, and select text
 * @param {object} props The props
 * @returns {function} The component
 */
const TextInput: React.FC<TextInputProps> = ({
  value = "",
  placeholder = "",
  type = "",
  focusOnMount = false,
  selectOnMount = false,
  format = false,
  size = "small",
  onChange = () => null,
  onKeyUp = () => null,
  onClick = () => null,
  onBlur = () => null,
  focusOnClick = false,
  iconLeft = "",
  iconRight = "",
  style = {},
  label = "",
  labelStyle = {},
  multiline = false,
  variant = "outlined",
  transparent = false,
}) => {
  const [curValue, setCurValue] = useState<string>(value);
  const [curLabel, setLabel] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    if (focusOnMount) inputRef.current?.focus();
    if (selectOnMount) inputRef.current?.select();
    setCurValue(value);
  }, []);

  useEffect(() => {
    setCurValue(value);
  }, [value]);

  const doFilter = (value: string) => {
    if (format === "currency")
      return parseFloat(value.replace(/[^0-9.]/g, ""))
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,");

    return value;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = event.target;
    const showLabel = size === "large" ? false : curLabel;
    setCurValue(value);
    setLabel(showLabel);
    onChange(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = doFilter(event.target.value);
    setCurValue(value);
    onBlur(event);
  };

  const handleClick = (event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (focusOnClick) inputRef.current?.focus();
    onClick(event);
  };

  const sizeInputStyle =
    size === "large" ? inputStyle.textInputLarge : {};

  const display = get(style, "display", "block");

  const classes = {
    transparent: {
      '& label.Mui-focused': {
        color: 'transparent',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'transparent',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'transparent',
        },
        '&:hover fieldset': {
          borderColor: 'transparent',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'transparent',
        },
      },
    },
  }

  return (
    <div
      data-testid="Components-TextInput"
      style={{ ...inputStyle.container, display, ...(label && curLabel) ? { marginTop: 30, marginBottom: 5 } : {} }}
    >
      <TextField
        variant={size === "large" ? 'standard' : variant}
        style={{
          ...sizeInputStyle,
          // transparent ? ...(classes.transparent) : {},
          // ...iconLeftInput,
          // ...iconRightInput,
          ...style,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {iconLeft && <FontIcon>{iconLeft}</FontIcon>}
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {iconRight && <FontIcon>{iconRight}</FontIcon>}
            </InputAdornment>
          ),
        }}
        value={curValue}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyUp={onKeyUp as any}
        onBlur={handleBlur}
        onClick={handleClick as any}
        type={type}
        inputRef={inputRef}
        autoFocus={focusOnMount}
        multiline={multiline}
        rows={4}
        label={label}
        fullWidth
      />

    </div>
  );
};

export default TextInput;
