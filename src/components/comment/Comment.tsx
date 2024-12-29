import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import s from "./Comment.module.scss";
import { Typography } from "../typography";
import clsx from "clsx";

type CommentProps = ComponentPropsWithoutRef<"textarea"> & {
  error?: string;
};

export const Comment = forwardRef<ElementRef<"textarea">, CommentProps>(
  (props, ref) => {
    const { className, error, disabled, ...rest } = props;

    return (
      <Typography
        variant="text_placeholder_big"
        as="div"
        className={s.container}
      >
        <textarea
          className={clsx(s.textarea, disabled && s.disabled, className)}
          ref={ref}
          {...rest}
        />
        <Typography className={s.error} variant="body_5">
          {error}
        </Typography>
      </Typography>
    );
  }
);

Comment.displayName = "Comment";
