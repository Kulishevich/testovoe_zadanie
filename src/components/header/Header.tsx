import React, { FC } from "react";
import s from "./Header.module.scss";
import { Typography } from "../typography";
import { HouseIcon } from "@/assets/icons";
import { Button } from "../button";

export const Header: FC = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.logoContainer}>
          <HouseIcon />
          <div className={s.textLogo}>
            <Typography variant="body_3">Строительные решения</Typography>
            <Typography variant="body_5">строительная компания</Typography>
          </div>
        </div>
        <div className={s.contactInfo}>
          <div className={s.adress}>
            <Typography variant="h6" as="h6">
              Адрес офиса:
            </Typography>
            <Typography variant="body_3" as="p">
              РБ, г. Минск, <br />
              ул. Ленина, 1
            </Typography>
          </div>
          <div className={s.phoneNumbers}>
            <Typography variant="h6" as="h6">
              +375 99 999 99 99
            </Typography>
            <Typography variant="body_3" as="p">
              пн – пт: с 09:00 до 18:00
            </Typography>
            <Typography variant="body_3" as="p">
              сб – вс: с 10:00 до 16:00
            </Typography>
          </div>
          <Button className={s.button} variant={"outlined"}>
            <Typography variant="button_large">Заказать звонок</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};
