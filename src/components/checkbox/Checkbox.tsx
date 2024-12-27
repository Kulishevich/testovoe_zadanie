import {
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
} from "react";

import * as RadixCheckbox from "@radix-ui/react-checkbox";

import s from "./Checkbox.module.scss";
import clsx from "clsx";
import { CheckIcon } from "@/assets/icons";

export type CheckboxProps = {
  error?: string;
  isRequired?: boolean;
  label?: ReactNode;
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>;

type CheckboxRef = ElementRef<typeof RadixCheckbox.Root>;

export const Checkbox = forwardRef<CheckboxRef, CheckboxProps>((props, ref) => {
  const { className, disabled, error, ...rest } = props;

  return (
    <div className={s.container}>
      <RadixCheckbox.Root
        className={clsx(s.root, error && s.error, className)}
        disabled={disabled}
        ref={ref}
        {...rest}
      >
        <RadixCheckbox.Indicator
          className={clsx(s.indicator, disabled && s.disabled)}
        >
          <CheckIcon />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    </div>
  );
});

Checkbox.displayName = "Checkbox";
