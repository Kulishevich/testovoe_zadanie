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

type PopupCallBackProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const PopupCallBack = ({ isOpen, setIsOpen }: PopupCallBackProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const handleCloseModal = () => {
    setIsOpen(false);
  };

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
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay} />
        <Dialog.Content className={s.content}>
          <Image
            src="/image.png"
            alt="image"
            width={660}
            height={198}
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
                  placeholder="+375 (99) 999-99-99"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className={s.input}>
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
              <Button onClick={handleSubmit} disabled={!isChecked}>
                <Typography variant="button_large">Отправить</Typography>
              </Button>
            </div>
          </div>

          {/* <Dialog.Close>Close</Dialog.Close> */}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
