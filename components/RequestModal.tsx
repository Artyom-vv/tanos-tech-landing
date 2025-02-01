import Modal from 'react-modal';
import React, {useContext} from "react";
import {ModalContext} from "@/pages";
import {Button, Divider, IconButton, tet, TextInput} from "@virtuslab/tetrisly-react";
import {} from "@virtuslab/tetrisly-react";
import {CustomTag} from "@/components/CustomTag";

export function RequestModal({isModal}: {isModal: boolean}) {
    const {closeModal} = useContext(ModalContext)
    return (
        <Modal
            style={{
                content: {
                    backgroundColor: '#FFFFFF'
                },
                overlay: {
                    backgroundColor: '#0000004D',
                }
            }}
            isOpen={isModal}
            className="mt-4 h-full py-14 relative"
        >
            <div className="max-w-[656px] mx-auto w-full">
                <tet.h2
                    text="$typo-hero-large"
                >
                    Оставьте заявку
                </tet.h2>
                <tet.p
                    text="$typo-body-large"
                    color="$color-content-secondary"
                    className="mt-4"
                >
                    Заполните форму, мы свяжемся с Вами
                </tet.p>
                <div className="my-6">
                    <Divider custom={{color: '$color-border-default'}}/>
                </div>
                <div className="mb-12">
                    <tet.h3
                        text="$typo-header-3xLarge"
                        className="mb-6"
                    >
                        Контакты
                    </tet.h3>
                    <div className="flex flex-col gap-4">
                        <TextInput placeholder="Как к Вам обращаться?"/>
                        <TextInput
                            beforeComponent={{
                                props: {
                                    label: '+7',
                                },
                                type: 'Dropdown'
                            }}
                            placeholder="Как к Вам обращаться?"/>
                    </div>
                </div>
                <div className="mb-12">
                    <tet.h3
                        text="$typo-header-3xLarge"
                        className="mb-6"
                    >
                        Задача
                    </tet.h3>
                    <TextInput
                        className="mb-2"
                        placeholder="Опишите задачу"/>
                    <Button variant="bare" appearance="primary" beforeIcon="20-attachment">Прикрепить файл</Button>
                </div>
                <div className="mb-12">
                    <tet.h3
                        text="$typo-header-3xLarge"
                        className="mb-6"
                    >
                        Откуда вы узнали о нас?
                    </tet.h3>
                    <div className="flex gap-3">
                        <CustomTag>Рекомендации</CustomTag>
                        <CustomTag>Соц. сети</CustomTag>
                        <CustomTag>СМИ</CustomTag>
                    </div>
                </div>

                <div className="my-6">
                    <Divider custom={{color: '$color-border-default'}}/>
                </div>

                <Button appearance="primary" size="large">Оставить заявку</Button>
                <tet.p
                    text="$typo-body-large"
                    color="$color-content-secondary"
                    className="mt-4"
                >
                    Нажимая на кнопку, вы соглашаетесь на обработку персональных данных  и с политикой конфиденциальности
                </tet.p>
            </div>

            <IconButton
                icon="20-close"
                variant="ghost"
                appearance="primary"
                size="large"
                className="absolute right-14 top-14"
                onClick={closeModal}
            />
        </Modal>
    )
}