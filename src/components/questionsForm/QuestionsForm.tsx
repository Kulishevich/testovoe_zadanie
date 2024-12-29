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
import { showToast } from "../toast";
import { useForm } from "react-hook-form";

export const QuestionsForm: FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const isMobile = useIsMobile("tablet");

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      phone: "",
      comment: "",
    },
  });

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  const handlePost = handleSubmit(async (data) => {
    const message = `Поступила заявка на обратную связь. Номер телефона: ${data.phone} | Комментарий: ${data.comment}`;

    try {
      await sendMessage(message);
      setIsChecked(false);
      showToast({ message: "Ваше сообщене отправлено", variant: "success" });
      reset();
    } catch (e) {
      showToast({ message: e as string, variant: "error" });
    }
  });

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
                error={errors.phone && errors.phone?.message}
                placeholder="+375 (99) 999-99-99"
                {...register("phone", {
                  required: "Поле обязательно для заполнения",
                  pattern: {
                    value: /^\+375 ?\(?\d{2}\)? ?\d{3}-?\d{2}-?\d{2}$/,
                    message: "Введите номер в формате +375 (XX) XXX-XX-XX",
                  },
                })}
              />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="h6" as="h6">
                Комментарий
              </Typography>
              <Comment
                error={errors.comment && errors.comment?.message}
                placeholder="Ваш комментарий"
                {...register("comment", {
                  required: "Пожалуйста введите комментарий",
                })}
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
            <Button disabled={!isChecked} onClick={handlePost}>
              <Typography variant="button_large">Отправить</Typography>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
