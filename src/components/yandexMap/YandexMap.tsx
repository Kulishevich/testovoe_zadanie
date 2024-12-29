import { FC } from "react";
import s from "./YandexMap.module.scss";
import { useIsMobile } from "@/utils/UseIsMobile";

export const YandexMap: FC = () => {
  const isMobile = useIsMobile("tablet");

  return (
    <div className={s.wrapper}>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <a
          href="https://yandex.by/maps/157/minsk/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "0px",
          }}
        >
          Минск
        </a>
        <a
          href="https://yandex.by/maps/157/minsk/?ll=27.569305%2C53.886387&utm_medium=mapframe&utm_source=maps&z=16.18"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "14px",
          }}
        >
          Яндекс Карты — транспорт, навигация, поиск мест
        </a>
        <iframe
          src="https://yandex.by/map-widget/v1/?ll=27.665928%2C53.988442&mode=whatshere&whatshere%5Bpoint%5D=27.665928%2C53.988442&whatshere%5Bzoom%5D=17&z=16"
          width={!isMobile ? "1356" : "335"}
          height={!isMobile ? "480" : "230"}
          frameBorder="1"
          allowFullScreen={true}
          style={{ position: "relative" }}
        ></iframe>
      </div>
    </div>
  );
};
