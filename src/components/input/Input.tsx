import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import s from "./Input.module.scss";
import { Typography } from "../typography";
import clsx from "clsx";

type InputRef = ComponentPropsWithoutRef<"input"> & {
  error?: string;
};

export const Input = forwardRef<ElementRef<"input">, InputRef>((props, ref) => {
  const { className, disabled, error, ...rest } = props;

  return (
    <Typography variant="text_placeholder_big" as="div">
      <input
        className={clsx(s.input, disabled && s.disabled, className)}
        {...rest}
        ref={ref}
      />
      <Typography className={s.error} variant="body_5">
        {error}
      </Typography>
    </Typography>
  );
});

Input.displayName = "Input";
