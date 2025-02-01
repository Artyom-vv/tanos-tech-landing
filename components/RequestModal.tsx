import Modal from 'react-modal';
import React, { useContext, useState, useEffect } from 'react';
import { ModalContext } from '@/pages';
import { Button, Divider, IconButton, tet, TextInput } from '@virtuslab/tetrisly-react';
import { CustomTagProps, TagSelector } from '@/components/CustomTag';
import PhoneInput from '@/components/PhoneInput';

export function RequestModal({ isModal }: { isModal: boolean }) {
    const { closeModal } = useContext(ModalContext);
    const [tags] = useState<CustomTagProps[]>([
        {
            label: 'Рекомендации',
            value: 'recommendation',
            onClick: () => {},
        },
        {
            label: 'Соц. сети',
            value: 'socials',
            onClick: () => {},
        },
        {
            label: 'СМИ',
            value: 'media',
            onClick: () => {},
        },
    ]);
    const [showContent, setShowContent] = useState(false);

    // Эффект для анимации появления контента
    useEffect(() => {
        setShowContent(isModal);
    }, [isModal]);

    return (
        <Modal
            style={{
                content: {
                    backgroundColor: '#FFFFFF',
                },
                overlay: {
                    zIndex: 999,
                    backgroundColor: '#0000004D',
                },
            }}
            isOpen={isModal}
            className={`mt-4 h-full py-14 relative transition-all duration-300 ${showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
        >
            <div className="max-w-[656px] mx-auto w-full">
                <tet.h2 text="$typo-hero-large">Оставьте заявку</tet.h2>
                <tet.p
                    text="$typo-body-large"
                    color="$color-content-secondary"
                    className="mt-4"
                >
                    Заполните форму, мы свяжемся с Вами
                </tet.p>
                <div className="my-6">
                    <Divider custom={{ color: '$color-border-default' }} />
                </div>
                <div className="mb-12">
                    <tet.h3 text="$typo-header-3xLarge" className="mb-6">
                        Контакты
                    </tet.h3>
                    <div className="flex flex-col gap-4">
                        <TextInput placeholder="Как к Вам обращаться?" />
                        <PhoneInput />
                    </div>
                </div>
                <div className="mb-12">
                    <tet.h3 text="$typo-header-3xLarge" className="mb-6">
                        Задача
                    </tet.h3>
                    <TextInput className="mb-2" placeholder="Опишите задачу" />
                    <Button variant="bare" appearance="primary" beforeIcon="20-attachment">
                        Прикрепить файл
                    </Button>
                </div>
                <div className="mb-12">
                    <tet.h3 text="$typo-header-3xLarge" className="mb-6">
                        Откуда вы узнали о нас?
                    </tet.h3>
                    <TagSelector className="flex gap-3" tags={tags} />
                </div>

                <div className="my-6">
                    <Divider custom={{ color: '$color-border-default' }} />
                </div>

                <Button appearance="primary" size="large">
                    Оставить заявку
                </Button>
                <tet.p
                    text="$typo-body-large"
                    color="$color-content-secondary"
                    className="mt-4"
                >
                    Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и с политикой конфиденциальности
                </tet.p>
            </div>

            <IconButton
                icon="20-close"
                variant="ghost"
                appearance="primary"
                size="large"
                className="absolute right-14 top-14"
                onClick={() => {
                    setShowContent(false);
                    setTimeout(closeModal, 250)
                }}
            />
        </Modal>
    );
}