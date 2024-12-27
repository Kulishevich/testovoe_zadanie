import React, { FC } from "react";
import s from "./HomePage.module.scss";
import { QuestionsForm } from "@/components/questionsForm";
import { Header } from "@/components/header";
import { Slider } from "@/components/slider";
import { Footer } from "@/components/footer";
import { YandexMap } from "@/components/yandexMap";

export const HomePage: FC = () => {
  return (
    <div className={s.main}>
      <Header />
      <Slider />
      <YandexMap />
      <QuestionsForm />
      <Footer />
    </div>
  );
};
