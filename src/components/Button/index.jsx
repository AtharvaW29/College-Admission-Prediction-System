import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder38: "rounded-[38px]",
  RoundedBorder50: "rounded-[50px]",
  RoundedBorder10: "rounded-[10px]",
};
const variants = {
  OutlineBlack9007f: "bg-bluegray_500 shadow-bs1 text-white_A700",
  FillBluegray500: "bg-bluegray_500 text-gray_300",
  OutlineBlack9007f_1: "bg-bluegray_500 shadow-bs text-white_A700",
  OutlineGreen800:
    "bg-green_A100 border border-green_800 border-solid text-light_green_A700",
  OutlineRed900: "bg-red_200 border border-red_900 border-solid text-red_900",
  OutlineGreen801:
    "bg-green_A101 border border-green_801 border-solid text-light_green_900",
  OutlineRedA701:
    "bg-deep_orange_100 border border-red_A701 border-solid text-red_A700",
};
const sizes = {
  sm: "p-2",
  md: "p-[11px]",
  lg: "p-[22px] sm:px-5",
  xl: "p-[25px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "CircleBorder38",
    "RoundedBorder50",
    "RoundedBorder10",
  ]),
  variant: PropTypes.oneOf([
    "OutlineBlack9007f",
    "FillBluegray500",
    "OutlineBlack9007f_1",
    "OutlineGreen800",
    "OutlineRed900",
    "OutlineGreen801",
    "OutlineRedA701",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
