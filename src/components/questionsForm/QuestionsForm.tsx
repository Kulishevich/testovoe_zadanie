import React, { FC, useState } from "react";
import s from "./QuestionsForm.module.scss";
import Image from "next/image";
import { Typography } from "../typography";
import { Input } from "../input";
import { Comment } from "../comment";
import { Checkbox } from "../checkbox";
import { Button } from "../button";
import { sendMessage } from "@/api/telegram";
import { useIsMobile } from "@/utils/UseIsMobile";

export const QuestionsForm: FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const isMobile = useIsMobile("tablet");
  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const message = `Поступила заявка на обратную связь. Номер телефона: ${phone} | Комментарий: ${comment}`;
    try {
      await sendMessage(message);
      setPhone("");
      setComment("");
      setIsChecked(false);
    } catch (e) {
      console.error(e as string);
    }
  };

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <Image
          src="/image1.jpg"
          alt="image"
          width={!isMobile ? 660 : 335}
          height={!isMobile ? 428 : 200}
          className={s.image}
        />
        <div className={s.form}>
          <div className={s.title}>
            <Typography variant="h2" as="h2">
              Остались вопросы?
            </Typography>
            <Typography variant="body_2">
              Заполните форму ниже, и наш специалист свяжется с вами в ближайшее
              время.
            </Typography>
          </div>
          <div className={s.inputs}>
            <div className={s.inputContainer}>
              <Typography variant="h6" as="h6">
                Телефон*
              </Typography>
              <Input
                placeholder="+375 (99) 999-99-99"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="h6" as="h6">
                Комментарий
              </Typography>
              <Comment
                placeholder="Ваш комментарий"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
          </div>
          <div className={s.submit}>
            <div className={s.checkboxContainer}>
              <Checkbox
                checked={isChecked}
                onCheckedChange={handleCheckboxChange}
              />
              <Typography variant="body_3">
                Согласие на обработку персональных данных
              </Typography>
            </div>
            <Button disabled={!isChecked} onClick={handleSubmit}>
              <Typography variant="button_large">Отправить</Typography>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
