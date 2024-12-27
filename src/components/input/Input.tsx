import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import s from "./Input.module.scss";
import { Typography } from "../typography";
import clsx from "clsx";

type InputRef = ElementRef<"input">;

export const Input = forwardRef<InputRef, ComponentPropsWithoutRef<"input">>(
  (props, ref) => {
    const { className, disabled, ...rest } = props;

    return (
      <Typography variant="text_placeholder_big" as="div">
        <input
          className={clsx(s.input, disabled && s.disabled, className)}
          {...rest}
          ref={ref}
        />
      </Typography>
    );
  }
);

Input.displayName = "Input";
