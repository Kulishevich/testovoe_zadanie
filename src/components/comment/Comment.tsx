import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import s from "./Comment.module.scss";
import { Typography } from "../typography";
import clsx from "clsx";

type TextareaRef = ElementRef<"textarea">;

export const Comment = forwardRef<
  TextareaRef,
  ComponentPropsWithoutRef<"textarea">
>((props, ref) => {
  const { className, disabled, ...rest } = props;

  return (
    <Typography variant="text_placeholder_big" as="div" className={s.container}>
      <textarea
        className={clsx(s.textarea, disabled && s.disabled, className)}
        ref={ref}
        {...rest}
      />
    </Typography>
  );
});

Comment.displayName = "Comment";
