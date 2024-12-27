import { UpRightIcon } from "@/assets/icons";
import React, { FC } from "react";
import { Typography } from "../typography";
import { Button } from "../button";

import s from "./InfoCard.module.scss";
import Image from "next/image";
import { useIsMobile } from "@/utils/UseIsMobile";

export const InfoCard: FC = () => {
  const isMobile = useIsMobile("tablet");

  return (
    <div className={s.info}>
      <div className={s.containerLink}>
        <Typography variant="h5" as="h5">
          Оформление рассрочки по ставке от 15% годовых
        </Typography>
        <Button as={"a"} href={"/#"} variant={"link"}>
          <Typography variant="button_medium" className={s.link}>
            Подробнее
          </Typography>
          <UpRightIcon width={24} height={24} />
        </Button>
      </div>
      <div className={s.containerImage}>
        <Image
          src="/image3.png"
          alt="Full screen background"
          fill
          className={s.image}
        />
        <div className={s.gradient}>
          <Typography variant="h5" as="h5">
            Барнхаусы
          </Typography>
        </div>
      </div>
      {!isMobile && (
        <div className={s.containerImage}>
          <Image
            src="/image4.png"
            alt="Full screen background"
            fill
            className={s.image}
          />
          <div className={s.gradient}>
            <Typography variant="h5" as="h5">
              Таунхаусы
            </Typography>
          </div>
        </div>
      )}
      {!isMobile && (
        <div className={s.containerLink}>
          <Typography variant="h5" as="h5">
            Скидка до 5% при полной предоплате за проект
          </Typography>
          <Button as={"a"} href={"/#"} variant={"link"}>
            <Typography variant="button_medium" className={s.link}>
              Подробнее
            </Typography>
            <UpRightIcon width={24} height={24} />
          </Button>
        </div>
      )}
    </div>
  );
};
