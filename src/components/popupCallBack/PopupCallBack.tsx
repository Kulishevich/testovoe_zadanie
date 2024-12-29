import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import s from "./PopupCallBack.module.scss";
import Image from "next/image";
import { Typography } from "../typography";
import { Input } from "../input";
import { Comment } from "../comment";
import { Button } from "../button";
import { Checkbox } from "../checkbox";
import { XIcon } from "@/assets/icons";
import { sendMessage } from "@/api/telegram";
import { useIsMobile } from "@/utils/UseIsMobile";
import { showToast } from "../toast";
import { useForm } from "react-hook-form";

type PopupCallBackProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PopupCallBack = ({ isOpen, setIsOpen }: PopupCallBackProps) => {
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

  const handleCloseModal = () => {
    setIsOpen((prev) => !prev);
    setIsChecked(false);
    reset();
  };

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
    <Dialog.Root open={isOpen} onOpenChange={handleCloseModal}>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay} />
        <Dialog.Content className={s.content}>
          <Image
            src="/image.png"
            alt="image"
            width={!isMobile ? 660 : 335}
            height={!isMobile ? 198 : 140}
            className={s.image}
          />
          <Button
            className={s.iconButton}
            variant={"link"}
            onClick={handleCloseModal}
          >
            <XIcon />
          </Button>
          <div className={s.form}>
            <div className={s.title}>
              <Typography variant="h4" as="h4">
                Обратный звонок
              </Typography>
              <Typography variant="body_3">
                Заполните форму ниже, и наш специалист свяжется с вами
                в ближайшее время.
              </Typography>
            </div>
            <div className={s.inputs}>
              <div className={s.input}>
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
              <div className={s.input}>
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
              <Button onClick={handlePost} disabled={!isChecked}>
                <Typography variant="button_large">Отправить</Typography>
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
