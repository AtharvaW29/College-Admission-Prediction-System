import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-5xl md:text-5xl text-8xl",
  h2: "sm:text-5xl md:text-5xl text-[64px]",
  h3: "font-bold text-5xl sm:text-[38px] md:text-[44px]",
  h4: "font-medium sm:text-[34px] md:text-[40px] text-[44px]",
  h5: "sm:text-4xl md:text-[38px] text-[40px]",
  h6: "text-4xl sm:text-[32px] md:text-[34px]",
  body1: "font-light md:text-3xl sm:text-[28px] text-[32px]",
  body2: "font-medium text-3xl sm:text-[26px] md:text-[28px]",
  body3: "font-medium md:text-2xl sm:text-[22px] text-[26px]",
  body4: "text-2xl md:text-[22px] sm:text-xl",
  body5: "font-medium text-xl",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
