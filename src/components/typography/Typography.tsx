import { ComponentPropsWithoutRef, ElementType } from "react";

import s from "./Typography.module.scss";
import clsx from "clsx";

type TypographyProps<T extends ElementType = "p"> = {
  as?: T;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body_1"
    | "body_2"
    | "body_3"
    | "body_4"
    | "body_4_bold"
    | "body_5"
    | "button_medium"
    | "button_large"
    | "text_placeholder_big"
    | "text_placeholder_small";
} & ComponentPropsWithoutRef<T>;

export const Typography = <T extends ElementType = "p">(
  props: TypographyProps<T>
) => {
  const {
    as: Component = "p",
    className,
    variant = "regular_text_14",
    ...rest
  } = props;

  return <Component className={clsx(s[variant], className)} {...rest} />;
};
