import { Autoplay, EffectFade, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import s from "./Slider.module.scss";
import Image from "next/image";
import { Typography } from "../typography";
import { Button } from "../button";
import { InfoCard } from "../infoCard";
import { FC, useState } from "react";
import { PopupCallBack } from "../popupCallBack";

const slides = [
  {
    title:
      "Создадим ваш идеальный дом в установленные сроки и с 10-летней гарантией",
    text: "Без головной боли и отклонений от сметы строительства",
  },
  {
    title:
      "Мы создаем надежные и современные дома для вашего уютного проживания",
    text: "В своей работе мы применяем современные технологии и специализированное строительное оборудование",
  },
  {
    title:
      "В нашей команде работают квалифицированные сотрудники с опытом работы от 5 лет",
    text: "Мы оперативно выполняем весь спектр строительных работ",
  },
];
export const Slider: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpenModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={s.carouselRoot}>
      <Image
        src="/image2.png"
        alt="Full screen background"
        fill
        className={s.image}
      />
      <div className={s.container}>
        <div className={s.sliderContainer}>
          <Swiper
            centeredSlides
            className={s.swiper}
            modules={[EffectFade, Keyboard, Pagination, Autoplay]}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: ".swiper-pagination",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide className={s.slide} key={index}>
                <Typography variant="h1" as="h1">
                  {slide.title}
                </Typography>
                <Typography variant="body_1">{slide.text}</Typography>
              </SwiperSlide>
            ))}
          </Swiper>
          <Button onClick={handleOpenModal}>
            <Typography variant={"button_large"}>Узнать стоимость</Typography>
          </Button>
        </div>
        <InfoCard />
      </div>
      <div className={"swiper-pagination"}></div>
      <PopupCallBack isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

Slider.displayName = "Slider";
