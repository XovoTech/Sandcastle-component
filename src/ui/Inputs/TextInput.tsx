import { get } from "lodash";
import React, { useState, useEffect, useRef } from "react";
import { FontIcon } from "../index";
import inputStyle from "./style";
import { TextInputProps } from "./Inputs.types";
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
    size === "large" ? inputStyle.textInputLarge : inputStyle.textInput;
  const sizeLabelStyle =
    size === "large"
      ? inputStyle.textInputLabelLarge
      : inputStyle.textInputLabel;
  const iconLeftInput = iconLeft ? { paddingLeft: 50 } : null;
  const iconRightInput = iconRight ? {} : null;
  const display = get(style, "display", "block");

  return (
    <div
      data-testid="Components-TextInput"
      style={{ ...inputStyle.container, display }}
    >
      {label && curLabel && (
        <span
          onClick={() => inputRef.current?.focus()}
          style={{ ...sizeLabelStyle, ...labelStyle }}
        >
          {label}
        </span>
      )}

      {iconLeft && (
        <FontIcon style={get(style, "iconLeft", inputStyle.iconLeft)}>
          {iconLeft}
        </FontIcon>
      )}

      {iconRight && (
        <FontIcon style={get(style, "iconRight", inputStyle.iconRight)}>
          {iconRight}
        </FontIcon>
      )}

      {multiline ? (
        <textarea
          style={{
            ...sizeInputStyle,
            ...iconLeftInput,
            ...iconRightInput,
            ...style,
          }}
          value={curValue}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          onClick={handleClick}
          onKeyUp={onKeyUp as any}
          // type={type}
          ref={inputRef as any}
        />
      ) : (
          <input
            style={{
              ...sizeInputStyle,
              ...iconLeftInput,
              ...iconRightInput,
              ...style,
            }}
            value={curValue}
            placeholder={placeholder}
            onChange={handleChange}
            onKeyUp={onKeyUp as any}
            onBlur={handleBlur}
            onClick={handleClick}
            type={type}
            ref={inputRef as any}
          />
        )}
    </div>
  );
};

export default TextInput;
