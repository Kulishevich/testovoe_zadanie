import { ReactNode } from "react";

import { clsx } from "clsx";
import { ToastT, Toaster, toast } from "sonner";

import styles from "./Toast.module.scss";
import { Typography } from "../typography";
import { XIcon } from "@/assets/icons";
import { Button } from "../button";

const DEFAULT_DURATION = 5000;
const DEFAULT_POSITION = "bottom-left";

type ToastType = "error" | "success";
type ToastOptions = {
  message: ReactNode;
  variant?: ToastType;
} & Omit<ToastT, "id">;

const showToast = ({
  className,
  duration = DEFAULT_DURATION,
  message,
  position = DEFAULT_POSITION,
  variant = "success",
  ...props
}: ToastOptions) => {
  const typesClass = {
    error: styles.error,
    success: styles.success,
  }[variant];

  toast.custom(
    (t) => (
      <div className={clsx(styles.rootClass, typesClass, className)}>
        <div className={clsx(styles.contentWrapper)}>
          <Typography className={styles.message}>{message}</Typography>
        </div>
        <Button
          className={styles.closeButton}
          onClick={() => toast.dismiss(t)}
          variant={"link"}
        >
          <XIcon />
        </Button>
      </div>
    ),
    {
      duration,
      position,
      ...props,
    }
  );
};

export { Toaster, showToast };
