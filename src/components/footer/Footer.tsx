import React, { FC } from "react";
import s from "./Footer.module.scss";
import { HouseIcon } from "@/assets/icons";
import { Typography } from "../typography";
import { useIsMobile } from "@/utils/UseIsMobile";

export const Footer: FC = () => {
  const isMobile = useIsMobile("tablet");

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.logoContainer}>
          <div className={s.logo}>
            <HouseIcon
              width={isMobile ? "42" : "64"}
              height={isMobile ? "42" : "64"}
            />
            <div className={s.textLogo}>
              <Typography variant="body_3">Строительные решения</Typography>
              <Typography variant="body_5">строительная компания</Typography>
            </div>
          </div>
          <Typography variant="body_3">
            © 2024 ООО “Строительные решения”
          </Typography>
        </div>
        <div className={s.adressContainer}>
          <div className={s.adress}>
            <Typography variant="h6" as="h6">
              Адрес офиса
            </Typography>
            <Typography variant="body_3" as="p">
              РБ, г. Минск, ул. Ленина, 1
            </Typography>
          </div>
          <div className={s.workTime}>
            <Typography variant="body_3" as="p">
              пн – пт: с 09:00 до 18:00
            </Typography>
            <Typography variant="body_3" as="p">
              сб – вс: с 10:00 до 16:00
            </Typography>
          </div>
        </div>
        <div className={s.infoContainer}>
          <Typography className={s.info} variant="body_3">
            ООО “Строительные решения”
            <br />
            Юридический адрес: <br />
            РБ, г. Минск, ул. Ленина, 1<br />
            УНП: 111111111
          </Typography>
          <Typography className={s.executor} variant="body_3">
            Разработка сайта:{" "}
            <Typography variant="h6" as="span">
              Web-space.by
            </Typography>
          </Typography>
        </div>
      </div>
    </div>
  );
};
